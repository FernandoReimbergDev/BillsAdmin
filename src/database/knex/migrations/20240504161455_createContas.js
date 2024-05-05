exports.up = function(knex) {
    return knex.schema.createTable('contas', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description');
      table.decimal('value', 10, 2).notNullable();
      table.date('due_date').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contas');
  };
  