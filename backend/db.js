const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
  host:`${process.env.HOST}`,
  user:`${process.env.USER}`,
  password: `${process.env.PASSWORD}`,
  database:`${process.env.DATABASE}`
}) 

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("I'm connected to Database !");
  }
});

module.exports = db;