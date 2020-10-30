var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific iput for the ORM
//File for callback of all orm's
//------------------------
const burger = {
  selectAll: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.create("cats", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

//Exporting burgers.js (database function) for the controller file
module.exports = burger;
