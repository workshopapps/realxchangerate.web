from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from app.models.rate import Rate
from app.models.currency import Currency
from app.api.deps import get_location

router = APIRouter()

#  get rates ofbject for a spcific isocode


@router.get('/{isocode}')
def get_rate_by_isocode(isocode, db: Session = Depends(get_db)):
    """
    Get rate of selected currency

    Args:
        isocode (str): Country isocode
    """
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {
            "success": False, "message": "Currency not found", "status_code": 404
        }
    rate = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(
        Rate.last_updated.desc()).first()
    return {"success": True, "status_code": 200, "data": {"currency": currency, "rate": rate}}

    # """get the last 5 rates of a currency by its isocode."""


@router.get('/history/{isocode}')
def get_five_rates(isocode, db: Session = Depends(get_db)):
    currency = crud.currency.get_currency_by_isocode(db, isocode=isocode)
    if currency == None:
        return {
            "success": False, "message": "Currency not found", "status_code": 404
        }
    rate = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(
        Rate.last_updated.desc()).all()[:5]
    if len(rate) == 0:
        return {
            "success": False, "message": "No rate history found", "status_code": 404
        }
    return {"success": True, "status_code": 200, "data": {"currency": currency, "rate": rate}}


@router.get('/ip/{ip}')
def get_currency_by_ip(ip, db: Session = Depends(get_db)):
    # Get country
    country = get_location(ip)

    currency = db.query(Currency).filter(Currency.country == country).first()

    rates = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(
        Rate.last_updated.desc()).all()[:5]
    if len(rates) == 0:
        return {
            "success": False, "message": "No rate history found", "status_code": 404
        }
    return {"success": True, "status_code": 200, "data": {"currency": currency, "rate": rates}}


@router.get("/", response_model=List[schemas.Rate])
def get_all_rates(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    """
    get all rates.
    """
    rate = crud.rate.get_multi(db, skip=skip, limit=limit)
    if not rate:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="rates are not available at the moment")
    return rate
