const Category = require('../models/category.model');

exports.getAllCategory = async (req, res) => {
    return await Category.find();
}

exports.createCategory = async (categoryData) => {
    const {
        name,
        description,
    } = categoryData;
    const newCate = new Category({
        name,
        description
    })

    return await newCate.save();
}

exports.updateCategory = async (id, updateData) => {
    const updated = await Category.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    return updated;
};
