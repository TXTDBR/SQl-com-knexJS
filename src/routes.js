const userApi = require('./api/users');
const express = require('express');
const Router = express.Router();

Router.get('/users', userApi.getAll);

module.exports = Router;