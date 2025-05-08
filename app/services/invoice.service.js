const { findAllInvoices } = require("../repositories/invoices.repository.js");

class InvoiceService {
  static async getAllInvoices() {
    try {
      const invoices = await findAllInvoices();
      if (!invoices) {
        throw new Error("No invoices found");
      }
      if (invoices.length === 0) {
        throw new Error("Invoices is empty");
      }
      return invoices;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = InvoiceService;
