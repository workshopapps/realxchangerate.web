from fastapi import FastAPI, APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.session import engine, SessionLocal
from app.database.base_class import Base
from ..deps import get_db
from app import schemas, crud, models
from app.crud import base





router = APIRouter()
Base.metadata.create_all(bind=engine)

# def get_session():
#     session = SessionLocal()
#     try:
#         yield session

#     finally:
#         session.close()

@router.post("/contact-us", response_model=schemas.ContactBase)
def send_contact_info(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    data = base.CRUDBase.create(db=db, contact=contact, id=id)

    return data