const { 
    findAllBooks,
    findBooksDetailById
 } = require('../repository/books.repository');

class BooksService {
    static async getAllBooks() {
        try {
            const books = await findAllBooks();
            if (!books) {
                throw new Error('No books found');
            }
            if (books.length === 0) {
                throw new Error('Books is empty');
            }
            return books;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getBooksDetail(id) {
        try {
            const book = await findBooksDetailById(id);
            if (!book) {
                throw new Error('Book not found');
            }
            return book;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = BooksService;