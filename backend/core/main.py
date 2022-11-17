from typing import List
from fastapi import FastAPI
from sqlalchemy.orm import Session

from db import crude, models, schemas
from db.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

# Dependency


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


get_db()

app = FastAPI()


@app.get("/")
def index():
    return {"msg": "Hello World"}
