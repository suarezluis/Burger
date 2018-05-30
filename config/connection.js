// Set up MySQL connection.
var mysql = require("mysql");
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {var connection = mysql.createConnection({
  host: "zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xl49j9mdhd7w6gmj",
  password: "sqjj81vtsyto5ppg",
  database: "n1dwx0v0u5qx2hlg"
});
}
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
