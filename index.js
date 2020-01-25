const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(
    "mongodb+srv://bibhuyash:Avichal.27@cluster0-i1ot5.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB is connected Successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

app.listen(5000);
