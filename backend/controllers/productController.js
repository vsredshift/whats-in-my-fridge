const asyncHandler = require("express-async-handler")

const Product = require('../models/productModel')
const User = require('../models/userModel')

// @desc    Get products
// @route   GET /v1/api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ user: req.user.id })
    res.status(200).json(products)
})

// @desc    Set product
// @route   POST /v1/api/products
// @access  Private
const setProduct = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error("Please add product title")
    }

    const product = await Product.create({
        title: req.body.title,
        user: req.user.id
    })

    res.status(201).json(product)
})

// @desc    Update product
// @route   PUT /v1/api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(400)
        throw new Error('Product not found!')
    }

    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (product.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(201).json(updatedProduct)
})

// @desc    Delete product
// @route   DELETE /v1/api/products/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400)
        throw new Error('Product not found!')
    }
    
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (product.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await product.remove()

    res.status(201).json({ id: req.params.id })
})

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct,
}