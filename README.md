# Introduction

This is the backend server of our CS4296 Group Project. It provides an API for connecting the database and serving the translated news data and articles to the frontend server.

# Prerequisit

You need node and npm for this project. If you don't have node, visit [Node.js Official Website](https://www.nodejs.org).

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

Install the dependencies

```
npm install && npm install -D
```

At the root folder, add a .env file including the following line and replace the <mongodb-atlas-url> by your MongoDB Atlas URL

```
MONOGODB=<mongodb-atlas-url>
```

Finally, start the program

```
npm start
```
