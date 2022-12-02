from typing import Optional, List, Any
from sqlalchemy.sql.operators import ilike_op

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.faq import Faq

# from app.schemas.Faq import Faq as Faq_schema
from app.schemas.faq import FaqCreate, FaqUpdate


class CRUDFaq(CRUDBase[Faq, FaqCreate, FaqUpdate]):
    def get_all_faqs(self, db: Session):
        """Returns all faqs from the database"""
        return db.query(Faq).all()

    def get_faqs_by_question(self, db: Session, question) -> Any:
        """gets faqs by question"""
        return db.query(Faq).filter(Faq.question == question).first()

    def get_faq(self, db: Session, question: str) -> Any:
        # search validations
        look_for = '%{0}%'.format(question)
        return db.query(Faq).filter(ilike_op(Faq.question, look_for)).all()

faq = CRUDFaq(Faq)
