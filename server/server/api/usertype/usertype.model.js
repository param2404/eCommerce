const mongoose =require('mongoose')

const usersTypeSchema = mongoose.Schema(
    {
        _id: { type: Number, primaryKey: true },
        type: {
            type: String,
            required:true
        }
    }
)

const UserType = mongoose.model("UserType", usersTypeSchema)
exports = module.exports= UserType