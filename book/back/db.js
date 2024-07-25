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

const createTypesTable = (_) => {
  const sql = `
  CREATE TABLE IF NOT EXISTS types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100), 
  description TEXT,
  icon VARCHAR(100)
  )
  `;

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("types table created");
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

const dropTypesTable = (_) => {
  const sql = "DROP TABLE IF EXISTS types";

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("types table dropped successfuly");
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

const seedTypesTable = _ => {
  const sql = `
      INSERT INTO types
      (title, description, icon)
      VALUES
      ('Upiniai bebrai', 'Lietuvoje bebrai nuo seno gyveno Nemuno baseine. Jų liekanų randama piliakalniuose, durpynuose. Bebrai šalyje buvo intensyviai medžiojami dėl mėsos (ypač uodegos), kailio ir sruoglių. 1555 m. švedų kronikininko Olaus Magnuso „Šiaurės tautų istorijoje“ rašoma, kad Lietuva buvusi pagrindinė bebrų kailių tiekėja Europoje. 1529 m. bebrų medžioklė buvo nustatyta Pirmajame Lietuvos statute: bebravietėse uždrausta lankytis pašaliniams', 'fa-gem'),
      ('Barsukas purvinis', 'Specifinis bruožas – baltai juodai dryžuotas snukis. Dryžiai eidami nuo snukio link kūno susilieja į pilką (širmą) atspalvį. Kūno dydis ir masė svyruoja priklausomai nuo gyvenamos teritorijos (masė – 8-20 kg; kūno ilgis – 56-90 cm).', 'fa-paper-plane'),
      ('Briedis miskinis', 'Nugara, šonai ir krūtinė vasarą tamsiai rudos spalvos, papilvė, apatinė ir vidinė kojų dalys baltos. Žiemą kailis truputį šviesesnis, pilkšvesnis. Snukis kuprotas. Pasmakrėje kabo 20–30 cm ilgio, apaugusi ilgais plaukais odos raukšlė – „barzda“, kuri briedžiui senstant mažėja.', 'fa-rocket')
  `;
  connection.query(sql, function (err) {
      if (err) throw err;
      console.log('Types table seeded');
  });
}

dropUsersTable();
dropOptionsTable();
dropTypesTable();
createUsersTable();
createOptionsTable();
createTypesTable();
seedUsersTable();
seedOptionsTable();
seedTypesTable();

connection.end(function (err) {
  if (err) throw err;
  console.log("connection closed");
});
