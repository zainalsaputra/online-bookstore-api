const express = require("express");
const router = express.Router();

const BooksControllers = require("../controllers/books.controller.js");

router.get("/", BooksControllers.getAllBooks);

router.get("/:id", BooksControllers.getBooksDetail);



module.exports = router;
