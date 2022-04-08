const translate = require("@vitalets/google-translate-api");

const news_article_translator = async (article, lang) => {
	const translated_article = await translate(article, { to: lang });
	return translated_article.text;
};

module.exports = news_article_translator;
