const { faker } = require("@faker-js/faker");

const { Role } = require("../models");

faker.locale = "en";

module.exports = async () => {
  const roles = [];

  roles.push(
    {
      name: "reader",
      code: "100",
    },
    {
      name: "writer",
      code: "200",
    },
    {
      name: "editor",
      code: "300",
    },
    {
      name: "admin",
      code: "400",
    },
  );

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
