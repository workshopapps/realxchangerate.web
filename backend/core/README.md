# CORE APP SERVER

## SETUP

- Clone the repo 
`git clone https://github.com/workshopapps/realxchangerate.web.git`

- Run: `git pull origin dev`

- Checkout to the task branch `git checkout -b <NAME_OF_THE_TASK>`

- change directory to the micro-service you are to work on `cd backend/<micro-service>`

- Run the following commands

```python
virtualenv env

source env/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload 

# App starts on Go to http://127.0.0.1:8000
```

## PUSHING YOUR CODE AND MAKING A PULL REQUEST

- Run `git branch`. It should show that you are on your current branch

- Run: `git add .`

- Run: `git commit -m "< COMMIT MESSAGE >"`

- Run: `git pull origin dev`

- Run: `git push origin < BRANCH_NAME >`

- Go to the repository and create a pull request.
