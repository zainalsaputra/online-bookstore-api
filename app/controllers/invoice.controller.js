const createError = require("http-errors");

const invoiceService = require("../services/invoice.service.js");

class InvoiceController {
  static async getAllInvoices(req, res, next) {
    try {
      const invoices = await invoiceService.getAllInvoices();
      if (!invoices) {
        return next(createError(404, "No invoices found"));
      }
      res.status(200).json(invoices);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InvoiceController;
