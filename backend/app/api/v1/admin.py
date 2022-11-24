from typing import Any, List
from app import schemas, models

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.models.rate import Rate
from app.models.currency import Currency

from app import schemas, crud
from app.api.deps import get_db
from .auth import get_current_active_user

router = APIRouter()


# @router.post("/create/", response_model=schemas.Admin)
# def create_admin(*, db: Session = Depends(get_db), admin_in: schemas.AdminCreate) -> Any:
#     """
#     Create Admin
#     """
#     admin = crud.admin.get_by_email(db, email=admin_in.email)
#     if admin:
#         raise HTTPException(
#             status_code=400,
#             detail="Admin with email already exists."
#         )
#     admin = crud.admin.create(db, obj_in=admin_in)
#     return admin


@router.post("/add_currency")
def add_currency(
    *, db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate
) -> Any:
    """
    Create a new currency.
    """
    c = crud.currency.create(db, obj_in=currency_in)
    return c


@router.post("/add_rate", response_model=schemas.Rate)
def add_Rate(*, db: Session = Depends(get_db), rate_in: schemas.RateCreate) -> Any:
    """
    add new rates.
    """
    rate = crud.rate.create(db, obj_in=rate_in)
    return rate


@router.post("/delete_currency")
def delete_currency(*, db: Session = Depends(get_db), isocode: str):
    """delete currency and all associated rates

    Args:
        isocode (str): country isocode
    """
    currency = crud.currency.delete_currency_by_isocode(db, isocode=isocode)
    return currency


@router.post("/delete_rate")
def delete_rate(*, db: Session = Depends(get_db), rate_id: int):
    """delete selected rate

    Args:
        rate_id (int): rate id
    """
    if rate_id == 0:
        return {"status": False, "message": "id starts from 1!"}
    rate_query = crud.rate.remove(db, model_id=rate_id)
    if rate_query is None:
        return {"status": False, "message": "Not found!"}

    return {"status": True, "message": "rate deleted!"}
