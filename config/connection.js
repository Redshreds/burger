const mysql = require("mysql");

let connection;

if (process.env.PUBLIC_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.PUBLIC_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db",
  });
}

// Make the connection to MySQL
connection.connect(function (err) {
  if (err) {
    console.error("ERROR: MySQL connection error -- " + err.stack + "\n\n");
    return;
  }
  console.log(
    "Connected to MySQL database as id " + connection.threadId + "\n\n"
  );
});

// Export connection for ORM use
module.exports = connection;
