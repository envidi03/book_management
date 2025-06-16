const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        orderCode: {
            type: String,
            required: true
        },
        books: [
            {
                bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
                quantity: Number,
                unitPrice: Number
            }
        ],
        totoAmount: Number
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: false }
    }
)