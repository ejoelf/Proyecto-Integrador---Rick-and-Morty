const server = require("./app");
const { conn } = require("./DB_connection");
require("dotenv").config();

const { PORT } = process.env;

server.listen(PORT, async () => {
  await conn.sync({ force: false });
  console.log("Server raised in port: " + PORT);
});
