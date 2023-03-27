const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)

  if (req.url === "/") {
    res.end("welcome to my node page");
  }
  // res.write('welcome to my page')
  // res.end()
  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(`
    <h1>Opps!</h1>
    <p>I am sorry, but I don't know how to do that.</p>
    <a href="/">back home</a>
    `);
});
server.listen(5000);
