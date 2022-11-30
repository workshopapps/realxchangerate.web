from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.faq import Faq

# from app.schemas.Faq import Faq as Faq_schema
from app.schemas.faq import FaqCreate, FaqUpdate


class CRUDFaq(CRUDBase[Faq, FaqCreate, FaqUpdate]):
    pass


faq = CRUDFaq(Faq)
