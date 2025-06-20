const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/category.controller')
const { validationCreateCategory, validationUpdateCategory } = require('../middlewares/category.middleware')

router.get('/', categoryController.getAllCategory);
router.post('/', validationCreateCategory, categoryController.createCategory);
router.put('/:id', validationUpdateCategory, categoryController.updateCategory)

module.exports = router