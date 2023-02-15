const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const express = require("express");
const router = express.Router();

const login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  });

  module.exports = { login };
