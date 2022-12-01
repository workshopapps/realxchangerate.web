from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.faq import Faq


# from app.schemas.Faq import Faq as Faq_schema
from app.schemas.faq import FaqCreate, FaqUpdate, FaqRetrieve


class CRUDFaq(CRUDBase[Faq, FaqCreate, FaqUpdate ]):
    def get_all_faqs(self, db:Session):
        """Returns all faqs from the database"""
        return db.query(Faq).all()


    def get_faqs_by_question(self, db:Session, question)-> Any:   
        """gets faqs by question"""
        return db.query(Faq).filter(Faq.question == question).first()      



faq = CRUDFaq(Faq)
