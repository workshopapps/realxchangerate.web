import uvicorn

from fastapi import FastAPI

from app.api.v1 import api_router
from app.core import settings
from app.api.v1.otps_router import router as otps_router

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_router, prefix=settings.API_V1_STR)
app.include_router(otps_router, tags=["OTPs"])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
