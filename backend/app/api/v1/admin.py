from typing import Any, List
from app import schemas

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from .auth import get_current_active_user
from .currency import get_currencies

router = APIRouter()


@router.post("/currencies", response_model=List[schemas.Currency], dependencies=[Depends(get_current_active_user)])
async def get_all_currencies() -> Any:
    """
    this route calls the gets all currency function

    """
    return get_currencies()
