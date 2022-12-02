from fastapi.testclient import TestClient
from app.core import settings

def test_create_contact(client: TestClient) -> None:
    test_data = {
        "name": "Test Name",
        "email": "test@mail.com",
        "message": "This is a test message.",
    }
    response = client.post(
        f"{settings.API_V1_STR}/contacts",
        json=test_data,
    )
    data = response.json()
    assert response.status_code == 200
    assert data["success"] == True
