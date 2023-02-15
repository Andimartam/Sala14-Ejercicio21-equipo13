const express = require('express');
const router = express.Router();

async function welcome (req, res) {
    const loggedUser = req.user;
    res.render('welcome', { loggedUser });
}

async function logout (req, res) {
    await req.session.destroy();
    console.log("se ha cerrado la sesión");
    console.log(req.session);
    res.redirect("/");
}

module.exports = { welcome, logout };