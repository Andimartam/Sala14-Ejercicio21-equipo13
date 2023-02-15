const { sequelize, Article, User } = require("../models/index");
const bcrypt = require('bcryptjs');
const express = require('express');
const router = require("../routes/articleRoutes");
const passport = require('passport');

async function store(req, res) {
  // First we define the constants with the parameters we get from the forms.
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const mail = req.body.mail;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Then we use "try" to create the new user
  try {
    await User.create({
      firstname: firstname,
      lastname: lastname,
      password: hashedPassword,
      mail: mail,
    });
    res.redirect("/");
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    res.render("errorTemplate", { error });
  }
}

const login = router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/login",
  }),
);

module.exports = { store, login };
