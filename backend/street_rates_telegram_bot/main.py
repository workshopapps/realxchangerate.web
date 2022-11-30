import telegram.ext
from app.core import verify_password,settings

Token = settings.TELEGRAM_BOT_API

updater = telegram.ext.updater(Token,use_context=True)
dispatcher = updater.dispatcher

def start(update,context):
    update.message.reply_text("Welcome to streetrates telegram bot where we provide real time black market rate of any currency you need check /help to see the commands available")


def help(update,context):
    update.message.reply_text(
    """
    /start -> Welcome to the channel
    /help -> View all the Commands
    /usd -> You type in the isocode of the currency and it returns the black market rate of the currency
    """)

def usd(update,context):
    value = input()
    update.message.reply_text(f"{value}")

dispatcher.add_handler(telegram.ext.CommandHandler('start',start))
dispatcher.add_handler(telegram.ext.CommandHandler('help',help))
dispatcher.add_handler(telegram.ext.CommandHandler('usd',usd))

updater.start_polling()
updater.idle()