from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.models.rate import Rate
from app.models.currency import Currency
from app import schemas, crud, models
from app.api.deps import get_db

router = APIRouter()

@router.post('/update_currencies')
def update_currencies(iso_code: str, update_param: schemas.CurrencyUpdate, db: Session = Depends(get_db)):
    """
    this endpoint recives details to update a currency, it finds the currency in the database with the iso code provided

    """
    details = crud.currency.get_currency_by_isocode(db=db, isocode=iso_code)

    if not details:
        raise HTTPException(status_code=404, detail=f"No record found to update")

    return crud.currency.update(db=db,db_obj=details, obj_in=update_param)

@router.post("/update_rate")
def  update_rate(iso_code: str, update_param: schemas.RateUpdate, db: Session = Depends(get_db)):
    """
    This endpoint recives details to update a currency rate. It finds the rate in the database by locating
    the currency associated with it through the iso code provided
    """
    currency = crud.currency.get_currency_by_isocode(db=db, isocode=iso_code)

    if not currency:
        raise HTTPException(status_code=404, detail=f"Currency not found")
    # rate collects the last updated rate stored in the database
    rate = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(Rate.last_updated.desc()).first()
    if not rate:
        raise HTTPException(status_code=404, detail=f"No rate for the currency found to update")
    # the return function updates the rate in the database 
    return crud.currency.update(db=db, db_obj=rate, obj_in=update_param)

