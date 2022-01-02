const dashboardView = (req, res) => {
    res.render('dashboard/dashboard', { page: 'dashboard' });
}

module.exports = dashboardView;