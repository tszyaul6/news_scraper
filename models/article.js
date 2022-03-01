const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema(
	{
		content: {
			type: String,
			required: true
		},
		language: {
			type: String,
			default: "en",
			required: true
		},
		news: {
			type: Schema.Types.ObjectId,
			ref: "NewsInfo"
		}
	},
	{ timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("Article", articleSchema);
