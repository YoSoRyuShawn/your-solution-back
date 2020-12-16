
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
      table.increments();
      table.text("email");
      table.text("zoom");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
