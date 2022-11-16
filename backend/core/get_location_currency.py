#!/usr/bin/env python3
import json
import re
from sys import argv
from time import sleep

import requests

from db.database import SessionLocal
from db.models import Currency, Rate

"""
    This script defines get_location_currency function which returns the
    currency object for a given IP address.
"""

API_KEY = "b0b7305ef6774ea2b2ba9d23b7ee0355"
API_URL = f"https://ipgeolocation.abstractapi.com/v1/"
# IP address' regex pattern
IP_REGEX = r"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"


session = SessionLocal()


def get_location_currency(ip):
    """
        Utility function to get the currency of a user's country.

        Args:
            ip (str): The IP address of the user.

        Returns:
            On success, returns the currency object for the user's country.
            On failure it raises exceptions
    """

    # Check that IP address is a valid IPV4 address
    # Check that IP address is a string
    if type(ip) is not str:
        raise TypeError("IP address must be a string")
    if re.match(IP_REGEX, ip) is None:
        raise ValueError("IP address is invalid")

    # send GET request to API and convert response to dictionary
    response = requests.get(f"{API_URL}?api_key={API_KEY}&ip_address={ip}")
    if response.status_code == 200:
        # request was successful, convert response to dictionary
        response = json.loads(response.content)
        country = response['country']

        # Insert nigeria, usa for testing purposes
        # nigeria = Currency(country="Nigeria", isocode="NGN")
        # usa = Currency(country="United States", isocode="USD")
        # session.add(nigeria)
        # session.add(usa)
        # session.commit()

        # Get country object from database
        currency = session.query(Currency).filter(Currency.country == country).first()

        print(country)
        print(currency)
    else:
        print(f"An error occured: {response.status_code}")


if __name__ == "__main__":
    # test nigeria ip
    get_location_currency("102.216.201.11") 
    # test usa ip
    sleep(10)
    get_location_currency("155.94.247.214")
