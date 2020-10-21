const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date },
    age:{type:Number},
    contactNumber: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: Number,
        required: true,
        ref: 'UserType',
    },
    token: {
        type:String
    }
}, {
    timestamps: true,
})



//////HASH THE PLAIN TEXT PASSWORD BEFORE SAVING//////
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})



const Users = mongoose.model("Users", userSchema)
exports = module.exports = Users