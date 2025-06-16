const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema(
    {
        purchaseCode: {
            type: String,
            required: true
        },
        books: [
            {
                bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
                quatity: Number,
                unitcost: Number
            }
        ],
        note: String
    },
    { timestamps: { createAt: "createAt", updateAt: false } }
)

module.exports = mongoose.model("Purchase", purchaseSchema);