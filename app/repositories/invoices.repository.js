const prisma = require("../config/prisma.client.js");

const findAllInvoices = async () => {
  const getInvoices = await prisma.invoice.findMany({
    select: {
      id: true,
      cart_id: true,
      total_amount: true,
      status: true,
      issued_at: true,
    },
  });
  return getInvoices;
};

module.exports = {
  findAllInvoices,
};
