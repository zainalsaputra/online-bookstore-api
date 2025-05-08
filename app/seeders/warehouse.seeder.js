module.exports = async (prisma) => {
  await prisma.warehouse.createMany({
    data: [
      {
        id: "567a5672-d268-432f-9b50-0ac818w69581",
        name: "Gudang Jakarta",
        location: "Jakarta",
        capacity: 1000,
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818w69582",
        name: "Gudang Surabaya",
        location: "Surabaya",
        capacity: 800,
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818w69583",
        name: "Gudang Bandung",
        location: "Bandung",
        capacity: 600,
      },
    ],
    skipDuplicates: true,
  }),
    console.log("Warehouse berhasil ditambahkan");
};
