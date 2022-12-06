import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from .api.v1 import getcurrency
from app.api.v1 import api_router
from app.core import settings
from app.api.v1 import password_email_reset

# pip install --upgrade 'sentry-sdk[fastapi]' 
import sentry_sdk

sentry_sdk.init(
    dsn="https://de5ca00ef65048f3b948bb2d0e952ab4@o4504276826914816.ingest.sentry.io/4504278710943744",

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=1.0,
)

app = FastAPI()

app = FastAPI(title=settings.PROJECT_NAME)
origins = [    
    "http://localhost",
    "http://localhost:3000",
    "https://streetrates.hng.tech",
    "https://api.streetrates.hng.tech",
    "https://api.streetrates.hng.tech/*",
    "https://streetrates.hng.tech/*",
    "https://team-bevel-client.netlify.app",
    "https://exchange.hng.tech",
    "https://exchange.hng.tech/*",
    "https://team-bevel-client.netlify.app/*",
    "http://exchange.hng.tech:3008",
    "http://exchange.hng.tech:3008/*",
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)
# app.include_router(getcurrency.router)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
