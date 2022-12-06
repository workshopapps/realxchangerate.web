from app.crud.base import CRUDBase
from app.models.contact import Contact
from sqlalchemy.orm import Session
from app.schemas.contact import ContactCreate, ContactUpdate
from typing import Any


class CRUDContact(CRUDBase[Contact, ContactCreate, ContactUpdate]):
    def get_all_contact_details(self, db: Session):
        """Returns all contact details from the database"""
        return db.query(Contact).all()

    def get_currency_by_id(self, db: Session, id: int) -> Any:
        """Returns a specific contact detail using the contact id"""
        return db.query(Contact).filter(Contact.id == id).first()


contact = CRUDContact(Contact)
