const sql = require('mysql');
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

let connection = sql.createConnection({
  host    : process.env.HOST,
  user     : process.env.USERDB,
  password : process.env.PASSWORD,
  database: process.env.DATABASE
})

let query = `SELECT * from author`

connection.query(query, function (err, results) {
    if (err) throw err;
    console.log(results)
})

connection.end()