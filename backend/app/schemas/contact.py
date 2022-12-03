from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr
import enum

import enum
from sqlalchemy import Integer, Enum

class Status(enum.Enum):
    Read = "Read"
    Unread = "Unread"

class ContactBase(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactCreate(ContactBase):
    pass


class ContactUpdate(ContactBase):
    status: Status


class Contact(ContactBase):
    id: int
    last_updated: Optional[datetime]

class Status(enum.Enum):
    resolved = "resolved"
    unresolved = "unresolved"
    in_review  = "in review"
