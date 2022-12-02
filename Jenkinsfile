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
    
    stage("build backend"){

			steps {
				sh "cd backend"
				sh "cd backend && python3 -m pip install --upgrade pip virtualenv"
				sh "cd backend && virtualenv -p python3 venv"
        			sh "cd backend && source venv/bin/activate"
				sh "cd backend && pip3 install -r requirements.txt --force"
			} 
        	}
    
		stage("deploy") {
		
			steps {
				sh "sudo cp -rf ${WORKSPACE}/frontend/client/build/* /var/www/streetrate.hng.tech/html/client/"
				sh "sudo cp -fr ${WORKSPACE}/frontend/admin/build/* /var/www/streetrate.hng.tech/html/admin/"
        			sh "sudo cp -rf ${workspace}/backend/* /home/light/realxchangerate/backend"
				sh "sudo su - light && whoami"
				//sh "sudo pm2 stop realxchangerate_api"
				sh "sudo pm2 start /home/light/realxchangerate/backend/app/main.py --interpreter python3 --name realxchangerate_api"
			}
			
		}

        	}	

	}
