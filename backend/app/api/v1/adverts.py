from typing import Any
from app import schemas
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()

@router.post("")
def create_advert(
    *,
    db: Session = Depends(get_db),
    advert_in: schemas.AdvertCreate,
) -> Any:
    """
    This endpoints stores online_advert page information into the database for management use.
    """
    try:
        crud.advert.create(db=db, obj_in=advert_in)
        return {
            "Success": True,
            "message": "Thank you. We'll get in touch as soon as possible.",
        }
    except:
          return {
            "Success": False,
            "message": "Please check your fields and try again",
        }