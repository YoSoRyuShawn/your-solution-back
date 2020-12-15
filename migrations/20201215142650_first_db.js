exports.up = function (knex) {
  return knex.schema.createTable("doctors", (table) => {
    table.increments();
    table.text("stripe_id");
    table.text("first_name");
    table.text("last_name");
    table.text("specialty");
    table.text("availability");
    table.text("image");
    table.text("zoom");
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("doctors");
};
