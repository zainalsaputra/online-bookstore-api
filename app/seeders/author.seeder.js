module.exports = async (prisma) => {
  await prisma.author.createMany({
    data: [
      {
        id: "567a5672-d268-432f-9b50-0ac818a69581",
        name: "Robert C. Martin",
        bio: "Software engineer and author of Clean Code.",
        birthdate: new Date("1952-12-05"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69582",
        name: "Martin Fowler",
        bio: "Author and speaker on software development.",
        birthdate: new Date("1963-05-18"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69583",
        name: "Kent Beck",
        bio: "Pioneer of agile and extreme programming.",
        birthdate: new Date("1961-03-31"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69584",
        name: "Eric Evans",
        bio: "Father of Domain-Driven Design.",
        birthdate: new Date("1960-11-15"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69585",
        name: "Uncle Bob",
        bio: "Not actually an uncle. Definitely a Bob.",
        birthdate: new Date("1950-01-01"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69586",
        name: "Steve McConnell",
        bio: "Author of Code Complete.",
        birthdate: new Date("1962-07-01"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69587",
        name: "Donald Knuth",
        bio: "Invented literate programming and TeX for fun.",
        birthdate: new Date("1938-01-10"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69588",
        name: "Grady Booch",
        bio: "Co-creator of UML. Likes diagrams... a lot.",
        birthdate: new Date("1955-02-27"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69589",
        name: "Linus Torvalds",
        bio: "Gave us Linux and git. Legend.",
        birthdate: new Date("1969-12-28"),
      },
      {
        id: "567a5672-d268-432f-9b50-0ac818a69590",
        name: "Barbara Liskov",
        bio: "Her substitution principle made SOLID more solid.",
        birthdate: new Date("1939-11-07"),
      },
    ],
    skipDuplicates: true,
  });

  console.log("Authors berhasil ditambahkan");
};
