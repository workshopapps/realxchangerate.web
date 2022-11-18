from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.get("", response_model=List[schemas.Currency])
def get_currencies(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    """
    get all currencies.
    """
    currency = crud.currency.get_multi(db, skip=skip, limit=limit)
    return currency


@router.post("", response_model=schemas.Currency)
def add_currencies(*, db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate) -> Any:
    """
    add new currencies.
    """
    currency = crud.currency.create(db, obj_in=currency_in)
    return currency

