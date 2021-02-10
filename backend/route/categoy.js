const express = require('express');
const router = express.Router();
const Category = require('../controller/category');
//get all category
router.get('/', (req, res) => {
    Category.getcategories(req,res)
});
module.exports = router;