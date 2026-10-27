const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishu@123",
  database: "testDB",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connection has been created");

  const creationQuery = `create table if not exists students (
  id int primary key auto_increment,
  name varchar(255) not null,
  email varchar(255) not null unique
)`;

connection.execute(creationQuery, (err) => {
    if (err) {
      console.error(err);
      connection.end();
      return;
    }
    console.log("Table has been created");
  });

});

module.exports = connection;