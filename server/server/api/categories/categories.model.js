const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
        _id: {
            type: Number,
            primaryKey: true
        },
        name: {
            type: String,
            required: true
        }
    }
)

const Categories = mongoose.model("Categories", categorySchema)
exports = module.exports = Categories