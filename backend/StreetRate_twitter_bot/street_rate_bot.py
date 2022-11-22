import tweepy
import requests
import time

api_key = ""
api_secret = ""
bearer_token = r""
access_token = ""
access_token_secret = ""

client = tweepy.Client(bearer_token, api_key, api_secret, access_token, access_token_secret)

auth = tweepy.OAuth1UserHandler(api_key, api_secret, access_token, access_token_secret)
api = tweepy.API(auth)

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
