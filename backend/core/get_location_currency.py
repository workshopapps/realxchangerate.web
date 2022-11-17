#!/usr/bin/env python3
import json
import re
from sys import argv
from time import sleep

import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from slugify import slugify

from db.database import SessionLocal
from db.models import Currency

"""
    This script defines get_location_currency function which returns the
    currency object for a given IP address.

    READ: run_get_location_currency.txt
"""

API_KEY = "b0b7305ef6774ea2b2ba9d23b7ee0355"
API_URL = "https://ipgeolocation.abstractapi.com/v1/"
WEB_URL = "https://whatismyipaddress.com/ip/"  # Alternative source
# IP address' regex pattern
IP_REGEX = r"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)" \
    + r"{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"


session = SessionLocal()


def validate_ip(ip):
    """Validate IP address

        Raise:
            TypeError: if ip is not a string
            ValueError: if ip is not a valid ipv4 address
    """
    # Check that IP address is a string
    if type(ip) is not str:
        raise TypeError("IP address must be a string")

    # Check that IP address is a valid IPV4 address
    if re.match(IP_REGEX, ip) is None:
        raise ValueError("IP address is invalid")


def get_location_currency(ip):
    """
        Utility function to get the currency of a user's country.

        Args:
            ip (str): The IP address of the user.

        Returns:
            On success, returns the currency object for the user's country.
            On failure it raises exceptions
    """

    validate_ip(ip)

    # send GET request to API and convert response to dictionary
    response = requests.get(f"{API_URL}?api_key={API_KEY}&ip_address={ip}")
    if response.status_code == 200:
        # request was successful, convert response to dictionary
        response = json.loads(response.content)
        country = response['country']

        # Insert nigeria, usa for testing purposes
        # nigeria = Currency(country="Nigeria", isocode="NGN", slug=slugify("Nigeria"))
        # usa = Currency(country="United States", isocode="USD", slug=slugify("United States"))
        # session.add(nigeria)
        # session.add(usa)
        # session.commit()

        # Get country object from database
        currency = session.query(Currency).filter(
            Currency.slug == slugify(country)).first()

        return currency
    else:
        # Scrape from alternative website
        # Open Chrome
        driver = webdriver.Chrome()
        # Open webpage
        driver.get(WEB_URL)
        # input ip address
        input_ip = driver.find_element(By.NAME, "LOOKUPADDRESS")
        input_ip.send_keys(ip)
        # submit
        submit = driver.find_element(
            By.CSS_SELECTOR, "div div div form button")
        submit.click()

        # get result
        information = driver.find_element(
            By.XPATH, "//*[@id='fl-post-1165']/div/div/"
            + "div[1]/div/div[2]/div/div[1]/div/div[2]"
            + "/div/div/div/div[1]/div[1]/p[7]/span[2]")
        country = information.text
        # Close selenium
        driver.close()

        # Get country object from database
        currency = session.query(Currency).filter(
            Currency.slug == slugify(country)).first()

        return currency
        # print(f"An error occured: {response.status_code}")


if __name__ == "__main__":
    # test nigeria ip
    print(get_location_currency("102.216.201.11"))
    # test usa ip
    print(get_location_currency("204.44.112.40"))
