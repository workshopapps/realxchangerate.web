from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.schemas import otp_schema
from app.crud import otp_crud
from app.enums import otp
from app.api.deps import get_db

router = APIRouter(prefix = "/api/v1")

@router.post("/otp/send")
async def send_otp():
    return "sending OTP"

@router.post("/otp/verify")
async def send_verify(
        type: otp.OTPType,
    request: otp_schema.CreateOTP
):

# check block OTP
  otp_blocks = await otp_crud.find_otp_block(request.recipient_id)

  if otp_blocks:
    raise HTTPException(status=status.HTTP_403_FORBIDDEN, detail='sorry, this phone number will be blocked in 5 mins.')


    return "sending OTP"
