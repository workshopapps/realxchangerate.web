from typing import List
from pydantic import BaseModel

class CreateOTP(BaseModel):
    recipient_id: str

class VerifyOTP(CreateOTP):
    session_id: str
    otp_code: str

class OTPList(VerifyOTP):
    otp_failed_count: int
    status: str
