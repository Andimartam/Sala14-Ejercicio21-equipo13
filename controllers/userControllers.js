const { sequelize, Article, User, Role } = require("../models/index");

async function store(req, res) {
  if (req.user && req.user.role.code < 400) return res.redirect("/");
  // First we define the constants with the parameters we get from the forms.
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const mail = req.body.mail;
  const password = req.body.password;

  // Then we use "try" to create the new user
  try {
    const [user, created] = await User.findOrCreate({
      where: { mail: mail },
      defaults: {
        firstname: firstname,
        lastname: lastname,
        password: password,
        mail: mail,
        roleId: 1,
      },
    });
    if (created) {
      req.login(user, () => res.redirect("/"));
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    res.send(error);
  }
}

//solo para el ADMIN

async function showUsers(req, res) {
  const usersInTable = await User.findAll({ include: Role });
  res.render("allUsers", { usersInTable });
}

async function showEditUser(req, res) {
  const userToEdit = await User.findByPk(req.params.id);
  res.render("editUser", { userToEdit });
}

async function editUser(req, res) {
  await User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mail: req.body.mail,
      roleId: req.body.role,
    },
    {
      where: { id: `${req.params.id}` },
    },
  );
  res.redirect("/usuarios");
}

async function deleteUser(req, res) {
  try {
    await Article.destroy({ where: { userId: req.params.id } });
    await User.destroy({ where: { id: req.params.id } });
    res.redirect("/usuarios");
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    res.send(error);
  }
}

module.exports = { store, showUsers, showEditUser, editUser, deleteUser };
