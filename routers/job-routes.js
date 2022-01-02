const routers = require('express').Router();
const jobControllers = require('../controllers/job-controllers');

routers.get('/jobs/personal', jobControllers.personalJobView);

routers.get('/jobs/create', jobControllers.createJobView);

routers.get('/jobs', jobControllers.allJobs);

module.exports = routers;