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
  
    await prisma.book.createMany({
      data: [
        {
          id: "567a5672-d268-432f-9b50-0ac818b69581",
          title: "Clean Code",
          isbn: "9780132350884",
          publication_year: 2008,
          genre: "Programming",
          author_id: "567a5672-d268-432f-9b50-0ac818a69581",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69582",
          title: "Refactoring",
          isbn: "9780201485677",
          publication_year: 1999,
          genre: "Software Engineering",
          author_id: "567a5672-d268-432f-9b50-0ac818a69582",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69583",
          title: "Test-Driven Development",
          isbn: "9780321146533",
          publication_year: 2002,
          genre: "Agile",
          author_id: "567a5672-d268-432f-9b50-0ac818a69583",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69584",
          title: "Domain-Driven Design",
          isbn: "9780321125217",
          publication_year: 2003,
          genre: "Architecture",
          author_id: "567a5672-d268-432f-9b50-0ac818a69584",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69585",
          title: "The Clean Coder",
          isbn: "9780137081073",
          publication_year: 2011,
          genre: "Career",
          author_id: "567a5672-d268-432f-9b50-0ac818a69585",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69586",
          title: "Code Complete",
          isbn: "9780735619678",
          publication_year: 2004,
          genre: "Programming",
          author_id: "567a5672-d268-432f-9b50-0ac818a69586",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69587",
          title: "The Art of Computer Programming",
          isbn: "9780201896831",
          publication_year: 1968,
          genre: "Computer Science",
          author_id: "567a5672-d268-432f-9b50-0ac818a69587",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69588",
          title: "Object-Oriented Analysis and Design",
          isbn: "9780201895513",
          publication_year: 1994,
          genre: "Software Design",
          author_id: "567a5672-d268-432f-9b50-0ac818a69588",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69589",
          title: "Just for Fun",
          isbn: "9780066620729",
          publication_year: 2001,
          genre: "Biography",
          author_id: "567a5672-d268-432f-9b50-0ac818a69589",
        },
        {
          id: "567a5672-d268-432f-9b50-0ac818b69590",
          title: "Program Development in Java",
          isbn: "9780201657685",
          publication_year: 2000,
          genre: "Object-Oriented Programming",
          author_id: "567a5672-d268-432f-9b50-0ac818a69590",
        },
      ],
      skipDuplicates: true,
    });
  
    console.log("Books & Authors berhasil ditambahkan");
  };
  