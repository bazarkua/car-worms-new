const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "cs340_bazarkua",
  host: "classmysql.engr.oregonstate.edu",
  password: "2533",
  database: "cs340_bazarkua",
});

app.post("/createCustomer", (req, res) => {
  const customer_id = req.body.id;
  const customer_fname = req.body.fname;
  const customer_lname = req.body.lname;
  const customer_email = req.body.email;
  

  db.query(
    "INSERT INTO customers (customer_id, customer_fname, customer_lname, customer_email) VALUES (?,?,?,?,?)",
    [customer_id, customer_fname, customer_lname, customer_email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});