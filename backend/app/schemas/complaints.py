from typing import Optional, Any

from pydantic import BaseModel


class ComplaintBase(BaseModel):
    full_name: str
    email: str
    complaint: str


class ComplaintCreate(ComplaintBase):
    pass


class ComplaintUpdate(ComplaintBase):
    pass


class Complaint(ComplaintBase):
    id: int
    timestamp: Any

    class Config:
        orm_mode = True
