import pandas as pd
url = 'https://www.nationalbanken.dk/en/statistics/exchange_rates/pages/default.aspx'
df = pd.read_html(url, attrs = {'class': 'table table-condensed table-bordered'}, flavor='bs4')
table1 = df[0][list(df[0].copy().columns)[:-3]]
table2 = df[1][list(df[1].copy().columns)[:-3]]

"""
The exchange rates published on Danmarks Nationalbank's website are the prices in Danish kroner for 100 units of the foreign currency.
(Converting to 1 unit, we divide by 100 in this script).

The European Central Bank (ECB) conducts a daily concertation procedure at 14:15, at which time 32 exchange rates are agreed among a number of central banks.

The reference rates are based on actual exchange rates in the interbank market and are set at the mid-price of the sell and buy side at the time of the concertation.
"""
table1[list(table1.copy().columns)[2:4]] = table1[list(table1.copy().columns)[2:4]]/100
table2[list(table2.copy().columns)[2:4]] = table2[list(table2.copy().columns)[2:4]]/100

extract = pd.concat([table1, table2], ignore_index=True)








# from bs4 import BeautifulSoup as bs
# import requests

# # This is to format the string received to dictionary
# bm = 'black_market'
# cbn = 'cbn'
# bdc = 'bdc'
# moneygram = 'moneygram'
# westernunion = 'westernunion'
# fx = 'fx'

# def get_current_rates():
#     url = "https://nairatoday.com/liverates.html"
#     soup = bs(requests.get(url).text, 'html.parser')

#     # This is the required rates
#     needed = [bm, cbn]
#     needed_rates = {}

#     # Getting the current exchanges from the script tag
#     script = soup.find('script').text
#     # script = script.replace("\/liverates.html?__cf_chl_tk", "/liverates.html?__cf_chl_tk\"")
#     # print(script.split('=')[1].strip(' ;').replace('{', ''))

#     # Formating the response to dictionary
#     current_rates = eval(script.split('=')[1].strip(' ;'))

#     # Accessing only needed exchanges and storing in needed_rates
#     for key, value in current_rates.items():
#         if key in needed:
#             needed_rates[key] = value[0]

#     return needed_rates

# import csv
# from urllib.request import urlopen

# url = 'https://www.nationalbanken.dk/en/statistics/exchange_rates/pages/default.aspx'
# # url = 'https://sg.finance.yahoo.com/currencies'
# response = urlopen(url)
# print(response)
# cr = csv.reader(response)



