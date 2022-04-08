const express = require("express");
const router = express.Router();
const refresh = require("../controllers/refresh");
const getArticle = require("../controllers/getArticle");

router.get("/refresh", refresh);
router.get("/:id", getArticle);

module.exports = router;
