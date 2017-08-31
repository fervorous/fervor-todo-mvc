// db is an instance of knex
exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.createTable('goal', function(table) {
      table.increments();
      table.string('name').notNull().defaultTo('');
      table.boolean('completed').notNull().defaultTo(false);
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.dropTable('goal'),
  ]);
};
