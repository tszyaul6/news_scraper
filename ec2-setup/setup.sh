# create apt source for node 16
sudo apt update -y
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -

# install node 16
sudo apt install -y nodejs

# install pm2
sudo npm install -g pm2

# setup pm2 to start automatically on system startup
sudo pm2 startup systemd

# install nginx
sudo apt-get install -y nginx

# install chromium
sudo apt install chromium-browser

# install dependency for frontend application
cd ~/news_scraper/frontend
npm install && npm install -D
echo "REACT_APP_BACKEND_API=/api" > .env
npm run build

# install dependency for backend application
cd ~/news_scraper/backend
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