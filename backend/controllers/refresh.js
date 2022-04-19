const NewsInfo = require("../models/newsInfo");
const Article = require("../models/article");
const std_info_scraper = require("../utils/std_info_scraper");
const news_info_translator = require("../utils/news_info_translator");

const scrap_now = async () => {
	// Scrap all the news again
	const all_news_info = await std_info_scraper();

	// Translate all the news in English
	const all_translated_news_info = await news_info_translator(
		all_news_info,
		"en"
	);

	// Update the news info to the database
	if (all_translated_news_info.length > 0) {
		for (this_translated_news_info of all_translated_news_info) {
			const { translated_title, translated_before, link } =
				this_translated_news_info;

			const allNewsInfo = new NewsInfo({
				title: translated_title,
				source: "std",
				before: translated_before,
				link
			});

			await allNewsInfo.save();
		}
	}

	return await NewsInfo.find();
};

const refresh = async (req, res) => {
	try {
		const cached = await NewsInfo.find();

		if (cached.length > 0) {
			// Get the difference between last updated time and now
			const last_updated = new Date(cached[0].createdAt);
			const now = new Date();
			const difference_in_min = (now - last_updated) / 60000;

			// If the difference is larger than 20 minutes, clear db -> scrap again
			// If the differnec is smaller than 20 minutes, serve the cache
			if (difference_in_min >= 20) {
				await NewsInfo.deleteMany({});
				await Article.deleteMany({});

				const result = await scrap_now();

				return res.status(200).json({
					message: "Successfully clear the db and scrap the news",
					allNewsInfo: result
				});
			} else {
				return res.status(200).json({
					message: "Successfully load the news from database",
					allNewsInfo: cached
				});
			}
		} else {
			const result = await scrap_now();

			return res.status(200).json({
				message: "First time initiate the database",
				allNewsInfo: result
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(502).json({
			message: "Server Error",
			error: error
		});
	}
};

module.exports = refresh;
