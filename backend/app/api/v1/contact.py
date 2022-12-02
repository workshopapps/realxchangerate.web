from typing import Any
from app import schemas
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.post("")
def create_contact(
    *,
    db: Session = Depends(get_db),
    contact_in: schemas.ContactCreate,
) -> Any:
    """
    This endpoints stores contact_us page information into the database for management use.
    """
    crud.contact.create(db=db, obj_in=contact_in)
    return {
        "Success": True,
        "message": "Thank you. We'll get in touch as soon as possible.",
    }
