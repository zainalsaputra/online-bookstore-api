const express = require("express");
const router = express.Router();

const CheckoutController = require("../controllers/checkout.controller.js");

router.post("/", CheckoutController.checkout);

module.exports = router;
