from fastapi import APIRouter

from app.api.v1 import products
from app.api.v1 import index

api_router = APIRouter()
api_router.include_router(products.router, prefix="/products", tags=["products"])
api_router.include_router(index.router, prefix="/index", tags=["index"])
