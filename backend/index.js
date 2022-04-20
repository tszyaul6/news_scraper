const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const news = require("./routes/news");
const app = express();
const PORT = process.env.PORT || 8080;

// Cross-origin resource sharing for frontend server
app.use(cors());

// Parse the json body from incoming request
app.use(express.json());

// Use /news routes
app.use("/news", news);

// Connect to MongoDB using Mongoose and check the connection
mongoose.connect(process.env.MONGODB);
mongoose.connection.on("error", (err) => {
	console.log("Mongoose error occurs: ", err);
});
mongoose.connection.on("connected", () => {
	console.log("Mongoose is connected");
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
