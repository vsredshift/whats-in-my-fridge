
// @desc    Get products
// @route   GET /v1/api/products
// @access  Private
const getProducts = (req, res) => {
    res.status(200).json({ message: "Get products" })
}

// @desc    Set product
// @route   POST /v1/api/products
// @access  Private
const setProduct = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add text field")
    }

    res.status(201).json({ message: "Set product" })
}

// @desc    Update product
// @route   PUT /v1/api/products/:id
// @access  Private
const updateProduct = (req, res) => {
    res.status(201).json({ message: `Update product ${req.params.id}` })
}

// @desc    Delete product
// @route   DELETE /v1/api/products/:id
// @access  Private
const deleteProduct = (req, res) => {
    res.status(201).json({ message: `Delete product ${req.params.id}` })
}
module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct,
}