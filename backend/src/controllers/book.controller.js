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

exports.createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(200).json({
            message: "Book create successfully",
            data: book
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating book", error: error.message })
    }
}

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await bookService.deleteBook(id);
        if (!deleted) {
            return res.status(404).json({ message: "Book not found or not already deleted" })
        }
        res.status(200).json({
            message: "Book deleted successfully",
            data: deleted
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting book",
            error: error.message
        })
    }
}

exports.updateBook = async (req, res) => {
    const { id } = req.params;

    try {
        const updated = await bookService.updateBook(id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Delete not found", })
        }
        res.status(200).json({
            message: "Update successfully",
            data: updated
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating book",
            error: error.message
        })
    }
}