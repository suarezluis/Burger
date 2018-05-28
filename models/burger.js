// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(cols, values, cb) {
    orm.insert("burgers", cols, values, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition,cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

//burger.insert(["burger_name","devoured"],["pepe", false], console.log());

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;