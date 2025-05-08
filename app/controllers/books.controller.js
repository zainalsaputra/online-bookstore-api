const createError = require('http-errors');
const BooksService = require('../services/books.service.js');

class BooksController {
    static async getAllBooks(req, res, next) {
        try {
            const books = await BooksService.getAllBooks();
            if (!books) {
                return next(createError(404, 'No books found'));
            }
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    }

    static async getBooksDetail(req, res, next) {
        try {
            const { id } = req.params;
            const book = await BooksService.getBooksDetail(id);
            if (!book) {
                return next(createError(404, 'Book not found'));
            }
            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BooksController;