from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from app.models.rate import Rate
import requests

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
