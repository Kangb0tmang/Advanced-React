// This file connects to remote Prisma DB & gives us ability to query it with js
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;