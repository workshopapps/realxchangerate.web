from app.crud.base import CRUDBase
from app.models.contact import Contact, Status
from sqlalchemy.orm import Session
from app.schemas.contact import ContactCreate, ContactUpdate


class CRUDContact(CRUDBase[Contact, ContactCreate, ContactUpdate]):
    def get_all_contact_details(self, db: Session):
        """Returns all contact details from the database"""
        return db.query(Contact).all()

    def get_contact_status(self, db: Session):
        """Returns all contact details from the database"""
        return db.query(Contact).get(id)

contact = CRUDContact(Contact)
