const knex = require("./knex");

module.exports = {

  // for doctors
  getAll() {
    return knex("doctors");
  },
  getOne(id) {
    return knex("doctors").where("id", id).first();
  },
  update(id, doctors) {
    return knex("doctors").where("id", id).update(doctors, "*");
  },

  // for users
  getAllUsers() {
    return knex("users");
  },
  getOneUser(id) {
    return knex("users").where("id", id).first();
  },
  updateUser(id, users) {
    return knex("users").where("id", id).update(users, "*");
  },
  createUser(user) {
    return knex('users').insert(user, '*')
  }
};
