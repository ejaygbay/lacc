
const reportCaseView = (req, res) => {
    res.render('cases/report-case', { page: 'report-case' });
}

const cases = (req, res) => {
    res.render('cases/cases', { page: 'cases' });
}

// const personalJobView = (req, res) => {
//     res.render('cases/personal-jobs', { page: 'personal-jobs' });
// }





module.exports = {
    // personalJobView,
    reportCaseView,
    cases
}