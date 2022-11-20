import os
from fastapi import BackgroundTasks
from fastapi import FastAPI
from fastapi_mail import FastMail, MessageSchema,ConnectionConfig
from starlette.requests import Request
from pydantic import EmailStr, BaseModel
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
    MAIL_USERNAME = 'Genevieve',
    MAIL_PASSWORD = 12345,
    MAIL_FROM = 'ejibe750@gmail.com',
    MAIL_PORT = 587,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_FROM_NAME = os.getenv('MAIN_FROM_NAME'),
    MAIL_TLS=True,
    MAIL_SSL=False
)


async def sending_mail(email: EmailSchema):
           
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



