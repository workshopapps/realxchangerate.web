import os
import telegram.ext
import requests
from app.utils import get_binancep2p_rate, format_binance_response_data
import asyncio



Token = os.getenv("TELEGRAM_API_KEY")

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
e.g/usd NGN
/convert -> You type in the isocode of the currency you want to convert then the isocode of the currency you want to convert to.
e.g /convert USD NGN
/list -> Lists all the avalable iso_codes the bot can get rates for
/calculate -> Calculate the actual amount of any available currency to another put the from and to currency.
e.g /calculate USD NGN Amount
"""
    )

def list(update,context):
    for iso_code in iso_code_list:
        update.message.reply_text(iso_code)
        


async def usd(update,context):
    value = "".join(context.args[0]).upper()
    if value not in iso_code_list:
        update.message.reply_text("This isocode does not have a black market rate")
    else:
        resp_data = await get_binancep2p_rate(value)
        formated_data = await format_binance_response_data(resp_data)
        parallel_buy = formated_data["buy_rate"]
        reply = f"1 {value} to USD is {parallel_buy}"
        update.message.reply_text(reply)

async def convert(update,context):
    if len(context.args) < 2:
        update.message.reply_text("Enter in the format e.g/convert USD NGN")
    else:
        from_currency = "".join(context.args[0]).upper()
        to_currency = "".join(context.args[1]).upper()
        if from_currency not in iso_code_list and to_currency not in iso_code_list:
            update.message.reply_text("One of this isocodes does not have a black market rate")
        else:
            resp_data1 = await get_binancep2p_rate(from_currency)
            formated_data1 = await format_binance_response_data(resp_data1)
            resp_data2 = await get_binancep2p_rate(to_currency)
            formated_data2 = await format_binance_response_data(resp_data2)
            parallel_buy1 = formated_data1["buy_rate"]
            parallel_buy2 = formated_data2["buy_rate"]
            final_result = round(float(parallel_buy2) / float(parallel_buy1),7)
            reply = f"1 {from_currency} to {to_currency} is {final_result}"
            update.message.reply_text(reply)
        
async def calculate(update,context):
    if len(context.args) < 3:
        update.message.reply_text("Enter in the format e.g/calculate USD NGN 100")
    else:
        from_currency = "".join(context.args[0]).upper()
        to_currency = "".join(context.args[1]).upper()
        amount = float(context.args[2])
        if from_currency not in iso_code_list and to_currency not in iso_code_list:
            update.message.reply_text("One of this isocodes does not have a black market rate")
        else:     
            resp_data1 = await get_binancep2p_rate(from_currency)
            formated_data1 = await format_binance_response_data(resp_data1)
            resp_data2 = await get_binancep2p_rate(to_currency)
            formated_data2 = await format_binance_response_data(resp_data2)
            parallel_buy1 = formated_data1["buy_rate"]
            parallel_buy2 = formated_data2["buy_rate"]
            final_result = round(float(parallel_buy2) / float(parallel_buy1),6) * amount
            reply = f"{amount} {from_currency} to {to_currency} is {final_result}"
            update.message.reply_text(reply)

def loop_runner(action):
    loop = asyncio.new_event_loop()
    return loop.run_until_complete(action)

def loop_runner_2(action):
    loop = asyncio.new_event_loop()
    return loop.run_until_complete(action)

def loop_runner_3(action):
    loop = asyncio.new_event_loop()
    return loop.run_until_complete(action)

def sync_run(update,context):
    return loop_runner(usd(update,context))

def sync_run_2(update,context):
    return loop_runner_2(convert(update,context))

def sync_run_3(update,context):
    return loop_runner_3(calculate(update,context))


dispatcher.add_handler(telegram.ext.CommandHandler('start',start))
dispatcher.add_handler(telegram.ext.CommandHandler('help',help))
dispatcher.add_handler(telegram.ext.CommandHandler('list',list))
dispatcher.add_handler(telegram.ext.CommandHandler('usd',sync_run))
dispatcher.add_handler(telegram.ext.CommandHandler('convert',sync_run_2))
dispatcher.add_handler(telegram.ext.CommandHandler('calculate',sync_run_3))

if __name__ == "__main__":
    updater.start_polling()
    updater.idle()
