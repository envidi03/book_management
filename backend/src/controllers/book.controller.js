const bookService = require('../services/book.service')

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBook();
        res.status(200).json({ data: books });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
}

exports.getBookByName = async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ message: "Missing name query parameter" })
    }

    try {
        const books = await bookService.getBookByName(name);
        res.status(200).json({ data: books })
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books by name', error: error.message });
    }
}