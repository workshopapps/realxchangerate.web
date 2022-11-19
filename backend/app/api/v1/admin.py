from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from v1 import currency
from v1 import auth

router = APIRouter()

#authenticates that the admin is logged in then returns all the currencies in the database with the get_currencies function
@router.get("/currencies", response_model=List[schemas.Currency])
async def currencies(current_user: user = Depends(get_current_active_user)):
    return get_currencies()