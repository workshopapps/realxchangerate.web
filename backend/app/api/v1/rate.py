from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()

@router.get("", response_model=List[schemas.Rate])
def get_rate(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    """
    get all rates.
    """
    rate = crud.rate.get_multi(db, skip=skip, limit=limit)
    if not rate:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "rates are not available at the moment")
    return rate


@router.post("/create", response_model=schemas.Rate)
def add_Rate(*, db: Session = Depends(get_db), rate_in: schemas.RateCreate) -> Any:
    """
    add new rates.
    """
    rate = crud.rate.create(db, obj_in=rate_in)
    return rate