from typing import Any, List
from app import schemas, models
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.models.faq import Faq
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()

@router.get("/get_all_faqs")
async def get_all_faqs(*, db:Session = Depends(get_db)):

    """Returns all faqs from the database"""

    faqs = crud.faq.get_all_faqs(db)

    if faqs is None:
        return {"success": False, "status_code": 404, "message": "No faqs available!"}

    if len(faqs) == 0:
        return {"success": True, "status_code": 200, "message": "No faqs recorded!"}

    return {"success": True, "status_code": 200, "faqs": faqs}



@router.put("/update_faq")
async def update_faq(question: str, update_param: schemas.FaqUpdate, db: Session = Depends(get_db)):

    """Update Faqs in the database"""

    faqs = crud.faq.get_faqs_by_question(db=db, question = question)


    if not faqs:
        raise HTTPException(status_code=404, detail=f"No faq found")

    # update stores faq in the database
    update = crud.faq.update(db=db, db_obj=faqs, obj_in=update_param)
    return {
        "success": True,
        "data": update
    }


    

