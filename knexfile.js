const path = require('path');

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: '94198380'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
};
