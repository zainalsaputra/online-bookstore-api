const express = require("express");
const router = express.Router();

const AuthControllers = require("../controllers/auth.controller.js");

router.post("/register", AuthControllers.register);

router.post("/login", AuthControllers.login);

module.exports = router;
