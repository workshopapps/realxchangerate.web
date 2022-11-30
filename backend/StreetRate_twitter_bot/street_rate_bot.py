import tweepy
import asyncio
import aiohttp
import requests
from datetime import datetime, time, timedelta
from app.utils import get_binancep2p_rate, format_binance_response_data, make_official_rate_request,binancep2p_endpoint,official_rate_endpoint,request_headers

iso_code_list = set("ARS","EUR","USD","AED","AUD","BDT","BHD","BOB","BRL","CAD","CLP","CNY","COP","CRC","CZK","DOP","DZD","EGP","GBP","GEL","GHS","HKD","IDR","INR","JPY","KES","KHR","KRW","KWD","KZT","LAK","LBP","LKR","MAD","MMK","MXN","MYR","NGN","OMR","PAB","PEN","PHP","PKR","PLN","PYG","QAR","RON","RUB","SAR","SDG","SEK","SGD","THB","TND","TRY","TWD","UAH","UGX","UYU","VES","VND","ZAR")
api_key = ""
api_secret = ""
bearer_token = r""
access_token = ""
access_token_secret = ""

client = tweepy.Client(bearer_token, api_key, api_secret, access_token, access_token_secret)

auth = tweepy.OAuth1UserHandler(api_key, api_secret, access_token, access_token_secret)
api = tweepy.API(auth)
now = datetime.now() 
#get the last 20 tweets that have mentioned my twitter handle name

async def twitter_bot():
    tweets = api.mentions_timeline()
    for tweet in tweets:
        #taking care of the case where the user does not put an hashtag
        if len(tweet.entities.hashtags) ==0:
            #code to get all tweets with mentions within the last 2 hours
            if now - (tweet.created_at) < timedelta(hours=2):
                text = tweet.text.strip().upper()
                id = tweet.id
                if text not in iso_code_list:
                    reply = f"This country does not have a black market rate"
                    api.update_status(reply,id)
                    continue
                resp_data = await get_binancep2p_rate(text)
                formated_data = await format_binance_response_data(resp_data)
                parallel_buy = formated_data["buy_rate"]
                reply = f"1 {text} to USD is {parallel_buy}"
                api.update_status(reply,id)

def tweet_daily():
    rates_api = requests.get(
        f"https://stark-eyrie-35524.herokuapp.com/rates")
        
    message_json = rates_api.json()
    buy = str(message_json['buy'])
    sell = str(message_json['sell'])

    message = "The current black market rate for Naira to dollar; Buy rate: {} Sell rate: {} ".format(buy, sell)

    # this sends a tweet to our timeline
    client.create_tweet(text=message)

    # this gets the user id of the bot
    client_id =  client.get_me().data.id
    # loop to keep searching for tweets that mentions the bots handle and send them a reply
    start_id = 1
    initialisation_resp = client.get_users_mentions(client_id)
    if initialisation_resp.data != None:
        start_id = initialisation_resp.data[0].id
    while True:
        response = client.get_users_mentions(client_id, since_id=start_id)

        if response.data != None:
            for tweet in response.data:
                try:
                    client.create_tweet(in_reply_to_tweet_id=tweet.id, text=message)
                    start_id = tweet.id
                except:
                    pass

        time.sleep(4)

