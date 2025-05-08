module.exports = async (prisma) => {
    await prisma.cartItem.createMany({
      data: [
        {
          id: "567c5672-d268-432f-9b50-0ab818i69581",
          cart_id: "567c5672-d268-432f-9b50-0ac818c69581",
          books_product_id: "567a5672-d268-432f-9b50-0ab818p69581",
          quantity: 2,
        },
        {
          id: "567c5672-d268-432f-9b50-0ab818i69582",
          cart_id: "567c5672-d268-432f-9b50-0ac818c69581",
          books_product_id: "567a5672-d268-432f-9b50-0ab818p69582",
          quantity: 1,
        },
        {
          id: "567c5672-d268-432f-9b50-0ab818i69583",
          cart_id: "567c5672-d268-432f-9b50-0ac818c69582",
          books_product_id: "567a5672-d268-432f-9b50-0ab818p69581",
          quantity: 3,
        },
        {
          id: "567c5672-d268-432f-9b50-0ab818i69584",
          cart_id: "567c5672-d268-432f-9b50-0ac818c69583",
          books_product_id: "567a5672-d268-432f-9b50-0ab818p69581",
          quantity: 3,
        },
        {
          id: "567c5672-d268-432f-9b50-0ab818i69585",
          cart_id: "567c5672-d268-432f-9b50-0ac818c69585",
          books_product_id: "567a5672-d268-432f-9b50-0ab818p69582",
          quantity: 3,
        },
        {
          id: "567c5672-d268-432f-9b50-0ab818i69586",
          cart_id: "567c5672-d268-432f-9b50-0ac818c69584",
          books_product_id: "567a5672-d268-432f-9b50-0ab818p69582",
          quantity: 3,
        },
      ],
      skipDuplicates: true,
    });
  
    console.log("CartItem berhasil ditambahkan");
  };
  