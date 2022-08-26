const sql = require('mysql');
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });


let connection = sql.createConnection({
  host    : process.env.HOST,
  user     : process.env.USERDB,
  password : process.env.PASSWORD,
  database: process.env.DATABASE
})


connection.connect(function(err, res) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
    console.log('Connected to database.');
}





);

module.exports = connection;




