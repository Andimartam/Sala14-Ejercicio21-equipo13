const { faker } = require("@faker-js/faker");

const { Comment } = require("../models");

faker.locale = "en";

module.exports = async () => {
  const comment = [];

  for (let i = 0; i < 10; i++) {
    comment.push({
      content: faker.lorem.sentence(20),
      userId: faker.datatype.number({ min: 1, max: 5 }),
      articleId: faker.datatype.number({ min: 1, max: 5 }),
    });
  }

  await Comment.bulkCreate(comment);
  console.log("[Database] Se corrió el seeder de Articles.");
};
