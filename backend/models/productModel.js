const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please select product title"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', productSchema)