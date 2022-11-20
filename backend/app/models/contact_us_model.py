from sqlalchemy import Column, Integer, String
from app.database.base_class import Base






class Contact(Base):
    __tablename__ = "contact us"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    message = Column(String(256))
