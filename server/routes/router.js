const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')


route.get('/', services.login);
route.get('/add-user', services.add_user);
route.get('/welcome', services.welcome);
route.post('/add-user', controller.create);
route.post('/login', controller.find);

route.get('/index', services.index);
route.get('/addTask', services.addTask);
route.post('/addTask', controller.addTask);
// route.get('/updateTask', services.updateTask);

route.get('/api/users', controller.show);
route.delete('/api/users/:id', controller.delete);
// route.post('/updateTask/:id', services.updateTask);

module.exports = route;