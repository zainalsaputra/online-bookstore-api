const prisma = require("../config/prisma.client.js");

class CheckoutRepository {
  static async findLatestCart(customerId) {
    return await prisma.cart.findFirst({
      where: { customer_id: customerId },
      orderBy: { created_at: "desc" },
    });
  }

  static async findCartItems(cartId) {
    return await prisma.cartItem.findMany({
      where: { cart_id: cartId },
      include: { books_product: true },
    });
  }

  static async createInvoice(data) {
    return await prisma.invoice.create({ data });
  }

  static async createInvoiceItems(invoiceId, items) {
    const data = items.map((item) => ({
      invoice_id: invoiceId,
      books_product_id: item.books_product_id,
      quantity: item.quantity,
      price: item.books_product.price,
    }));

    await prisma.invoiceItem.createMany({ data });
  }
}

module.exports = CheckoutRepository;
