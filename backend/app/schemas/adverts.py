from datetime import datetime
from typing import Optional, Any
from pydantic import BaseModel, EmailStr

class AdvertBase(BaseModel):
    email: EmailStr
    pixel_size: str
    link_to_banner_image: str


class AdvertCreate(AdvertBase):
    number_of_impressions: str
    ref_number: int

class AdvertUpdate(AdvertBase):
     pass

class Advert(AdvertBase):
    id: int
    timestamp: Any