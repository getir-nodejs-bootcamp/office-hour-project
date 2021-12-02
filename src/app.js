const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/post");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then((e) => {
    console.log("Mongo connection established.");
});

app.use("/api", router);

app.all("*", (req, res) => {
    res.status(404).send("Not Found.");
});

app.listen(process.env.PORT, () => {
    console.log(`Node.Js app listening at http://localhost:${process.env.PORT}`);
});
