const express = require('express');
const router = express.Router();

async function welcome (req, res) {
    res.render('welcome');
}

module.exports = { welcome };