from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from app.models.rate import Rate
from app.models.currency import Currency
from app.api.deps import get_location

router = APIRouter()

#  get rates ofbject for a spcific isocode


@router.get('/{isocode}')
def getRate(isocode, db: Session = Depends(get_db)):
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
def getfiveRates(isocode, db: Session = Depends(get_db)):
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
def get_ip_currency(ip, db: Session = Depends(get_db)):
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


router = APIRouter()


@router.get("/", response_model=List[schemas.Rate])
def get_rate(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    """
    get all rates.
    """
    rate = crud.rate.get_multi(db, skip=skip, limit=limit)
    if not rate:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="rates are not available at the moment")
    return rate


@router.get("/convert")
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
    to_currency_obj = crud.currency.get_currency_by_isocode(db, isocode=to_currency_in)
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
