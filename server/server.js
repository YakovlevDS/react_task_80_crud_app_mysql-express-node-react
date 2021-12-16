const express = require("express");
const mysql = require('mysql');
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});



const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`);
});
