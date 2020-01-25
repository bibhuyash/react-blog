const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const {
  User
} = require("./model/user");

const app = express();
mongoose
  .connect(
    process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("DB is connected Successfully"))
  .catch(err => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userdata) => {
    if (err) {
      return res.json({
        sucess: false,
        err
      });
    } else {
      return res.status(200).json({
        sucess: true
      });
    }
  });
});

app.listen(5000);