const { where } = require('../database/connection');
const knex = require('../database/connection');

const getAll = (req, resp) => {
    knex('users')
        .then(users => resp.json(users))
        .catch(e => next(e))
}

const save = (req, resp, next) => {
    const user = req.body;

    if(req.params.id) user.id = req.params.id;

    try {
        if(!user.username) throw 'Username não informado';
    } catch(msg) {
        return resp.status(400).send(msg);
    }

    if(!user.id) {
        knex('users')
            .insert(user)
            .then(_ => resp.status(201).json())
            .catch(e => next(e))
    } else {
        knex('users')
            .update({ username: user.username, update_at: new Date()})
            .where({ id: user.id })
            .then(_ => resp.status(204).json())
            .catch(e => next(e))
    }

}

const remove = (req, resp, next) => {
    knex('users')
        .where({ id: req.params.id })
        .del()
        .then(_ => resp.status(204).json())
        .catch(e => next(e))
}

module.exports = {
    getAll,
    save,
    remove
}