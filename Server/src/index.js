const http = require("http");
const data = require("./utils/data.js");
const getCharById = require("./controllers/getCharById.js");
const PORT = 3001;

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.startsWith("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      getCharById(res, id);
    }
  })
  .listen(PORT, "127.0.0.1", () =>
    console.log(`Server Listening on http://localhost:${PORT}`)
  );
