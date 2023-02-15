const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const express = require("express");
const router = express.Router();

const login = router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/login",
  }),
);

module.exports = { login };
