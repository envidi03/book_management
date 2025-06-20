const categoryService = require('../services/category.service')

exports.getAllCategory = async (req, res) => {
    try {
        const cate = await categoryService.getAllCategory();
        res.status(200).json({ data: cate })
    } catch (error) {
        res.status(500).json({ message: "Error fething category", error: error.message })
    }
}

exports.createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(200).json({
            message: "Add category succesfully",
            data: category
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating category",
            error: error.message
        })
    }
}

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await categoryService.updateCategory(id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Not found category" })
        }
        res.status(200).json({
            message: "Update successfully",
            data: updated
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating category",
            error: error.message
        })
    }
}