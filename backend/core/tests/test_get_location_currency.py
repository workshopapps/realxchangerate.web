#!/usr/bin/env python3
import unittest

from slugify import slugify

from core.get_location_currency import get_location_currency, validate_ip
from db.database import SessionLocal
from db.models import Currency

"""Unit tests for get_location_currency module"""


class TestGetLocationCurrency(unittest.TestCase):
	def test_validate_ip_integer(self):
		with self.assertRaises(TypeError):
			validate_ip(24)
	
	def test_validate_ip_float(self):
		with self.assertRaises(TypeError):
			validate_ip(200.9)
	
	def test_validate_ip_invalid(self):
		with self.assertRaises(ValueError):
			validate_ip("102.296.01.11")
		with self.assertRaises(ValueError):
			validate_ip("102.216.201.1122")
	
	def test_validate_ip_valid(self):
		self.assertTrue(validate_ip("102.216.201.112"))
		self.assertTrue(validate_ip("204.44.112.40"))
	
	def test_get_location_currency_nigeria(self):
		session = SessionLocal()
		nigeria = session.query(Currency).filter(
			Currency.slug == slugify("Nigeria").first()
		)
		self.assertEqual(nigeria, get_location_currency("102.216.201.112"))
	
	def test_get_location_currency_us(self):
		session = SessionLocal()
		us = session.query(Currency).filter(
			Currency.slug == slugify("United States").first()
		)
		self.assertEqual(us, get_location_currency("204.44.112.40"))
