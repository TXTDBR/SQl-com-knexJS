
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.text('username').notNullable().unique();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
