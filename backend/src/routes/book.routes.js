const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller')
const { validationCreateBook, validateUpdateBook } = require('../middlewares/validateBook.middleware');

router.get('/', bookController.getAllBooks);
router.get('/search', bookController.getBookByName);
router.post('/', validationCreateBook, bookController.createBook);
router.delete('/:id', bookController.deleteBook);
router.put('/:id', validateUpdateBook, bookController.updateBook);

module.exports = router;