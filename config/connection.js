//connect node to sql
//export the connection
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Grantjos12",
  database: "burgers_db",
});

//using connection variable to connect
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export for sql connection
module.exports = connection;
