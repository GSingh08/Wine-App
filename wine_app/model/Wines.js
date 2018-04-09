// this line gives you the ability to use info from connection file in database.
const db = require("../database/connection");

//Can require this in server.js rather than requiring all of the queries. Makes for better code.
const Wine = {};

Wine.getAll = () => {
  return db.any("SELECT * FROM wine");
};

Wine.findById = id => {
  return db.one("SELECT * FROM wine where id = $1", [id]);
};

//This exports just Wine rather than exporting all other functions.
module.exports = Wine;
