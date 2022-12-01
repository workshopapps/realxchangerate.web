from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from app import schemas, crud
from app.api.deps import get_db
from app.models.rate import Rate
from app.models.currency import Currency
from app.api.deps import get_location
from datetime import datetime, timedelta
router = APIRouter()

#  get rates ofbject for a spcific isocode


@router.get("/{isocode}")
def get_rate_by_isocode(isocode, db: Session = Depends(get_db)):
    """
    Get rate of selected currency

    Args:
        isocode (str): Country isocode
    """
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {"success": False, "message": "Currency not found", "status_code": 404}
    rate = (
        db.query(Rate)
        .filter(Rate.currency_id == currency.id)
        .order_by(Rate.last_updated.desc())
        .first()
    )
    return {
        "success": True,
        "status_code": 200,
        "data": {"currency": currency, "rate": rate},
    }


@router.get("/all/{isocode}")
def get_all_rates_by_isocode(isocode, db: Session = Depends(get_db)):
    """
    Get all the rates of selected currency by isocode

    Args:
        isocode (str): Country isocode
    """
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {"success": False, "message": "Currency not found", "status_code": 404}
    rate = (
        db.query(Rate)
        .filter(Rate.currency_id == currency.id)
        .order_by(Rate.last_updated.desc())
        .all()
    )
    return {
        "success": True,
        "status_code": 200,
        "data": {"currency": currency, "rate": rate},
    }

    # """get the last 5 rates of a currency by its isocode."""


@router.get("/history/{isocode}")
def get_rates_by_limit(isocode, db: Session = Depends(get_db), limit: int = 15):
    # queries for currency based on isocode
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)

    # return 404 status code if no currency was found
    if currency == None:
        raise HTTPException(status_code=404, detail="Currency not found")

    # restrict limit to < 15 rate objects
    if limit > 15:
        raise HTTPException(
            status_code=400, detail="Not more than 15 rates per request"
        )

    # get rate objects based on limit set
    rate = crud.rate.get_rates_by_limit(
        db, currency_id=currency.id, limit=limit)

    # return no content if no rate object was found
    if rate == None:
        raise HTTPException(status_code=204, detail="No Content")

    # return response with status code 200, currency and list of rates
    return {"status_code": 200, "data": {"currency": currency, "rates": rate}}


@router.get("/ip/{ip}")
def get_currency_by_ip(ip, db: Session = Depends(get_db)):
    # Get country
    country = get_location(ip)

    currency = db.query(Currency).filter(Currency.country == country).first()

    rates = (
        db.query(Rate)
        .filter(Rate.currency_id == currency.id)
        .order_by(Rate.last_updated.desc())
        .all()[:5]
    )
    if len(rates) == 0:
        return {
            "success": False,
            "message": "No rate history found",
            "status_code": 404,
        }
    return {
        "success": True,
        "status_code": 200,
        "data": {"currency": currency, "rate": rates},
    }


@router.get("/", response_model=List[schemas.Rate])
def get_all_rates(
    db: Session = Depends(get_db), skip: int = 0, limit: int = 100
) -> Any:
    """
    get all rates.
    """
    rate = crud.rate.get_multi(db, skip=skip, limit=limit)
    if not rate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="rates are not available at the moment",
        )
    return rate


@router.get("/convert/calc")
def convert_currency(
    *,
    db: Session = Depends(get_db),
    from_currency: str = Query(max_length=3, min_length=3),
    to_currency: str = Query(max_length=3, min_length=3),
    amount: str,
) -> Any:
    """
    This endpoint converts amount from one currency to another.
    `amount`: The amount you want to covert
    `from_currency`: The isocode of currency you want to convert from.
    `to_currency`: The isocode of currency you want to convert to.
    """
    from_currency_in, to_currency_in = from_currency.upper(), to_currency.upper()
    from_currency_obj = crud.currency.get_currency_by_isocode(
        db, isocode=from_currency_in
    )
    to_currency_obj = crud.currency.get_currency_by_isocode(
        db, isocode=to_currency_in)
    if from_currency_obj is None or to_currency_obj is None:
        return {"success": False, "message": "Please send a valid currency isocode."}

    try:
        from_rate_obj = crud.rate.get_rate_by_currency_id(
            db, currency_id=from_currency_obj.id
        )
        to_rate_obj = crud.rate.get_rate_by_currency_id(
            db, currency_id=to_currency_obj.id
        )
        from_official_rate, to_official_rate = (
            from_rate_obj.official_buy,
            to_rate_obj.official_buy,
        )
        from_parallel_rate, to_parallel_rate = (
            from_rate_obj.parallel_buy,
            to_rate_obj.parallel_buy,
        )

        official_result = float(amount) / from_official_rate * to_official_rate
        parallel_result = float(amount) / from_parallel_rate * to_parallel_rate

        return {
            "success": True,
            "data": {
                "amount": amount,
                "from": from_currency_in,
                "to": to_currency_in,
                "parallel_total": "{:,.2f}".format(parallel_result),
                "official_total": "{:,.2f}".format(official_result),
            },
        }
    except:
        return {"success": False, "message": "Failed to convert currencies."}


@router.get("/date/{hour}")
def get_rates_before_hour(hour: int, db: Session = Depends(get_db)):
    """Get rates before a particular hour"""
    time = datetime.now() - timedelta(hours=hour)
    rates = db.query(Rate).filter(Rate.last_updated <= time).all()

    data = {
        "success": True,
        "status_code": 200,
        "rates": rates
    }

    return data

@router.get("/high_low/{isocode}")
def get_highest_and_lowest_rates(isocode, db: Session = Depends(get_db)):
    """
    Get the highest and lowest rates for a selected currency by isocode

    Args:
        isocode (str): Country isocode
    """
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {"success": False, "message": "Currency not found", "status_code": 404}
    result = {}
    rate = (
        db.query(Rate)
        .filter(Rate.currency_id == currency.id)
        .order_by(Rate.parallel_buy.desc())
        .all()
    )
    result["highest"] = rate[0]
    result["lowest"] = rate[-1]
    return {
        "success": True,
        "status_code": 200,
        "data": {"currency": currency, "data": result},
    }
