import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mynameisendwell",
  database: "chronoscribe",
});

export default db;
