const knex = require('../database/connection');

const getAll = (req, resp) => {
    knex('users').then(users => resp.json(users))
}

module.exports = {
    getAll
}