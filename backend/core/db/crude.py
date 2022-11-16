import hashlib

from sqlalchemy.orm import Session

from . import models, schemas


def get_currency(db: Session, currency_id: int):
    return db.query(models.Currency).filter(models.Currency.id == currency_id).first()


def get_currency_by_country(db: Session, country: str):
    return db.query(models.Currency).filter(models.Currency.country == country).first()


def get_currency_by_isocode(db: Session, isocode: str):
    return db.query(models.Currency).filter(models.Currency.isocode == isocode).first()


def get_currency_by_symbol(db: Session, symbol: str):
    return db.query(models.Currency).filter(models.Currency.symbol == symbol).first()


def get_currencies(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Currency).offset(skip).limit(limit).all()


def create_currency(db: Session, currency: schemas.CurrencyCreate):
    db_currency = models.Currency(
        country=currency.country,
        isocode=currency.isocode,
        symbol=currency.symbol
    )
    db.add(db_currency)
    db.commit()
    db.refresh(db_currency)
    return db_currency


def get_rates(db: Session, skip: int = 0, limit: int = 24):
    return db.query(models.Rate).offset(skip).limit(limit).all()


def get_recent_rates(db: Session):
    return db.query(models.Rate).filter(Rate.id == db.query(func.max(models.Rate.id)))


def create_rates(db: Session, item: schemas.RateCreate, currency_id: int):
    db_rate = models.Rate(**item.dict(), currency_id=currency_id)
    db.add(db_rate)
    db.commit()
    db.refresh(db_rate)
    return db_rate


def get_admin(db: Session, admin_id: int):
    return db.query(models.Admin).filter(models.Admin.id == admin_id).first()


def get_admin_by_email(db: Session, email: str):
    return db.query(models.Admin).filter(models.Admin.email == email).first()


def get_admins(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Admin).offset(skip).limit(limit).all()


def create_user(db: Session, admin: schemas.AdminCreate):
    md5 = hashlib.md5()
    md5.update(admin.password)
    hashed_password = md5.hexdigest()
    db_admin = models.Admin(
        email=admin.email, password=hashed_password)
    db.add(db_admin)
    db.commit()
    db.refresh(db_admin)
    return db_admin
