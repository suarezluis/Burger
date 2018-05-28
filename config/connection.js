// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "v9mp1ygwa1r85r10",
  password: "d0ezob1cnahzs276",
  database: "u0ymwbfwrlni08bi"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
