# from typing import Any
# from app import schemas
# from fastapi import APIRouter, Depends, HTTPException, Query, status
# from sqlalchemy.orm import Session
# from app import schemas, crud
# from app.api.deps import get_db

# router = APIRouter()

# @router.post("")
# def create_contact(
#     *,
#     db: Session = Depends(get_db),
#     advert_in: schemas.AdvertCreate,
# ) -> Any:
#     """
#     This endpoints stores online_advert page information into the database for management use.
#     """

#     crud.advert.create(db=db, obj_in=advert_in)
#     return {
#         "Success": True,
#         "message": "Thank you. We'll get in touch as soon as possible.",
#     }
