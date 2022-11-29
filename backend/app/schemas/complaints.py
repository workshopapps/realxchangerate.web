from typing import Optional, Any

from pydantic import BaseModel


class Coomplaint(BaseModel):
    id: int
    full_name: str
    email: str
    complaint: str
    timestamp: Any

    class Config:
        orm_mode = True
