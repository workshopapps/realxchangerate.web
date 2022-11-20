from typing import Any, List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from models import Admin
from app import schemas, crud
from app.api.deps import get_db
from .auth import get_current_active_user

router = APIRouter()

@router.post("/currencies/", tags=["currency"], response_model=List[schemas.Currency])
async def create_currency(*,db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate, current_admin: Admin = Depends(get_current_active_user)) -> Any:
    """
    Create new currency
    """
    currency = crud.currency.create(db=db, obj_in=currency_in)
    return currency