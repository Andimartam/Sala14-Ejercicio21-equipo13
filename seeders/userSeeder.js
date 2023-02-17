const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "en";

module.exports = async () => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      password: "1234",
      mail: faker.internet.email(),
      roleId: faker.datatype.number({ min: 1, max: 4 }),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
