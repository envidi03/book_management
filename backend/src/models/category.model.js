const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: String,
    },
    { timestamps: { createAt: 'createAt', updateAt: 'updateAt' } }
)
module.exports = mongoose.model("Category", categorySchema)