const personalJobView = (req, res) => {
    res.render('jobs/personal-jobs', { page: 'personal-jobs' });
}

const createJobView = (req, res) => {
    res.render('jobs/create-job', { page: 'create-job' });
}

const allJobs = (req, res) => {
    res.render('jobs/all-jobs', { page: 'all-jobs' });
}

module.exports = {
    personalJobView,
    createJobView,
    allJobs
}