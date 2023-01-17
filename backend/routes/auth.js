const express = require('express');
const {register, login, logout} = require('../controllers/auth.js');

const router = express.Router();

router.post("/register", function(req, res){register(req, res)});
router.post("/login", function(req, res){login(req, res)});
router.post("/logout", function(req, res){logout(req, res)});

module.exports = router;
