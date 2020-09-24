const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  insertOne: function(values, cb) {
    orm.insertOne("burgers", values, res => {
      cb(res);
    });
  },