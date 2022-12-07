from datetime import datetime
from app.models import Rate, Currency
import logging
from typing import Any

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.utils import (
    get_binancep2p_rate,
    format_binance_response_data,
    make_official_rate_request,
    sma_rate,
)

router = APIRouter()


@router.get("/rates")
async def get_currency_rates_from_external_apis(db: Session = Depends(get_db)) -> Any:
    """
    This endpoint gets exchange rates from third-party API's and update the database.
    Cron-job.org (https://cron-job.org/) calls this endpoint every 5 minutes to update the rates.
    Base Currency: `USD`
    """
    base_currency = "USD"
    currency_list = []
    updated_currencies_list = []
    try:
        all_currencies = db.query(Currency).all()
        official_rate = await make_official_rate_request(base_currency=base_currency)
        for currency in all_currencies:
            currency_list.append(currency.isocode.upper())
            currency_code = currency.isocode.upper()
            if resp_data := await get_binancep2p_rate(currency_code):
                if formatted_data := await format_binance_response_data(resp_data):
                    parallel_buy, parallel_sell = (
                        formatted_data["buy_rate"],
                        formatted_data["sell_rate"],
                    )
                    official_buy, official_sell = (
                        official_rate["rates"][currency_code],
                        official_rate["rates"][currency_code],
                    )

                    rate_obj = Rate(
                        currency_id=currency.id,
                        official_buy=official_buy,
                        official_sell=official_sell,
                        parallel_buy=parallel_buy,
                        parallel_sell=parallel_sell,
                    )
                    db.add(rate_obj)
                    db.commit()
                    updated_currencies_list.append(currency_code)
            return {
                "success": True,
                "message": f"Rates of {len(updated_currencies_list)}/{len(currency_list)} currencies updated successfully.",
            }
    except Exception as e:
        logging.error(e)
        return {"success": False, "message": "Unable to update rates"}
