from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from v1.currency import get_currencies
from v1.auth import get_current_active_user

router = APIRouter()

#authenticates that the admin is logged in then returns all the currencies in the database with the get_currencies function
@router.get("/currencies", response_model=List[schemas.Currency])
async def currencies(user = Depends(get_current_active_user)):
    return get_currencies()