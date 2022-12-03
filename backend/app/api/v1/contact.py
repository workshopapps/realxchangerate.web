from typing import Any
from app import schemas
from fastapi import APIRouter, Depends, HTTPException, Query, status
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
    if not details:
        raise HTTPException(
            status_code=404, detail=f"No record found")

    data = {
        "success": True,
        "Contacts": details
    }

    return data


@router.get("/contact_detatil/{id}")
def get_contact_details_by_id(id: int, db: Session = Depends(get_db)):
    """This endpoint returns a specific contact us detail using the unique id associated with it"""
    contact_Detail = crud.contact.get_currency_by_id(db, id)
    if not contact_Detail:
        raise HTTPException(
            status_code=404, detail=f"No record found")

    data = {
        "Success": True,
        "Contacts": contact_Detail
    }

    return data