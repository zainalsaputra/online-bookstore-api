module.exports = async (prisma, hashedPassword) => {
  await prisma.customer.createMany({
    data: [
      {
        id: "567a5672-d268-432f-9b50-0ac818c69581",
        name: "User One",
        email: "user1@example.com",
        password: hashedPassword,
        address: "Jl. Merdeka 1",
        phone: "0811111111",
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818c69582",
        name: "User Two",
        email: "user2@example.com",
        password: hashedPassword,
        address: "Jl. Merdeka 2",
        phone: "0822222222",
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818c69583",
        name: "User Three",
        email: "user3@example.com",
        password: hashedPassword,
        address: "Jl. Merdeka 3",
        phone: "0833333333",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Customer berhasil ditambahkan");
};
