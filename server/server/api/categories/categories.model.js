const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categorySchema = mongoose.Schema({
    _id: {
        type: Number,
        AutoIncrement: true,
        primaryKey: true
    },
    name: {
        type: String,
        required: true
    }
}, {
        timestamps: true,
        toJSON: { virtuals: true } 
}
)

categorySchema.virtual('subCategories', {
    ref: 'SubCategories', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'categoryId', // is equal to `foreignField`
 });

const Categories = mongoose.model("Categories", categorySchema)
exports = module.exports = Categories