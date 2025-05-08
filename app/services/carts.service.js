const { findCart, createdCart } = require("../repositories/carts.repository");

class BooksService {
  static async getCarts() {
    try {
      const carts = await findCart();
      if (!carts) {
        throw new Error("No carts found");
      }
      return {
        id: carts.id,
        customer_id: carts.customer_id,
        created_at: carts.created_at,
        items: carts.cart_items.map((item) => ({
          id: item.id,
          books_product_id: item.books_product_id,
          quantity: item.quantity,
          created_at: item.created_at,
          product: {
            book: {
              title: item.books_product.book.title,
            },
            format: item.books_product.format,
            price: item.books_product.price,
          },
        })),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async addedCart(body) {
    try {
      const cart = await createdCart(body);
      if (!cart) {
        throw new Error("Failed to add cart");
      }
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BooksService;
