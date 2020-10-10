const mongoose =require('mongoose')

const usersTypeSchema = mongoose.Schema(
    {
        type: {
            type: String,
            required:true
        }
    }
)

const UserType = mongoose.model("UserType", usersTypeSchema)
exports = module.exports= UserType