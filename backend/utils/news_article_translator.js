const translate = require("@vitalets/google-translate-api");

const news_article_translator = async (article, lang) => {
	console.log(`Start translating article`);
	const translated_article = await translate(article, { to: lang });
	console.log(`Finished translating article`);
	return translated_article.text;
};

module.exports = news_article_translator;
