const express = require("express");
const router = express.Router();

async function logout(req, res) {
  await req.session.destroy();
  console.log("se ha cerrado la sesión");
  res.redirect("/");
}

module.exports = { logout };
