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
}
)

const Categories = mongoose.model("Categories", categorySchema)
exports = module.exports = Categories