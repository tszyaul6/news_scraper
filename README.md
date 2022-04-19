# Introduction

This is the backend server of our CS4296 Group Project. It provides an API for connecting the database and serving the translated news data and articles to the frontend server.

# Prerequisit

You need node and npm for this project. If you don't have node, visit [Node.js Official Website](https://www.nodejs.org)

You also need a MongoDB Atlas account for storing data in the database. If you don't have one, visit [MongoDB](https://www.mongodb.com)

# Quick Installation

Clone this repository to your local machine

```
git clone https://github.com/tszyaul6/news_scraper.git
```

Change directory to the folder

```
cd news_scraper
```

## Backend Installation

Install the dependencies for backend

```
cd backend
npm install && npm install -D
```

## Frontend Installation

Install the dependencies for frontend:

```
cd frontend
npm install && npm install -D
```

# Environment Variables

## Backend .env

Make a .env file with the following line:

```
cd backend
echo "MONOGODB=<mongodb-atlas-url>" > .env
```

where mongodb-atlas-url is provided by MongoDB Atlas

## Frontend .env

Make a .env file with the following line:

```
cd frontend
echo "REACT_APP_BACKEND_API=/api" > .env
```

# Run the server

Finally, start the program by:

```
cd backend && npm start
```

or

```
cd frontend && npm start
```
