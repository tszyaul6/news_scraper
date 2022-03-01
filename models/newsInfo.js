const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsInfoSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		source: {
			type: String,
			required: true
		},
		before: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		article: {
			type: Schema.Types.ObjectId,
			ref: "Article"
		}
	},
	{ timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("NewsInfo", newsInfoSchema);
