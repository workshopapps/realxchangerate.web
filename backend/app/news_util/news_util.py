#!/usr/bin/env python3
"""
Defines function to scrape news data from the web
"""
from app.api.deps import get_location
from os import environ
import requests

api_key = environ.get('NEWS_API_KEY')

countries = {
	"Argentina": "ar",
	"Australia": "au",
	"Austria": "at",
	"Azerbaijan": "az",
	"Bangladesh": "bd",
	"Belarus": "by",
	"Belgium": "be",
	"Bolivia": "bo",
	"Brazil": "br",
	"Bulgaria": "bg",
	"Cameroon": "cm",
	"Canada": "ca",
	"Chile": "cl",
	"China": "cn",
	"Colombia": "co",
	"Costa Rica": "cr",
	"Cuba": "cu",
	"Czech republic": "cz",
	"Denmark": "dk",
	"Dominican Republic": "do",
	"Ecuador": "ec",
	"Egypt": "eg",
	"Estonia": "ee",
	"Ethiopia": "et",
	"Finland": "fi",
	"France": "fr",
	"Germany": "de",
	"Ghana": "gh",
	"Greece": "gr",
	"Hong Kong": "hk",
	"Hungary": "hu",
	"India": "in",
	"Indonesia": "id",
	"Iraq": "iq",
	"Ireland ":"ie",
	"Israel": "il",
	"Italy": "it",
	"Japan": "jp",
	"Jordan": "jo",
	"Kazakhstan": "kz",
	"Kuwait": "kw",
	"Latvia": "lv",
	"Lebanon": "lb",
	"Lithuania": "lt",
	"Madagascar": "mg",
	"Malaysia": "my",
	"Mexico": "mx",
	"Morocco": "ma",
	"Mozambique": "mz",
	"Myanmar": "mm",
	"Netherland": "nl",
	"New zealand": "nz",
	"Nigeria": "ng",
	"North Korea": "kp",
	"Norway": "no",
	"Pakistan": "pk",
	"Paraguay": "py",
	"Peru": "pe",
	"Philippines": "ph",
	"Poland": "pl",
	"Portugal": "pt",
	"Puerto Rico": "pr",
	"Romania": "ro",
	"Russia": "ru",
	"Saudi Arabia": "sa",
	"Serbia": "rs",
	"Singapore": "sg",
	"Slovakia": "sk",
	"Slovenia": "si",
	"South Africa": "za",
	"South Korea": "kr",
	"Spain": "es",
	"Sudan": "sd",
	"Sweden": "se",
	"Switzerland": "ch",
	"Taiwan": "tw",
	"Tanzania": "tz",
	"Thailand": "th",
	"Turkey": "tr",
	"Ukraine": "ua",
	"United Arab Emirates": "ae",
	"United Kingdom": "gb",
	"United States": "us",
	"Venezuela": "ve",
	"Vietnam": "vi",
}

def get_news_for_user_location(ip):
	# Get location of IP
	country = get_location(ip)
	# Get country code
	code = countries.get(country, "us,ng,uk")
	news_url = f"https://newsdata.io/api/1/news?apikey={api_key}&country={code}&category=business&&q=currency%20OR%20finance"

	# Query API
	response = requests.get(news_url)

	if response.status_code == 200:
		if response.json().get("totalResults") == 0:
			news_url = f"https://newsdata.io/api/1/news?apikey={api_key}&country=us,ng,uk&category=business&&q=currency%20OR%20finance"

			# Query API
			response = requests.get(news_url)
			return response.json()
		return response.json()
	else:
		return None

