from typing import Any, List
from app import schemas, models
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.post("/create/")
def create_student(*, db: Session = Depends(get_db), student: schemas.StudentCreate) -> Any:
    """
    Create Student
    """
    check_student = crud.student.get_by_email(db, email=student.info.email)

    if check_student:
        raise HTTPException(
            status_code=400,
            detail="Student with email already exists."
        )
    

    student = crud.student.create(db, obj_in=student)

    return {"success": True, "data": student}