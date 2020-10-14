const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const subcategorySchema = mongoose.Schema({
    _id: {
        type: Number,
        AutoIncrement:true,
        primaryKey: true
    },
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: true,
        ref: 'Categories',
    }
}, {
    timestamps: true,
}
)

const SubCategories = mongoose.model("SubCategories", subcategorySchema)
exports = module.exports = SubCategories