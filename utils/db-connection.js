const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('testDB', 'root', 'Rishu@123', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;








// const mysql = require("mysql2");


// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Rishu@123",
//   database: "testDB",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Connection has been created");

//   const creationQuery = `create table if not exists students (
//   id int primary key auto_increment,
//   name varchar(255) not null,
//   email varchar(255) not null unique
// )`;

// connection.execute(creationQuery, (err) => {
//     if (err) {
//       console.error(err);
//       connection.end();
//       return;
//     }
//     console.log("Table has been created");
//   });

// });

// module.exports = connection;