#!/usr/bin/env bash
####################################################

####################################################
## Change Working Directory To laradock
####################################################
cd /opt/api/desmtech

####################################################
## Run Docker Commands
####################################################
docker-compose -p desmtech -f docker-compose-prod.yml build
docker-compose down
docker-compose -p desmtech -f docker-compose-prod.yml up -d
