// const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");
const app = express();
const port = 8000

app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
  return res.send(
    "Hello from About Page " +
      "Hey " +
      req.query.name +
      "you are" +
      req.query.age
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// function myHandler(req, res) {
//     // console.log("New Req Rec.");
//   // console.log(req);
//   // console.log("Hello from server");
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home Page");
//         break;
//       case "/about":
//         const username = myUrl.query.myname
//         res.end(`Hi ${username}`);
//         break;
//       default:
//         res.end("hello req rec");
//         break;
//     }
//   });
// }

// const server = http.createServer(app);

// server.listen(8000, () => {
//   console.log("Server listening on port 8000");
// });
