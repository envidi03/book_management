const Book = require('../models/book.model')
const removeAccent = require('remove-accents')

exports.getAllBook = async () => {
    return await Book.find();
};

exports.getBookByName = async (name) => {
    const normalized = removeAccent(name);
    const books = await Book.find();

    return books.filter(book => {
        return removeAccent(book.title || '').toLowerCase().includes(normalized.toLowerCase());
    })
}
exports.createBook = async (bookData) => {
    const { title,
        author,
        categoryId,
        publisher,
        publishYear,
        price,
        quantity,
        description,
        coverImage } = bookData
    const newBook = new Book({
        title,
        author,
        categoryId,
        publisher,
        publishYear,
        price, quantity,
        description,
        coverImage
    });

    return await newBook.save();
}

exports.deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id);
};

exports.updateBook = async (id, updateData) => {
    const updated = await Book.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    })
    return updated;
};

