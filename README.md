# 📚 Introduction

This is our CS4296 Group Project. It is a web application that provides Hong Kong news translation services. This application is built using MERN stack and can be deployed on AWS EC2 free tier instances.

# 🛠 Quick Installation

This installation guide is for newly created EC2 instances.

Clone this repository

```
git clone https://github.com/tszyaul6/news_scraper.git
```

Run this shell script

```
sudo ./news_scraper/setup.sh
```

It might need a few minutes to complete the whole installation.

After the above is finished, installed the dependencies for frontend and backend.

## Frontend

Goto the following directory

```
cd /home/ubuntu/news_scraper/frontend
```

Install the dependencies

```
npm install
```

Create .env file with the following

```
echo "REACT_APP_BACKEND_API=/api" > .env
```

Build the react application

```
npm run build
```

## Backend

Goto the following directory

```
cd /home/ubuntu/news_scraper/backend
```

Install the dependencies

```
npm install && npm install -D
```

Create .env file with the following

```
echo "MONOGODB=<mongodb-atlas-url>" > .env
```

# ✍🏻 Changing Variables

Before running the application, there are two variables needed to change.
We are using vim as the editor in the following examples.
Feel free to use other editors like nano instead.

## MongoDB Atlas URL

Modify the following file by

```
sudo vim /home/ubuntu/news_scraper/backend/.env
```

Change \<mongodb-atlas-url\> to your MongoDB Atlas URL.

## API IP Address

Modify the following file by

```
sudo vim /etc/nginx/sites-available/default
```

Change the \<private-ipv4-address\> to your private IPv4 address of this intance from AWS console, then

```
sudo systemctl restart nginx
```

# 🌈 Start the server

Goto the following directory

```
cd /home/ubuntu/news_scraper/backend
```

Start the server by using npm

```
npm start
```
