const express = require("express");
const app = express();
var bodyParser = require("body-parser");

require("dotenv").config();

app.use(bodyParser.json());

app.all("*", (req, res) => {
    res.status(404).send("Not Found.");
});

app.listen(process.env.PORT, () => {
    console.log(`Node.Js app listening at http://localhost:${process.env.PORT}`);
});
