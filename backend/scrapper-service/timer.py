import datetime
from apscheduler.schedulers.blocking import BlockingScheduler


sched = BlockingScheduler()

# scheduled to run every 10 seconds
@sched.scheduled_job('interval', seconds=10)
def timed_job():
    time = datetime.datetime.now().strftime("%H:%M:%S")
    print(time)
    date = datetime.datetime.now().strftime("%d/%m/%Y")
    print(date)


sched.start()
