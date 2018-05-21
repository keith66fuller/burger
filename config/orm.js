// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  insertOne: function(burger, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    todo.complete = todo.complete || 0;
    connection.query(s, [
      burger.burger_name, burger.devoured
    ], function(err, result) {

      callback(result);

    });
  },

  updateOne: function(burger, callback) {
    var s = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

    connection.query(s, [
        burger.burger_name, burger.devoured
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;
