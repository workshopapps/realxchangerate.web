#!/bin/bash

# this script file is placed in the root of my server and is triggred by circleci

# make sure docker-compose is installed
sudo docker-compose

cd realxchangerate.web

sudo docker-compose down

# wait for 20 seconds
sleep 20

#sudo docker-compose up -d

sudo docker system prune -a -f

sudo docker-compose up -d


echo "Thank you for running with us"