const routers = require('express').Router();
const categoryControllers = require('../controllers/category-controllers');

routers.get('/category', categoryControllers.categoryView);

routers.post('/category', categoryControllers.createCategory);

module.exports = routers;