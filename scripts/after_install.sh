#!/bin/bash
cd /home/ubuntu/server
npm install -y
cd ~
echo "
 server {
         listen 80 default_server;
         listen [::]:80 default_server;

         root /var/www/html;
         index index.html index.htm index.nginx-debian.html;

         server_name _;

         location / {
                 proxy_pass http://localhost:3000;
         }
 }" | sudo tee /etc/nginx/sites-available/default > /dev/null
sudo systemctl restart nginx