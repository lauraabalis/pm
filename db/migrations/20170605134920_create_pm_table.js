
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pm', function(table) {
    table.increments();
    table.string('task').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pm');
};
