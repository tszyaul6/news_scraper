# install dependency for frontend application
cd /home/ubuntu/news_scraper/frontend
npm install && npm install -D
echo "REACT_APP_BACKEND_API=/api" > .env
npm run build

# install dependency for backend application
cd /home/ubuntu/news_scraper/backend
npm install && npm install -D
echo "MONOGODB=<mongodb-atlas-url>" > .env

# replace default nginx file
cd /etc/nginx/sites-available
sudo rm default
sudo tee -a /etc/nginx/sites-available/default << END
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
END