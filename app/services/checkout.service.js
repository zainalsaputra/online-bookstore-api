const CheckoutRepository = require("../repositories/checkout.repository");
const { v4: uuidv4 } = require("uuid");

class CheckoutService {
  static async processCheckout(customerId) {
    const cart = await CheckoutRepository.findLatestCart(customerId);
    if (!cart) throw new Error("Cart tidak ditemukan");

    const items = await CheckoutRepository.findCartItems(cart.id);
    if (!items.length) throw new Error("Cart kosong");

    const total = items.reduce((sum, item) => {
      return sum + item.books_product.price * item.quantity;
    }, 0);

    const invoiceId = uuidv4();
    const invoice = await CheckoutRepository.createInvoice({
      id: invoiceId,
      total_amount: total,
      status: "pending",
      customer_id: customerId,
      cart_id: cart.id,
    });

    await CheckoutRepository.createInvoiceItems(invoiceId, items);

    return {
      invoice_id: invoice.id,
      status: invoice.status,
      total_amount: invoice.total_amount,
      issued_at: invoice.issued_at,
    };
  }
}

module.exports = CheckoutService;
