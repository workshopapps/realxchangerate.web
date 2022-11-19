from typing import Any, List
from app import schemas, models

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from models import Admin
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()

@router.post("/", response_model=schemas.Admin)
def create_admin(*,db: Session = Depends(get_db), admin_in: schemas.AdminCreate) -> Any:
    """
    Create Admin
    """
    admin = crud.admin.get_by_email(db, email=admin_in.email)
    if admin:
        raise HTTPException(
            status_code=400,
            detail="Admin with email already exists."
        )
    admin = crud.admin.create(db, obj_in=admin_in)
    return admin