from typing import Dict

from fastapi.testclient import TestClient

from app.core import settings


# def test_create_currency(client: TestClient, random_currencies: Dict[str, str]) -> None:
#     response = client.post(f"{settings.API_V1_STR}/currencies", json=random_currencies)
#     currencies = response.json()
#     assert response.status_code == 200
#     assert currencies.get("name") == random_currencies.get("name")
#     assert currencies.get("price") == random_currencies.get("price")


def test_authenticated_user(client: TestClient) -> None:
    response = client.post(
        f"{settings.API_V1_STR}/auth",
        data={"username": "ibukun46@gmail.com", "password": "secret"})
    currencies = response.json()
    assert response.status_code == 200
    assert len(currencies) > 0

