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


# @router.post("/create/currency/", response_model=List[schemas.Currency])
# async def create_currency(*, db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate, current_admin: models.Admin = Depends(get_current_active_user)) -> Any:
#     """
#     Create new currency
#     """
#     currency = crud.currency.create(db=db, obj_in=currency_in)
#     return currency

# # authenticates that the admin is logged in then returns all the currencies in the database with the get_currencies function


# @router.get("/currencies", response_model=List[schemas.Currency])
# async def currencies(user=Depends(get_current_active_user)):
#     return get_currencies()

# # @router.post("/add_currency")
# # def add_currency(isocode, db:Session = Depends(get_db)):


@router.post("/add_currency")
def post_currency(
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
    """[delete currency]

    Args:
        isocode (str): [country isocode]
        db (Session, optional): [description]. Defaults to Depends(get_db).
    """
    currency = crud.currency.delete_currency_by_isocode(db, isocode=isocode)
    return currency


@router.post("/delete_rate")
def delete_rate(*, db: Session = Depends(get_db), rate_id: int):
    """[delete rate]

    Args:
        rate_id (int): [rate id]
        db (Session, optional): [description]. Defaults to Depends(get_db).
    """
    rate = crud.rate.remove(db, model_id=rate_id)
    return rate
