const mongoose = require('mongoose')

const subcategorySchema = mongoose.Schema({
    _id: {
        type: Number,
        primaryKey: true
    },
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    }
}
)

const SubCategories = mongoose.model("SubCategories", subcategorySchema)
exports = module.exports = SubCategories