require("dotenv").config();
const cors = require("cors");

const express = require("express");
require("./db-config");
const { RouterV1 } = require("./router");
const app = express();

app.use(cors("*"));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request :: ${req.method} :: ${req.path}`);
    next();
});

app.use("/app/v1", RouterV1);

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});