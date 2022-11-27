import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from .api.v1 import getcurrency
from app.api.v1 import api_router
from app.core import settings
from app.api.v1 import password_email_reset

app = FastAPI(title=settings.PROJECT_NAME)
origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://team-bevel-client.netlify.app",
    "https://exchange.hng.tech",
    "https://exchange.hng.tech/*",
    "https://team-bevel-client.netlify.app/*",
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
