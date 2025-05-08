module.exports = async (prisma) => {
  await prisma.invoice.createMany({
    data: [
      {
        id: "567a5672-d268-432f-9b50-0ab818i69581",
        total_amount: 600000,
        status: "paid",
        customer_id: "567a5672-d268-432f-9b50-0ac818c69581",
        cart_id: "567c5672-d268-432f-9b50-0ac818c69581",
      },
      {
        id: "567a5672-d268-432f-9b50-0ab818i69582",
        total_amount: 900000,
        status: "unpaid",
        customer_id: "567a5672-d268-432f-9b50-0ac818c69582",
        cart_id: "567c5672-d268-432f-9b50-0ac818c69582",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Invoice berhasil ditambahkan");
};
