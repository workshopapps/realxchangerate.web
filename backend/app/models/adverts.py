from sqlalchemy import Column, Integer, String, Boolean, DateTime
from datetime import datetime
from sqlalchemy_utils import EmailType


from sqlalchemy.orm import relationship
from app.database.base_class import Base

class Advert(Base):
    __tablename__ = "advert"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(EmailType)
    pixel_size = Column(String(100), nullable=False)
    number_of_impressions = Column(String(200), nullable=False)
    ref_number = Column(Integer)
    link_to_banner_image = Column(String(500), nullable=False)
    timestamp =  Column(DateTime(timezone=True),
                       nullable=False, default=datetime.now())