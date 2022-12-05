from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from app.models.rate import Rate
from app.models.currency import Currency
import requests
from datetime import timedelta, datetime

router = APIRouter()


@router.get("/")
def get_all_currencies_and_rates(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    """
    get all the rates of all the currencies.
    """
    currencies = crud.currency.get_multi(db, skip=skip, limit=limit)
    return currencies


@router.get("/currencies")
def get_all_currencies(db: Session = Depends(get_db)):
    """Get all currencies"""
    currencies = crud.currency.get_all_currencies(db)

    # Parse data
    data = {
        "success": True,
        "status_code": 200,
        "currencies": currencies
    }

    return data

@router.get("/currencies/{isocode}")
def get_currencies_and_rates(isocode: str, db: Session = Depends(get_db)):
    """
    gets the rates of all currencies in respect to a base currency
    also gets the country flags.
    """
    # Get currency
    currency = crud.currency.get_currency_by_isocode(db, isocode.upper())

    # Get other currencies
    all_currencies = crud.currency.get_currencies_and_rate(db, isocode.upper())

    # Get country codes
    codes = requests.get("https://flagcdn.com/en/codes.json").json()
    
    # Create object
    currencies = []
    
    for cur in all_currencies:
        currency = cur.dict()
        rate = db.query(Rate).filter(
            Rate.currency_id == cur.id
            ).order_by(Rate.id.desc()).first()
        currency["rate"] = rate
        # Get currency flag
        name = cur.country
        for key, value in codes.items():
            if value == name:
                currency["flag"] = f"https://flagcdn.com/{key}.svg"
                break

        currencies.append(currency)

    return currencies


@router.get("/currency_search/{search_term}")
def currency_search(search_term: str, db: Session = Depends(get_db)):
    """
    This end point returns the currency associated with the string passed in(which can be the currency name or country name)
    INPUT: currency name or country name: str
    OUTPUT: {'success': True, 'status_code': 200, "currency": currency}
    """
    key_word = crud.currency.get_currency_by_country_name(db=db, country_name=search_term)
    if not key_word:
        key_word = key_word = crud.currency.get_currency_by_currency_name(db=db, currency_name=search_term)
    if not key_word:
        raise HTTPException(status_code=404, detail=f"Currency not found")
    return {
        "Success": True,
        "currency": key_word
    }

  
 
@router.get("/currencies/flags")
def get_currencies_and_flags(db: Session = Depends(get_db)):
    """
    gets the rates of all currencies in respect to a base currency
    also gets the country flags.
    """
    # Get other currencies
    all_currencies = crud.currency.get_all_currencies(db)

    # Get country codes
    codes = requests.get("https://flagcdn.com/en/codes.json").json()
    
    # Create object
    currencies = []
    
    for cur in all_currencies:
        currency = cur.dict()

        # Get currency flag
        name = cur.country
        for key, value in codes.items():
            if value == name:
                currency["flag"] = f"https://flagcdn.com/{key}.svg"
                break

        currencies.append(currency)

    return currencies

@router.get("/currency/{isocode}")
def get_currency(isocode: str, db: Session = Depends(get_db)):
    """get details of currency.
    Returns the details of a currency
    Args:
        isocode (str): A unique identifier of a currency
    Returns:
        HTTP_200_OK  {data:curency_details}
    Raises
        HTTP_424_FAILED_DEPENDENCY: could not get currency
    """
    # Get currency
    currency = crud.currency.get_currency_by_isocode(db, isocode.upper())

    if currency == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="currency does not exist"
        )

    #get rate
    rate = crud.rate.get(db,model_id = currency.id)
    #create dictionary for currency object
    currency_dict = currency.dict()
    #append rate to currency object
    currency_dict["rate"] = rate

    #get currency name and flag
    name = currency.country
    codes = requests.get("https://flagcdn.com/en/codes.json").json()
    for key, value in codes.items():
            if value == name:
                currency_dict["flag"] = f"https://flagcdn.com/{key}.svg"
                break


    return {
        "success":True,
        "status_code": 200,
        "data":currency_dict
    }


@router.get("/trend/{isocode}")
def get_currency_trend(isocode: str, db: Session = Depends(get_db)):
    """Get currency trend information for a given currency"""
    currency = crud.currency.get_currency_by_isocode(db, isocode.upper())

    # Get latest rate
    latest = db.query(Rate).filter(
        Rate.currency_id == currency.id).order_by(
            Rate.last_updated.desc()).first()

    # Get 1 hour change
    hour = db.query(Rate).filter(
        Rate.currency_id == currency.id).filter(
            Rate.last_updated <= datetime.now() - timedelta(hours=1)
        ).order_by(
            Rate.last_updated.desc()
        ).first()
    
    # Get a day change
    day = db.query(Rate).filter(
        Rate.currency_id == currency.id).filter(
            Rate.last_updated <= datetime.now() - timedelta(days=1)
        ).order_by(
            Rate.last_updated.desc()
        ).first()
    
    # Get 7 days change
    days7 = db.query(Rate).filter(
        Rate.currency_id == currency.id).filter(
            Rate.last_updated <= datetime.now() - timedelta(days=7)
        ).order_by(
            Rate.last_updated.desc()
        ).first()
    
    # Get a month
    month = db.query(Rate).filter(
        Rate.currency_id == currency.id).filter(
            Rate.last_updated <= datetime.now() - timedelta(days=31)
        ).order_by(
            Rate.last_updated.desc()
        ).first()

    # Parse data
    data = currency.dict()
    if hour is not None:
        data["one_hour"] = ((latest.parallel_buy - hour.parallel_buy) / latest.parallel_buy) * 100
    else:
        data["one_hour"] = None
    if day is not None:
        data["one_day"] = ((latest.parallel_buy - day.parallel_buy) / latest.parallel_buy) * 100
    else:
        data["one_day"] = None
    if days7 is not None:
        data["seven_days"] = ((latest.parallel_buy - days7.parallel_buy) / latest.parallel_buy) * 100
    else:
        data["seven_days"] = None
    if month is not None:
        data["one_month"] = ((latest.parallel_buy - month.parallel_buy) / latest.parallel_buy) * 100
    else:
        data["one_month"] = None

    data = {
        "success": True,
        "status_code": 200,
        "data": data
    }

    return data
