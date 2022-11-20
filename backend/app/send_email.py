import os
from fastapi import BackgroundTasks
from fastapi import FastAPI
from fastapi_mail import FastMail, MessageSchema,ConnectionConfig
from starlette.requests import Request
from pydantic import EmailStr, BaseModel
from app.api.v1.forgot_password import logged_in
from typing import List
from app.email_util.email_utils import random
app = FastAPI()
from dotenv import load_dotenv
load_dotenv('.env')

class EmailSchema(BaseModel):
   email: EmailStr

class TokenSChema(BaseModel):
   token: str

conf = ConnectionConfig(
    MAIL_USERNAME = os.getenv('MAIL_USERNAME'),
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD'),
    MAIL_FROM = os.getenv('MAIL_FROM'),
    MAIL_PORT = int(os.getenv('MAIL_PORT')),
    MAIL_SERVER = os.getenv('MAIL_SERVER'),
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
        return logged_in()
    else:
        return "message: Invalid Token"



