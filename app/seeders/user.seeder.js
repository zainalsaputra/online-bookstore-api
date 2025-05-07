module.exports = async (prisma, hashedPassword) => {
  await prisma.customer.createMany({
    data: [
      {
        name: "User One",
        email: "user1@example.com",
        password: hashedPassword,
        address: "Jl. Merdeka 1",
        phone: "0811111111",
      },
      {
        name: "User Two",
        email: "user2@example.com",
        password: hashedPassword,
        address: "Jl. Merdeka 2",
        phone: "0822222222",
      },
      {
        name: "User Three",
        email: "user3@example.com",
        password: hashedPassword,
        address: "Jl. Merdeka 3",
        phone: "0833333333",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Customer berhasil ditambahkan.");
};
