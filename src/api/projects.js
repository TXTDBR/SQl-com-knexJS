const knex = require('../database/connection');

const get = async (req, resp, next) => {

    const query = knex('projects');

    if (req.query.userId) {
        query.where({ user_id: req.query.userId })
            .join('users', 'users.id', '=', 'projects.user_id')
            .select('projects.*', 'users.username')
            .then(projects => resp.json(projects))
            .catch(e => next(e))
    }

    query
    .then(projects => resp.json(projects))
    .catch(e => next(e))

}



module.exports = {
    get
}