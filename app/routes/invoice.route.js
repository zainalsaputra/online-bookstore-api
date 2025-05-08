const express = require("express");
const router = express.Router();

const InvoiceController = require("../controllers/invoice.controller.js");

router.get("/", InvoiceController.getAllInvoices);

module.exports = router;
