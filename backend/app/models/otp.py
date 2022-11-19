from sqlalchemy import Column, Integer, String, Boolean, DateTime

from app.database.base_class import Base

class Otp(Base):
    __tablename__ = "OTP"
    id = Column(Integer, primary_key=True, index=True)
    recipient_id = Column(String(100))
    session_id = Column(String(100))
    otp_code = Column(String(6))
    status = Column(String(1))
    created_on = Column(DateTime)
    updated_on = Column(DateTime)
    otp_failed_count = Column(Integer, default=0)

class Otp_Blocks(Base):
    __tablename__ = "OTP_Blocks"
    id = Column(Integer, primary_key=True, index=True)
    recipient_id = Column(String(100))
    created_on = Column(DateTime)
 

