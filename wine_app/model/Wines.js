// this line gives you the ability to use info from connection file in database.
const db = require("../database/connection");

//Can require this in server.js rather than requiring all of the queries. Makes for better code.
const Wine = {};

Wine.getAll = () => {
  return db.any("SELECT * FROM wine");
};

//This exports just Wine rather than exporting all other functions.
module.exports = Wine;
