const express = require("express");
const router = express.Router();

const CartController = require("../controllers/carts.controller.js");

router.get("/", CartController.getAllCarts);

router.post("/items", CartController.addedCart);

module.exports = router;
