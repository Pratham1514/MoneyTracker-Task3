const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/MoneyList");
const db = mongoose.connection;
db.on("error", () => console.log("Error in connecting to the  database"));
db.once("open", () => console.log("Connected to the database"));

app.post("/add", (req, res) => {
  var category_select = req.body.category_select;
  var amount_input = req.body.amount_input;
  var info = req.body.info;
  var date_input = req.body.date_input;

  var data = {
    Category: category_select,
    Amount: amount_input,
    Info: info,
    Date: date_input,
  };

  const lists = db.collection("lists");

  lists.insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record inserted successfully");
  });
});

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("index.html");
});

const port = 3000;

app.listen(port, console.log(`connected to port ${port}`));
