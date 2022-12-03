from typing import Any
from app import schemas
from fastapi import APIRouter, Depends, HTTPException
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

@router.get("/user_complaints/{id}")
def get_user_complaint_by_id(id: int, db: Session = Depends(get_db)):
    """This endpoint returns a specific user complaint from the database using the unique id associated with it"""

    if id == 0:
        return {"success": False, "status_code": 404, "data": {"id": id}, "message": "id starts from 1!"}
    complaint_Detail = crud.complaint.get_complaint_by_id(db, id)
    if not complaint_Detail:
        raise HTTPException(
            status_code=404, detail=f"No complaint record found")

    data = {
        "Success": True,
        "Contacts": complaint_Detail
    }

    return data


@router.delete("/delete_User_complaint/{id}")
def delete_contact_detail(id: int, db: Session = Depends(get_db)):
    """delete a user complaint associated with the id provided

    Args:
        id (int): id
    """
    if id == 0:
        return {"success": False, "status_code": 404, "data": {"id": id}, "message": "id starts from 1!"}

    complaint_Detail = crud.complaint.remove(db, model_id=id)

    if  not complaint_Detail:
        return {"success": False, "status_code": 404, "data": {"id": id}, "message": "User complaint not found!"}

    return {"success": True, "status_code": 200,  "message": "succesfully deleted!", "data": {"User complain": complaint_Detail}}

