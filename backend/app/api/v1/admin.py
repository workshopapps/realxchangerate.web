from typing import Any, List
from app import schemas, models
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.models.rate import Rate
from app.models.currency import Currency
from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.post("/create/")
def create_admin(*, db: Session = Depends(get_db), admin_in: schemas.AdminCreate) -> Any:
    """
    Create Admin
    """
    admin = crud.admin.get_by_email(db, email=admin_in.email)
    if admin:
        raise HTTPException(
            status_code=400,
            detail="Admin with email already exists."
        )
    admin = crud.admin.create(db, obj_in=admin_in)
    return {"success": True, "data": admin}


@router.post("/add_currency")
def add_currency(
        *, db: Session = Depends(get_db), currency_in: schemas.CurrencyCreate) -> Any:
    """
    Create a new currency.
    """

    currency = crud.currency.create(db=db, obj_in=currency_in)
    return currency


@router.post("/add_rate", status_code=201)
async def create_rate(*, db: Session = Depends(get_db),
                      rate_in: schemas.RateCreate) -> Any:
    #    create new rates
    details = crud.currency.get_currency_by_id(db, id=rate_in.currency_id)
    if details:

        rate = crud.rate.create(db=db, obj_in=rate_in)
        return (rate)
    else:
        return {"message:": "id not found"}


@router.post("/add_faq")
def add_faq(*, db: Session = Depends(get_db), faq_in: schemas.FaqCreate) -> Any:
    """
    This endpoint stores a new FAQ into the database.
    """
    faq = crud.faq.create(db=db, obj_in = faq_in)
    return {
        "Success": True,
        "Status code": 200,
        "FAQ": faq
    }


@router.put('/update_currency/{isocode}')
def update_currencies(iso_code: str, update_param: schemas.CurrencyUpdate, db: Session = Depends(get_db)):
    """
    this endpoint recives details to update a currency, it finds the currency in the database with the required iso code provided

    """
    details = crud.currency.get_currency_by_isocode(db=db, isocode=iso_code)

    if not details:
        raise HTTPException(
            status_code=404, detail=f"No record found to update")
    # update variable stores the updated currency in the database
    update = crud.currency.update(db=db, db_obj=details, obj_in=update_param)
    return {
        "success": True,
        "data": update
    }


@router.put("/update_rate/{isocode}")
def update_rate(iso_code: str, update_param: schemas.RateUpdate, db: Session = Depends(get_db)):
    """
    This endpoint recives details to update the most recent currency rate. It finds the rate in the database by locating
    the currency associated with it through the required iso code provided
    """
    currency = crud.currency.get_currency_by_isocode(db=db, isocode=iso_code)

    if not currency:
        raise HTTPException(status_code=404, detail=f"Currency not found")
    # rate collects the last updated rate stored in the database
    rate = db.query(Rate).filter(Rate.currency_id == currency.id).order_by(
        Rate.last_updated.desc()).first()
    if not rate:
        raise HTTPException(
            status_code=404, detail=f"No rate for the currency found to update")
    # update variable stores the updated rate in the database
    update = crud.currency.update(db=db, db_obj=rate, obj_in=update_param)
    return {
        "success": True,
        "data": update
    }




# @router.put("/update_faq")
# def update_faq(question: str, update: schemas.FaqUpdate, db: Session = Depends(get_db)):

#     """Update Faqs in the database"""

#     faqs = crud.faq.get_faqs_by_question(db=db, question = question)


#     if not faqs:
#         raise HTTPException(status_code=404, detail=f"faq not found")

#     # update  stores faq in the database
#     update = crud.faq.update(db=db, db_obj=faqs, obj_in=update)
#     return {
#         "success": True,
#         "data": update
#     }






@router.delete("/delete_currency")
def delete_currency(*, db: Session = Depends(get_db), isocode: str):
    """delete currency and all associated rates

    Args:
        isocode (str): country isocode
    """
    currency = crud.currency.delete_currency_by_isocode(db, isocode=isocode)
    if currency is None:
        return {"success": False, "status_code": 404, "data": {"currency": currency}, "message": "currency not found!"}

    return {"success": True, "status_code": 200, "data": {"currency": currency}, "message": "currency deleted!"}


@router.delete("/delete_rate")
def delete_rate(*, db: Session = Depends(get_db), rate_id: int):
    """delete selected rate

    Args:
        rate_id (int): rate id
    """
    if rate_id == 0:
        return {"success": False, "status_code": 404, "data": {"id": rate_id}, "message": "id starts from 1!"}

    rate_query = crud.rate.remove(db, model_id=rate_id)

    if rate_query is None:
        return {"success": False, "status_code": 404, "data": {"id": rate_id}, "message": "Not found!"}

    return {"success": True, "status_code": 200, "data": {"rate": rate_query}, "message": "rate deleted!"}


@router.delete("/delete_faq/{faq_id}")
def delete_faq(*, db: Session = Depends(get_db), faq_id: int):
    """delete selected faq

    Args:
        faq_id (int): faq id
    """
    if faq_id == 0:
        return {"success": False, "status_code": 404, "data": {"id": faq_id}, "message": "id starts from 1!"}

    faq_query = crud.faq.remove(db, model_id=faq_id)

    if faq_query is None:
        return {"success": False, "status_code": 404, "data": {"id": faq_id}, "message": "Not found!"}

    return {"success": True, "status_code": 200, "data": {"faq": faq_query}, "message": "rate deleted!"}


@router.get("/get_all_complaints")
def get_all_complaints(db: Session = Depends(get_db)):
    """
    Gets all complaints from the database

    Returns:
        List of complaints
    """
    complaints = crud.complaint.get_all_complaints(db)
    if complaints is None:
        return {"success": False, "status_code": 404, "message": "Could not retrieve info!"}
    if len(complaints) == 0:
        return {"success": True, "status_code": 200, "message": "No complaints recorded!"}

    return {"success": True, "status_code": 200, "complaints": complaints}



# @router.get("/get_all_faqs")
# async def get_all_faqs(*, db:Session = Depends(get_db)):

#     """Returns all faqs from the database"""

#     faqs = crud.faq.get_all_faqs(db)

#     if faqs is None:
#         return {"success": False, "status_code": 404, "message": "No faqs available!"}

#     if len(faqs) == 0:
#         return {"success": True, "status_code": 200, "message": "No faqs recorded!"}

#     return {"success": True, "status_code": 200, "faqs": faqs}



@router.put(
    "/update_complaint_status/{id}",
)
async def update_complaint_status(id: int, data:schemas.ComplaintUpdate, db: Session = Depends(get_db)):
    """updates the status of a complaint.
    Returns the complaint id if the status is successfully updated
    Args:
        id (int): A unique identifier of a complaint
        data: A pydantic schema that defines the request parameters
    Returns:
        HTTP_200_OK (status updated succesfully): {data:complaint}
    Raises
        HTTP_424_FAILED_DEPENDENCY: status update unssucessfull
    """
    

    complaint = crud.complaint.get(db,id)
    if complaint is None:
        raise HTTPException(
             status_code=status.HTTP_404_NOT_FOUND,
            detail="complaint id does not exist",
        )
      
    complaint = crud.currency.update(db=db, db_obj=complaint, obj_in=data)    


    return{
        "success":True,
        "status_code": 200,
        "message":"status updated succesfully",
        "data":complaint,
    }    