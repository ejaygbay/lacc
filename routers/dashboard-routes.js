const routers = require('express').Router();
const dashboardControllers = require('../controllers/dashboard-controllers');

routers.get('/', dashboardControllers);

module.exports = routers;