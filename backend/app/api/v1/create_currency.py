from typing import Any, List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()

@router.post("/currencies/", tags=["currency"], response_model=List[schemas.Currency])
async def create_currency(*,db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate) -> Any:
    """
    Create new currency
    """
    currency = crud.currency.create(db=db, obj_in=currency_in)
    return currency