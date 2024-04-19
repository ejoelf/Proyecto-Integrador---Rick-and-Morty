const server = require("./server/app");
const { conn } = require("./database/DB_connection");
require("dotenv").config();

const { PORT } = process.env;

server.listen(PORT, async () => {
  await conn.sync({ force: false });
  console.log("Server raised in port: " + PORT);
});
