module.exports = {
  apps : [{
    name   : "backend",
    script : "./index.js",
    env	   : {
	MONGODB: 'mongodb+srv://anotherone:eqnPTijkJQp7tAc9@fyptesting.2itvs.mongodb.net/news_scraper?retryWrites=true&w=majority'
    }
  }]
}
