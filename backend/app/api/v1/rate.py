from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import schemas
import crud
from api.deps import get_db
from models.rate import Rate
from models.currency import Currency
router = APIRouter()

#  get rates ofbject for a spcific isocode


@router.get('/{isocode}')
def getRate(isocode, db: Session = Depends(get_db)):
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {
            "success": False, "message": "Currency not found", "status_code": 404
        }
    rate = db.query(Rate).filter(Rate.currency_id ==
                                 currency.id).order_by(Rate.id).first()
    return {"success": True, "status_code": 200, "data": {"currency": currency, "rate": rate}}

    # """get the last 5 rates of a currency by its isocode."""


@router.get('history/{isocode}')
def getfiveRates(isocode, db: Session = Depends(get_db)):
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {
            "success": False, "message": "Currency not found", "status_code": 404
        }
    rate = db.query(Rate).filter(Rate.currency_id ==
                                 currency.id).order_by(Rate.id).all()[:5]
    if len(rate) == 0:
        return {
            "success": False, "message": "No rate history found", "status_code": 404
        }
    return {"success": True, "status_code": 200, "data": {"currency": currency, "rate": rate}}
