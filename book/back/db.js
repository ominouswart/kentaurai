const mysql = require("mysql");
const md5 = require("md5");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "book",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to database");
});

// Users table

const createUsersTable = (_) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    role SET('admin', 'user', 'editor') NOT NULL DEFAULT 'user',
    password CHAR(32) NOT NULL,
    session CHAR(32) NULL
        )`;

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("users table created successfuly");
  });
};

const createOptionsTable = (_) => {
  const sql = `
  CREATE TABLE IF NOT EXISTS options (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  value TEXT NOT NULL
  )
  `;

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("options table created");
  });
};



const dropUsersTable = (_) => {
  const sql = "DROP TABLE IF EXISTS users";

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("users table dropped successfuly");
  });
};

const dropOptionsTable = (_) => {
  const sql = "DROP TABLE IF EXISTS users";

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("options table dropped successfuly");
  });
};

const seedUsersTable = (_) => {
  const sql = `
    INSERT INTO users
    (name, email, role, password)
    VALUES
    ('Briedis', 'briedis@gmail.com', 'admin', '${md5("123")}'),
    ('Bebras', 'bebras@gmail.com', 'user', '${md5("123")}'),
    ('Barsukas', 'barsukas@gmail.com', 'editor', '${md5("123")}')
    `;

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("users table dropped successfuly");
  });
};

const seedOptionsTable = (_) => {
  const contacts = {
    phone: "123456789",
    email: "jonas.raudonoji@knyga.lt",
    address: "Knygos g. 1, Knygynas",
    title: "Kontaktai",
    about: "Apsaugokite zveris nuo vandens ir ugnies",
  };

  const sql = `
      INSERT INTO options
      (name, value)
      VALUES
      ('contacts', '${JSON.stringify(contacts)}')
 
    `;

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("options table seeded successfuly");
  });
};

dropUsersTable();
dropOptionsTable();
createUsersTable();
createOptionsTable();
seedUsersTable();
seedOptionsTable();

connection.end(function (err) {
  if (err) throw err;
  console.log("connection closed");
});
