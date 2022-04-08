const translate = require("@vitalets/google-translate-api");

const before_translator = (before) => {
	const digit = before.slice(0, -3);
	const word = before.slice(-3);
	switch (word) {
		case "分鐘前":
			return digit + " minute(s) ago";
		case "小時前":
			return digit + " hour(s) ago";
		default:
			return before;
	}
};

// Pass the news array and language needed to the function
// Return a translated news array
const news_info_translator = async (all_news, lang) => {
	let all_translated_news = [];

	for (const { title, before, link } of all_news) {
		const translated_title = (await translate(title, { to: lang })).text;
		const translated_before = before_translator(before);

		const this_translated_news = {
			translated_title,
			translated_before,
			link
		};

		all_translated_news.push(this_translated_news);
	}

	return all_translated_news;
};

module.exports = news_info_translator;
