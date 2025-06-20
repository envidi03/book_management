const { body, validationResult } = require('express-validator')
const Category = require('../models/category.model')

exports.validationCreateCategory = [
    body('name').notEmpty().isString().withMessage('Name is required')
        .custom(async (value) => {
            const nameCategory = await Category.findOne({ name: value })
            if (nameCategory) {
                throw new Error("Name category is already exists")
            }
            return true;
        }),
    body('description').isString().withMessage("Description is required"),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed",
                errors: errors.array()
            })
        }
        next();
    }
]

exports.validationUpdateCategory = [
    body('name')
        .optional()
        .notEmpty()
        .isString()
        .withMessage("Category name is required")
        .custom(async (value, { req }) => {
            const nameCategory = await Category.findOne({ name: value });
            if (nameCategory && nameCategory._id.toString() !== req.params.id) {
                throw new Error("Name category is already exists");
            }
            return true;
        }),
    body('description')
        .optional()
        .isString()
        .withMessage("Description is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed",
                errors: errors.array()
            });
        }
        next();
    }
];
