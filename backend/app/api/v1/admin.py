from typing import Any, List
from app import schemas, models

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.models.rate import Rate
from app.models.currency import Currency

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.post("/create/", response_model=schemas.Admin)
def create_admin(*, db: Session = Depends(get_db), admin_in: schemas.AdminCreate) -> Any:
    """
    Create Admin
    """
    admin = crud.admin.get_by_email(db, email=admin_in.email)
    if admin:
        raise HTTPException(
            status_code=400,
            detail="Admin with email already exists."
        )
    admin = crud.admin.create(db, obj_in=admin_in)
    return {"success": True, "data": admin}


@router.post("/add_currency")
def add_currency(
    *, db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate
) -> Any:
    """
    Create a new currency.
    """

    currency = crud.currency.create(db=db, obj_in=currency_in)
    return currency


@router.post("/add_rate", response_model=schemas.Rate, status_code=201)
async def create_rate(*, db: Session = Depends(get_db),
                      rate_in: schemas.RateCreate) -> Any:
    #    create new rates
    rate = crud.rate.create(db=db, obj_in=rate_in)
    return (rate)


@router.delete("/delete_currency")
def delete_currency(*, db: Session = Depends(get_db), isocode: str):
    """delete currency and all associated rates

    Args:
        isocode (str): country isocode
    """
    currency = crud.currency.delete_currency_by_isocode(db, isocode=isocode)
    if currency is None:
        return {"success": False, "status_code": 404, "data": {"currency": currency}, "message": "currency not found!"}

    return {"success": True, "status_code": 200, "data": {"currency": currency}, "message": "currency deleted!"}


@router.delete("/delete_rate")
def delete_rate(*, db: Session = Depends(get_db), rate_id: int):
    """delete selected rate

    Args:
        rate_id (int): rate id
    """
    if rate_id == 0:
        return {"success": False, "status_code": 404, "data": {"id": rate_id}, "message": "id starts from 1!"}

    rate_query = crud.rate.remove(db, model_id=rate_id)

    if rate_query is None:
        return {"success": False, "status_code": 404, "data": {"id": rate_id}, "message": "Not found!"}

    return {"success": True, "status_code": 200, "data": {"rate": rate_query}, "message": "rate deleted!"}


@router.put('/update_currency')
def update_currencies(iso_code: str, update_param: schemas.CurrencyUpdate, db: Session = Depends(get_db)):
    """
    this endpoint recives details to update a currency, it finds the currency in the database with the required iso code provided

    """
    details = crud.currency.get_currency_by_isocode(db=db, isocode=iso_code)

    if not details:
        raise HTTPException(
            status_code=404, detail=f"No record found to update")
    # update variable stores the updated currency in the database
    update = crud.currency.update(db=db, db_obj=details, obj_in=update_param)
    return {
        "success": True,
        "data": update
    }


@router.put("/update_rate")
def update_rate(iso_code: str, update_param: schemas.RateUpdate, db: Session = Depends(get_db)):
    """
    This endpoint recives details to update a currency rate. It finds the rate in the database by locating
    the currency associated with it through the required iso code provided
    """
    currency = crud.currency.get_currency_by_isocode(db=db, isocode=iso_code)

    if not currency:
        raise HTTPException(status_code=404, detail=f"Currency not found")
    # rate collects the last updated rate stored in the database
    rate = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(
        Rate.last_updated.desc()).first()
    if not rate:
        raise HTTPException(
            status_code=404, detail=f"No rate for the currency found to update")
    # update variable stores the updated rate in the database
    update = crud.currency.update(db=db, db_obj=rate, obj_in=update_param)
    return {
        "success": True,
        "data": update
    }
