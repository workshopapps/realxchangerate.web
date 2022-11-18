from fastapi import FastAPI, Depends 
import schemas, models
from database import engine, SessionLocal
from sqlalchemy.orm import Session



app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db 
    finally:
        db.close()    

models.Base.metadata.create_all(bind=engine)

@app.get("/")
def index():
    return {'message': 'Hello Team Bevel - Admin Microservice'}





# function to get all currencies from database

@app.get("/get_currencies")
def all(db: Session = Depends(get_db))  :
    currencies = db.query(models.Currency).all()
    return currencies



