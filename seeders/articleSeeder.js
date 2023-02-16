const { faker } = require("@faker-js/faker");

const { Article } = require("../models");

faker.locale = "en";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 5; i++) {
    articles.push({
      title: faker.lorem.sentence(10),
      content: faker.lorem.paragraphs(),
      image: faker.image.abstract(1000, 1000, true),
      userId: faker.datatype.number({ min: 1, max: 5 }),
      //create_date: faker.date(),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
