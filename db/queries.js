const knex = require("./knex");

module.exports = {
  getAll() {
    return knex("doctors");
  },
  getOne(id) {
    return knex("doctors").where("id", id).first();
  },
  update(id, doctors) {
    return knex("doctors").where("id", id).update(doctors, "*");
  },
};
