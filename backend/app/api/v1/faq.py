from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()

@router.get("{question}")
def search(question: str, db: Session = Depends(get_db)):
    """
    Get the faq by the question passed
    
    """

    question = crud.faq.get_faq(db, question=question)
    if question:
     return question
    else:
        return {"status_code":404, "message": "Not found"}