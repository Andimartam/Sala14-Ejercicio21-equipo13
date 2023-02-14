const { sequelize, Article, User } = require("../models/index");

async function store(req, res) {
  // First we define the constants with the parameters we get from the forms.
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  // Then we use "try" to create the new user
  try {
    await User.create({
      firstname: firstname,
      lastname: lastname,
      password: password,
      mail: email,
    });
    res.redirect("/");
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    res.render("errorTemplate", { error });
  }
}

module.exports = { store };
