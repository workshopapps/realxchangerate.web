from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app. models import rate
from app.schemas.rate import RateCreate