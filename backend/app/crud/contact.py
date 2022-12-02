from typing import Optional, List, Any
from sqlalchemy.orm import Session
from app.crud.base import CRUDBase
from app.models.contact import Contact

from app.schemas.contact import ContactCreate, ContactUpdate


class CRUDContact(CRUDBase[Contact, ContactCreate, ContactUpdate]):
    def get_all_contact_details(self, db: Session):
        """Returns all contact details from the database"""
        return db.query(Contact).all()


contact = CRUDContact(Contact)
