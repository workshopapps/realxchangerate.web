import tweepy
import requests
import time
from load_env import load_twitter_env

# this loads the twitter credentials
bearer_token, consumer_key, consumer_secret, access_token, access_secret = load_twitter_env()

client = tweepy.Client(bearer_token, consumer_key, consumer_secret, access_token, access_secret)

auth = tweepy.OAuth1UserHandler(consumer_key, consumer_secret, access_token, access_secret)
api = tweepy.API(auth)

rates_api = requests.get(
    f"https://stark-eyrie-35524.herokuapp.com/rates")
    
message_json = rates_api.json()
buy = str(message_json['buy'])
sell = str(message_json['sell'])

message = "Todays black market rate for Naira to dollar; Buy rate: {} Sell rate: {} ".format(buy, sell)

# this sends a tweet to our timeline
client.create_tweet(text=message)

# this gets the user id of the bot
client_id =  client.get_me().data.id
# loop to keep searching for tweets that mentions the bots handle and send them a reply
start_id = 1
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
