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