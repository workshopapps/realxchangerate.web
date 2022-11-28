from typing import Any, Dict

from fastapi.testclient import TestClient

from app.core import settings
from app.tests.conftest import random_currency


def test_read_currency(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/rate")
    rates = response.json()
    assert response.status_code == 200
    assert type(rates) == list


def test_convert_currency(client: TestClient, random_currency: Dict[str, Any]) -> None:
    amount = 1000
    from_currency, to_currency = random_currency["isocode"], random_currency["isocode"]
    response = client.get(
        f"{settings.API_V1_STR}/rate/convert?from_currency={from_currency}&to_currency={to_currency}&amount={amount}"
    )
    data = response.json()
    assert response.status_code == 200
    assert data["success"] == True
    assert data["data"]["amount"] == str(amount)
    assert data["data"]["official_total"] == "{:,.2f}".format(amount)


def test_get_all_rates_by_isocode(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/rate")
    rates = response.json()
    assert response.status_code == 200
    assert rates["success"] == True
    assert type(rates) == list
