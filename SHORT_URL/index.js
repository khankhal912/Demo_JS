const express = require("express");
const urlRoute = require("./routers/url");
const { connectionDB } = require("./config/db");
const app = express();
const port = 8001;

connectionDB();
app.use(express.json());
app.use("/url", urlRoute);

app.listen(port, () => console.log(`Server Started at Port: ${port}`));
