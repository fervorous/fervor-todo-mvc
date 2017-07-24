exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('goal', function(table) {
      table.increments();
      table.string('name').notNull().defaultTo('');
      table.boolean('completed').notNull().defaultTo(false);
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('goal'),
  ]);
};
