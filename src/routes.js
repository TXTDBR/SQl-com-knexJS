const userApi = require('./api/users');
const projectApi = require('./api/projects');
const express = require('express');
const Router = express.Router();

//Routes users
Router.get('/users', userApi.getAll);
Router.post('/users', userApi.save);

Router.put('/users/:id', userApi.save);
Router.delete('/users/:id', userApi.remove);

//Routes Projects
Router.get('/projects', projectApi.get)
module.exports = Router;