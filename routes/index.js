var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.send({ title: "000000000000000" });
});

module.exports = router;
