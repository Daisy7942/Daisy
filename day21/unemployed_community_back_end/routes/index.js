const express = require("express");
const router = express.Router();

const page = require("./page.js");
const community = require("./community.js");
const community = require("./auth.js");
const community = require("./mypage.js");

router.use("/", page);
router.use("/community", community);
router.use("/auth", community);
router.use("/mypage", community);

module.exports = router;
