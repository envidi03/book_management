const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "user"]
        }
    },
    { timestamps: { createAt: "createAt", updateAt: false } }
)

module.exports = mongoose.model("User", userSchema)