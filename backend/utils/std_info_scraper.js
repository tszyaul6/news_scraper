const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

// Scrap all STD news info including title, before and link in Chinese
const std_info_scraper = async () => {
	// Launch browser and direct to the website
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("https://std.stheadline.com");

	// Get the html code
	let body = await page.content();

	// Close browser
	await browser.close();

	// Let cheerio to handle the html
	let $ = await cheerio.load(body);

	// Array that holds all news
	let all_news_info = [];

	// Push the news title, before and link to the array as an individual object
	$("div#instantTabPane1 div div").each((index, element) => {
		let $2 = cheerio.load($(element).html());
		let title = $2("div.media div:nth-child(2) h2 a").text();
		let before = $2("div.media div:nth-child(2) span").text();
		let link = $2("div.media div:nth-child(2) h2 a").attr("href");
		if (!title || !link || !before) return;

		const this_news = {
			title,
			before,
			link
		};

		all_news_info.push(this_news);
	});

	// Return the news array
	return all_news_info;
};

module.exports = std_info_scraper;
