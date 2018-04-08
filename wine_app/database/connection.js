const pgp = require("pg-promise")({});

//Make sure when you write this line to see if the db name is correct.
const connectionURL = "postgres://localhost:5432/wine_db";
// const connection = pgp(connectionURL);
const db = pgp(connectionURL);

module.exports = db;
