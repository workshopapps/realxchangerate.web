from typing import Optional, Any

from pydantic import BaseModel

import enum
from sqlalchemy import Integer, Enum


class Status(enum.Enum):
    resolved = "resolved"
    unresolved = "unresolved"
    in_review  = "in review"


class ComplaintBase(BaseModel):
    pass


class ComplaintCreate(ComplaintBase):
    full_name: str
    email: str
    complaint: str


class ComplaintUpdate(ComplaintBase):
    status: Status


class Complaint(ComplaintBase):
    id: int
    timestamp: Any

    class Config:
        orm_mode = True
