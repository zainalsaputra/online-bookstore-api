module.exports = async (prisma) => {
    await prisma.cart.createMany({
      data: [
        {
          id: "567c5672-d268-432f-9b50-0ac818c69581",
          customer_id: "567a5672-d268-432f-9b50-0ac818c69581",
        },
        {
          id: "567c5672-d268-432f-9b50-0ac818c69582",
          customer_id: "567a5672-d268-432f-9b50-0ac818c69582",
        },
        {
          id: "567c5672-d268-432f-9b50-0ac818c69583",
          customer_id: "567a5672-d268-432f-9b50-0ac818c69581",
        },
        {
          id: "567c5672-d268-432f-9b50-0ac818c69584",
          customer_id: "567a5672-d268-432f-9b50-0ac818c69582",
        },
        {
          id: "567c5672-d268-432f-9b50-0ac818c69585",
          customer_id: "567a5672-d268-432f-9b50-0ac818c69582",
        },
      ],
      skipDuplicates: true,
    });
  
    console.log("Cart berhasil ditambahkan");
  };
  