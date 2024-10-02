const fs = require("fs");

function logReqRes(filename) {
  console.log("Hello from middleware 1");
  fs.appendFile(
    "log.txt",
    `\nDateTime=${Date.now()}, IP=${req.ip}, Method=${req.method}, Path=${
      req.path
    }`,
    (error, data) => {
      next();
    }
  );
  // return res.json({ message: "Hello from middleware 1" });
  // req.myUserName = "Khnakhal Dhaval";
}

module.exports = { logReqRes };
