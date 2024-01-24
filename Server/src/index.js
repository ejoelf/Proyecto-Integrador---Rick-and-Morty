const http = require("http");
const data = require("./utils/data.js"); //array de obj
const PORT = 3001;

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.startsWith("/rickandmorty/character")) {
      const idUrl = parseInt(req.url.split("/").pop());
      const idData = data.find((char) => char.id === idUrl);
      console.log(idData);
      if (idData) {
        return res
          .writeHead(200, { "content-Type": "application/json" })
          .end(JSON.stringify(idData));
      } else {
        return res
          .writeHead(404, { "Content-Type": "text/plain" })
          .end("ID Not Found");
      }
    } else {
      return res
        .writeHead(404, { "Content-Type": "text/plain" })
        .end(" Route Not found");
    }
  })
  .listen(PORT, "127.0.0.1", () =>
    console.log(`Server Listening on http://localhost:${PORT}`)
  );
