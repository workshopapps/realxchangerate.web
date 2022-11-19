from typing import List
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
import models
from database import SessionLocal, engine
from scraper import extract
from datetime import datetime


models.Base.metadata.create_all(bind=engine)

app = FastAPI()
        

# db = SessionLocal()
# creating a sample currency id 
# c1 = models.Currency(id=1, country="Denmark", isocode="DKK", symbol="kr")

# db.add(c1)
# db.commit()
# db.close()


@app.get("/admin/scrap")
def add_scraped_rates_to_db():
    db = SessionLocal()
    last_updated = datetime.now()
    
    for i in range(len(extract)):        
        official_buy = extract.iloc[i].iloc[-2]
        official_sell = extract.iloc[i].iloc[-1]
        parallel_buy = extract.iloc[i].iloc[-1]
        parallel_sell = extract.iloc[i].iloc[-2]
        currency_id = i
        result = models.Rate(official_buy=official_buy, official_sell=official_sell, parallel_buy=parallel_buy, parallel_sell=parallel_sell, last_updated=last_updated, currency_id=currency_id)
        db.add(result)
        
    db.commit()
    db.close()
    return extract.to_json()