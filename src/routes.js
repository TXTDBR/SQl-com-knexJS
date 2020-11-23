const userApi = require('./api/users');
const express = require('express');
const Router = express.Router();

Router.get('/users', userApi.getAll);
Router.post('/users', userApi.save);

Router.put('/users/:id', userApi.save);
Router.delete('/users/:id', userApi.remove);

module.exports = Router;