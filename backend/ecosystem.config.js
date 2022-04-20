module.exports = {
	apps: [
		{
			name: "backend",
			script: "./index.js",
			env: {
				MONGODB: "<MONGODB_ATLAS_URL>",
				PORT: 8000
			}
		}
	]
};
