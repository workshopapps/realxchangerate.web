pipeline {

	agent any
	stages {	

		stage("build frontend-client"){

			steps {
				sh "cd frontend"
				sh "cd frontend/client && npm i --force && CI=false npm run build"
			} 
          }
    
    		stage("build frontend-admin"){

			steps {
				sh "cd frontend"
				sh "cd frontend/admin && npm i --force && CI=false npm run build"
			} 
          }
    
		stage("deploy frontend") {
		
			steps {
				sh "sudo cp -rf ${WORKSPACE}/frontend/client/build/* /var/www/streetrate.hng.tech/html/client/"
				sh "sudo cp -fr ${WORKSPACE}/frontend/admin/build/* /var/www/streetrate.hng.tech/html/admin/"
        			sh "sudo cp -rf ${workspace}/backend/* /home/light/realxchangerate/backend"
				//sh "sudo su - light && whoami"
				//sh "sudo systemctl restart realxchangerate.service"
			}
			
		}
		stage("build & deploy backend"){

			steps {
			     //sh '''#!/bin/bash
				     //source ${WORKSPACE}/backend/venv/bin/activate
				     //cd ${WORKSPACE}/backend
				     //PID=$(ps aux | grep 'uvicorn app.main:app' | awk {'print $2'} | xargs)
				     //if [ "$PID" != "" ]
				     //then
				     //kill -9 $PID
				     //sleep 2
				     //echo "" > nohup.out
				     //echo "Restarting FastAPI server"
				     //else
				     //echo "No such process. Starting new FastAPI server"
			 	     //fi
				     //nohup uvicorn app.main:app --host 0.0.0.0 --port 7015 --proxy-headers &
			      //'''
				sh "sudo chmod +x startup.sh"
				sh "sudo ./startup.sh"
				//sh "cd backend"
				//sh "cd backend && python3 -m pip install --upgrade pip virtualenv"
				//sh "cd backend && virtualenv -p python3 venv"
        			//sh "cd backend && source venv/bin/activate"
				//sh "cd backend && pip3 install -r requirements.txt"
				//sh "cd backend && nohup uvicorn app.main:app --host 0.0.0.0 --port 7015 --proxy-headers &"
			} 
        	}

        	}	

	}
