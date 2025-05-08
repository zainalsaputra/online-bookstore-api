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
      return {
        id: book.id,
        title: book.title,
        isbn: book.isbn,
        publication_year: book.publication_year,
        genre: book.genre,
        author: {
          id: book.author.id,
          name: book.author.name,
        },
        products: book.books_products.map((product) => ({
          id: product.id,
          format: product.format,
          price: product.price,
          stock: product.stock,
          warehouse: {
            id: product.warehouse.id,
            name: product.warehouse.name,
          },
        })),
      };
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
