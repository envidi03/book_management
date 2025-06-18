const { body, validationResult } = require('express-validator')
const Category = require('../models/category.model')
const Book = require('../models/book.model');

exports.validationCreateBook = [
    body('title').notEmpty().isString().withMessage("Title is required")
        .custom(async (value) => {
            const titleBook = await Book.findOne({ title: value })
            if (titleBook) {
                throw new Error("Book title already exist")
            }
            return true
        }),
    body('author').notEmpty().isString().withMessage('Author is required'),
    body('categoryId').isMongoId()
        .withMessage('Invalid is required')
        .bail()
        .custom(async (value) => {
            const category = await Category.findById(value);
            if (!category) {
                throw new Error('Category does not exist')
            }
            return true;
        }),
    body('publisher').notEmpty().isString().withMessage('Publisher is required'),
    body('publishYear').notEmpty().isInt({ min: 0 }).withMessage('Publish year must positive'),
    body('price').notEmpty().isFloat({ min: 0 }).withMessage('Price must be positive, not empty and greater than 0'),
    body('quantity').notEmpty().isInt({ min: 0 }).withMessage('Quantity must be positive, not empty and greater than 0'),
    body('coverImage').isURL().withMessage('Url image is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed",
                errors: errors.array()
            })
        }
        next();
    }
];

exports.validateUpdateBook = [
    body('title').optional().notEmpty().isString().withMessage("Title is required")
        .custom(async (value) => {
            const titleBook = await Book.findOne({ titel: value })
            if (titleBook) {
                throw new Error("Title is already exist")
            }
            return true;
        }),
    body('author').optional().notEmpty().isString().withMessage("Author is required"),
    body('categoryId').optional().isMongoId().withMessage("Invalid category")
        .bail()
        .custom(async (value) => {
            const categoryId = await Category.findById(value)
            if (!categoryId) {
                throw new Error("Category does not exist")
            }
            return true;
        }),
    body('publisher').optional().notEmpty().isString().withMessage('Publisher is required'),
    body('publishYear').optional().notEmpty().isInt({ min: 0 }).withMessage('Publish year must positive'),
    body('price').optional().notEmpty().isFloat({ min: 0 }).withMessage('Price must be positive, not empty and greater than 0'),
    body('quantity').optional().notEmpty().isInt({ min: 0 }).withMessage('Quantity must be positive, not empty and greater than 0'),
    body('coverImage').optional().isURL().withMessage('Url image is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed",
                errors: errors.array()
            })
        }
        next();
    }
];
