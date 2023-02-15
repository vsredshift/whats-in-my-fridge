const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, "Please select product title"]
    },
    opened: {
        type: Date,
    },
    expires: {
        type: Date,
    },
    lastsFor: {
        type: Number,
    },
    imageUrl: {
        type: String,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', productSchema)