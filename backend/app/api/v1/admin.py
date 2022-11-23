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

# @router.post("/add_currency")
# def add_currency(isocode, db:Session = Depends(get_db)):


@router.post("/add_currency")
def post_currency(*, db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate) -> Any:
    
    """
    Create a new currency.
    """
    c = crud.currency.create(db, obj_in=currency_in)
    return c
