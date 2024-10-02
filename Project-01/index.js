const express = require("express");
const { connectDB } = require("./config/connection");
const { logReqRes } = require("./middlewares");
const userRouter = require("./routers/user");
const app = express();
const port = 3030;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Router
app.use("user", userRouter);

// app.use((req, res, next) => {
//   console.log("Hello from middleware 2", req.myUserName);
//   // return res.end('Hello from middleware 2!! Hey');
//   // db query
//   //credit card info
//   req.creditCardNumber = "123456";
//   next();
// });

app.listen(port, () => console.log("Server Started at port " + port));
