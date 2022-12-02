from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.get("/get_all_faqs")
async def get_all_faqs(*, db: Session = Depends(get_db)):

    """Returns all faqs from the database"""

    faqs = crud.faq.get_all_faqs(db)

    if faqs is None:
        return {"success": False, "status_code": 404, "message": "No faqs available!"}

    if len(faqs) == 0:
        return {"success": True, "status_code": 200, "message": "No faqs recorded!"}

    return {"success": True, "status_code": 200, "faqs": faqs}


@router.get("{question}")
def search(question: str, db: Session = Depends(get_db)):
    """
    Get the faq by the question passed

    """

    question = crud.faq.get_faq(db, question=question)
    if question:
        return question
    else:
        return {"status_code": 404, "message": "Not found"}
