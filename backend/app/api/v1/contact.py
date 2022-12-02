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



@router.get("/contact_details")
def get_all_contacts(db: Session = Depends(get_db)):
    """Gets all contact details from the database"""
    details = crud.contact.get_all_contact_details(db)

    data = {
        "success": True,
        "Contacts": details
    }

    return data

@router.get("/contact_status")
def get_all_contacts(db: Session = Depends(get_db)):
    """Gets all contact status from the database"""
    status = crud.contact.get_contact_status(db)

    return {
        "Success": True,
        "Status code": 200,
        "status": status
    }
