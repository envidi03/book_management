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
