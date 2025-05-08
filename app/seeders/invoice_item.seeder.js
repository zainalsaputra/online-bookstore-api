module.exports = async (prisma) => {
  await prisma.invoiceItem.createMany({
    data: [
      {
        id: "567i5672-d268-432f-9b50-0ab818i69581",
        invoice_id: "567a5672-d268-432f-9b50-0ab818i69581",
        books_product_id: "567a5672-d268-432f-9b50-0ab818p69582",
        quantity: 2,
        price: 300000,
      },
      {
        id: "567i5672-d268-432f-9b50-0ab818i69582",
        invoice_id: "567a5672-d268-432f-9b50-0ab818i69582",
        books_product_id: "567a5672-d268-432f-9b50-0ab818p69584",
        quantity: 3,
        price: 300000,
      },
    ],
    skipDuplicates: true,
  });

  console.log("InvoiceItem berhasil ditambahkan");
};
