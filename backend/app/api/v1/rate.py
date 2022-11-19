from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from app.models.rate import Rate
from app.models.currency import Currency
router = APIRouter()

#  get rates ofbject for a spcific isocode
@router.get('/{isocode}')
def getCurrency(isocode, db:Session = Depends(get_db)):
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {
            "success":False, "message":"Currency not found", "status_code":404 
        }
    rate = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(Rate.id).first()
    return {"success":True, "status_code":200, "data": {"currency":currency, "rate":rate}}