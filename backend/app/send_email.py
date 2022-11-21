import os
from decouple import config
from fastapi import FastAPI, Depends, HTTPException
from fastapi_mail import FastMail, MessageSchema,ConnectionConfig
from starlette.requests import Request
from pydantic import EmailStr, BaseModel
from app import schemas, crud
from app.api.deps import get_db
from sqlalchemy.orm import Session
from app.api.v1 import password_email_reset
from typing import List
from app.email_util.email_utils import random
app = FastAPI()
# from dotenv import load_dotenv
# load_dotenv('.env')

class EmailSchema(BaseModel):
   email: EmailStr

class TokenSChema(BaseModel):
   token: str

conf = ConnectionConfig(
    MAIL_USERNAME = config('MAIL_USERNAME'),
    MAIL_PASSWORD = config('MAIL_PASSWORD'),
    MAIL_FROM = config('MAIL_FROM'),
    MAIL_PORT = config('MAIL_PORT', cast=int),
    MAIL_SERVER = config('MAIL_SERVER'),
    MAIL_TLS = config('MAIL_TLS', cast=bool),
    MAIL_SSL = config('MAIL_SSL', cast=bool)
)




async def sending_mail(email: EmailSchema, admin_in: schemas.AdminCreate, db: Session = Depends(get_db)):
    admin_email = crud.admin.get_by_email(db, email=admin_in.email)
    if not admin_email:
        raise HTTPException(
            status_code = 404,
            detail = "Email address does not exist, please enter a valid email"
        )
    template = """
		<html>
		<body>
		

            <p>Hello !!! Did you request for a password reset?
		    <br>Here is your code: {{ body.code }} </p>
            <p> If this is not you, secure your account by turning on 2-factor authentication<p>
		</body>
		</html>
		"""
    message = MessageSchema(
		subject="Reset-password Token",
		recipients=email.dict().get("email"), 
		body=template,
		subtype="html"
		)

    fm = FastMail(conf)
    await fm.send_message(message, {'code' : f'{random(6)}'})



def authenticate_token(token: TokenSChema):
    if token == FastMail.send_message['code']:
        return password_email_reset.dashboard()
    else:
        return "message: Invalid Token"



