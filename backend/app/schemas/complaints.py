from typing import Optional, Any

from pydantic import BaseModel


class ComplaintBase(BaseModel):
    pass


class ComplaintCreate(ComplaintBase):
    full_name: str
    email: str
    complaint: str


class ComplaintUpdate(ComplaintBase):
    status: str


class Complaint(ComplaintBase):
    id: int
    timestamp: Any

    class Config:
        orm_mode = True
