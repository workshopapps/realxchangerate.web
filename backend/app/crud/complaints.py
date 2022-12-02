from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.complaints import Complaint

# from app.schemas.currency import Currency as currency_schema
from app.schemas.complaints import ComplaintCreate, ComplaintUpdate


class CRUDComplaint(CRUDBase[Complaint, ComplaintCreate, ComplaintUpdate]):
    def get_all_complaints(self, db: Session):
        """Returns all complaints from the database"""
        return db.query(Complaint).all()


complaint = CRUDComplaint(Complaint)
