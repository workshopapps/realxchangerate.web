source /var/lib/jenkins/workspace/realxchangerate/backend/venv/bin/activate
cd /var/lib/jenkins/workspace/realxchangerate/backend
PID=$(ps aux | grep 'uvicorn app.main:app' | awk {'print $2'} | xargs)
if [ "$PID" != "" ]
then
kill -9 $PID
sleep 2
echo "" > nohup.out
echo "Restarting FastAPI server"
else
echo "No such process. Starting new FastAPI server"
fi
nohup uvicorn app.main:app --host 0.0.0.0 --port 7015 --proxy-headers &
