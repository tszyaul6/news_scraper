# Instructions for EC2

This is the instructions for properly setting up the EC2 instance.

# Quick installation

Use the setup.sh provided by this repository.

```
sudo ./setup.sh
```

# Backend settings

## React app setup

Build the application

```
cd backend && npm run build
```

## Nginx Setup

Goto the following directory

```
cd /etc/nginx/sites-available
```

Replace the default file as the following

```
server {
  listen 80 default_server;
  server_name _;

  # react app & front-end files
  location / {
    root /home/ubuntu/news_scraper/frontend/build;
    try_files $uri /index.html;
  }

  # node api reverse proxy
  location /api {
    proxy_pass http://<private-ipv4-address>:8000/news;
  }
}
```

## PM2 Commnads

Using PM2 to run the backend server

```
cd backend && pm2 start ecosystem.config.js
```

Other operations as following:

```
<!-- list all servers -->
pm2 list

<!-- restart server -->
pm2 restart <process>

<!-- stop server -->
pm2 stop <process>

<!-- remove server -->
pm2 delete <process>


<!-- view logs -->
pm2 logs <process>

<!-- clear logs -->
pm2 flush
```
