const {
  findAllBooks,
  findBooksDetailById,
} = require("../repositories/books.repository");

class BooksService {
  static async getAllBooks() {
    try {
      const books = await findAllBooks();
      if (!books) {
        throw new Error("No books found");
      }
      if (books.length === 0) {
        throw new Error("Books is empty");
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
        throw new Error("Book not found");
      }
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllCarts() {
    try {
      const carts = await findAllCarts();
      if (!carts) {
        throw new Error("No carts found");
      }
      if (carts.length === 0) {
        throw new Error("Carts is empty");
      }
      return carts;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BooksService;
