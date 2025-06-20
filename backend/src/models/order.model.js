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
        totoAmount: Number,
        status: {
            type: Number,
            default: 0
        },
        processedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: false }
    }
)

module.exports = mongoose.model("Order", orderSchema)