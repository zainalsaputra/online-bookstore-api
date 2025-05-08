const express = require("express");
const router = express.Router();

const CartController = require("../controllers/carts.controller.js");

router.get("/", CartController.getAllCarts);

module.exports = router;
