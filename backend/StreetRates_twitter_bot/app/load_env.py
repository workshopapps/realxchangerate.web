from os import environ


def load_twitter_env():
    consumer_key = environ["TWITTER_API_KEY"]
    consumer_secret = environ["TWITTER_API_SECRET"]
    bearer_token = environ["BEARER_TOKEN"]
    access_token = environ["TWITTER_ACCESS_TOKEN"]
    access_secret = environ["TWITTER_ACCESS_SECRET"]
    return bearer_token, consumer_key, consumer_secret, access_token, access_secret
