const categoryModel = require('../model/category.model')

//show all categories
function getcategories(req, res) {
    categoryModel.find().then((categories) => {
        res.json(categories)
    })
}

module.exports = {
  getcategories,
};