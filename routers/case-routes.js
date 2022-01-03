const routers = require('express').Router();
const caseControllers = require('../controllers/case-controllers');

routers.get('/cases', caseControllers.cases);

routers.get('/cases/report', caseControllers.reportCaseView);

// routers.get('/cases', caseControllers.allJobs);

module.exports = routers;