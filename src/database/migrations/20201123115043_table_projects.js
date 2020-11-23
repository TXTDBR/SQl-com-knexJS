
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary();
        table.text('title');
        table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};
