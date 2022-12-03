from typing import Any
from app import schemas
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.post("/add_complaints")
def add_complaint(*, db: Session = Depends(get_db), complaint_in: schemas.ComplaintCreate) -> Any:
    """
    This endpoint stores a new complaint into the database.
    """
    complaint = crud.complaint.create(db=db, obj_in = complaint_in)
    return {
        "Success": True,
        "Status code": 200,
        "complaint": complaint
    }
