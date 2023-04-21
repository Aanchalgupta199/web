#!/bin/bash
cd /home/ubuntu/server
#npm start
pm2 start npm --name "reactapp" -- start
pm2 startup
pm2 save
pm2 restart all
