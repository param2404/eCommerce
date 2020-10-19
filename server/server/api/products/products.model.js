const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = mongoose.Schema({
    _id: { type: Number,AutoIncrement:true, primaryKey: true },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    countInStock: { type: Number },
    price:{type:Number},
    subCategoryId: {
        type: Number,
        required: true,
        ref: 'SubCategories',
    },
    categoryId: {
        type: Number,
        required: true,
        ref: 'Categories',
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users',
    }
}, {
    timestamps: true,
})

const Products = mongoose.model("Products", productSchema)
exports = module.exports = Products