import telegram.ext
import requests
from app.utils import get_binancep2p_rate, format_binance_response_data
import asyncio



Token = "5640574571:AAFS6NqaeEiv7w1sWLpPu7f--v2rtNnAzcE"

updater = telegram.ext.Updater(Token,use_context=True)
dispatcher = updater.dispatcher
iso_code_list = set(("ARS","EUR","USD","AED","AUD","BDT","BHD","BOB","BRL","CAD","CLP","CNY","COP","CRC","CZK","DOP","DZD","EGP","GBP","GEL","GHS","HKD","IDR","INR","JPY","KES","KHR","KRW","KWD","KZT","LAK","LBP","LKR","MAD","MMK","MXN","MYR","NGN","OMR","PAB","PEN","PHP","PKR","PLN","PYG","QAR","RON","RUB","SAR","SDG","SEK","SGD","THB","TND","TRY","TWD","UAH","UGX","UYU","VES","VND","ZAR"))


def start(update,context):
    # update.message.sendMessage(chat_id=context.message.chat_id, text="I'm a bot, please talk to me!")
    update.message.reply_text("Welcome to streetrates telegram bot where we provide real time black market rate of any currency you need check /help to see the commands available")


def help(update,context):
    update.message.reply_text(
"""
/start -> Welcome to the channel
/help -> View all the Commands
/usd -> You type in the isocode of the currency and it returns the black market rate of the currency
""")

async def usd(update,context):
    value = "".join(context.args).upper()
    if value not in iso_code_list:
        pass

    resp_data = await get_binancep2p_rate(value)
    formated_data = await format_binance_response_data(resp_data)
    parallel_buy = formated_data["buy_rate"]
    reply = f"1 {value} to USD is {parallel_buy}"
    update.message.reply_text(reply)

def loop_runner(action):
    loop = asyncio.new_event_loop()
    return loop.run_until_complete(action)

def sync_run(update,context):
    return loop_runner(usd(update,context))


dispatcher.add_handler(telegram.ext.CommandHandler('start',start))
dispatcher.add_handler(telegram.ext.CommandHandler('help',help))
dispatcher.add_handler(telegram.ext.CommandHandler('usd',sync_run))

if __name__ == "__main__":
    updater.start_polling()
    updater.idle()