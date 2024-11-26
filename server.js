const http = require("http");
const fs = require("fs");
const port = 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url === "/") {
    const home = fs.createReadStream("./index.html");
    home.pipe(res);
  } else if (req.url === "/about") {
    const about = fs.createReadStream("./about.html");
    about.pipe(res);
  } else if (req.url === "/contact") {
    const contact = fs.createReadStream("./contact.html");
    contact.pipe(res);
  } else {
    const errorPage = fs.createReadStream("./404.html");
    errorPage.pipe(res);
  }
});

server.listen(port, () => {
  console.log("Running in http://localhost:" + port);
});
