const express = require("express");
const router = express.Router();

const CartController = require("../controllers/carts.controller.js");

router.get("/", CartController.getCarts);

router.post("/items", CartController.addedCart);

module.exports = router;
