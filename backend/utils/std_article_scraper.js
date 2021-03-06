const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const std_article_scraper = async (link) => {
	try {
		console.log(`Start scrapping article from ${link}`);

		// Launch browser and direct to the website
		const browser = await puppeteer.launch({
			executablePath: "/usr/bin/chromium-browser"
		});
		const page = await browser.newPage();
		await page.goto(link);

		// Get the html code
		let body = await page.content();

		// Close browser
		await browser.close();

		console.log(`Finished scrapping article`);

		// Let cheerio to handle the html
		let $ = await cheerio.load(body);

		let article = "";
		$("article.content section div:nth-child(2) p").each(
			(index, element) => {
				if (!$(element).html().trim()) return;
				article = article + "\n" + $(element).html().trim();
			}
		);

		return article.trim();
	} catch (error) {
		console.log(error);
	}
};

module.exports = std_article_scraper;
