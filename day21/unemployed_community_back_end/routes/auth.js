const express = require("express");
const router = express.Router();
const { join } = require("../controllers/auth");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/join", isNotLoggedIn, join);

router.get("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, logout);

router.get(
  "/kakao",
  passport.autheticate("kakao", {
    failureRedirect: "/?loginError= 카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
