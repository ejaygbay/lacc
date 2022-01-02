const categoryView = (req, res) => {
    res.render('categories/category', { page: 'category' });
}

const createCategory = (req, res) => {

}

module.exports = {
    categoryView,
    createCategory,
}