const Article = require("../models/article");
const NewsInfo = require("../models/newsInfo");
const news_article_translator = require("../utils/news_article_translator");
const std_article_scraper = require("../utils/std_article_scraper");

const getArticle = async (req, res) => {
	console.log(`get article is running...`);

	try {
		const { article: article_id, link } = await NewsInfo.findById(
			req.params.id
		);

		if (!link) return;

		if (article_id) {
			const { content } = await Article.findById(article_id);
			return res.status(200).json({
				message: `Successfully retrieved the article from database`,
				content
			});
		}

		let article = await std_article_scraper(link);

		let translated_article = await news_article_translator(
			article.replace(/<[^>]+>/g, ""),
			"en"
		);

		const new_article = new Article({
			content: translated_article,
			news: req.params.id
		});

		const { id } = await new_article.save();

		await NewsInfo.findByIdAndUpdate(
			req.params.id,
			{
				article: id
			},
			{ new: true }
		);

		return res.status(200).json({
			message: `Successfully retrieved the article from scraper`,
			content: new_article.content
		});
	} catch (err) {
		return { message: `Failed to retrieve the article`, error: err };
	}
};

module.exports = getArticle;
