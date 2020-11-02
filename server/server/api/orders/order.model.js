const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
   orderedProducts: [{
       productId: {
           type: Number,
           ref: 'Products',
           required:true
       },
       productQuantity: {
           type: Number,
           required: true
       },
       amount: {
           type: Number,
           required:true
       }
    }],
    totalAmount: {
        type: Number,
        required:true
    },
    billingAddress: {
        type: String,
        required:true
    },
    shippingAddress: {
        type: String,
        required: true 
    },
    contactNumber: {
        type: String,
        required:true
    },
    paymentCardId: {
        type:String
    }
}, {
    timestamps: true,
})

const Orders = mongoose.model("Orders", orderSchema)
exports = module.exports = Orders