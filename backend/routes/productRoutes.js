const express = require('express')
const router = express.Router()
const { getProducts, setProduct, updateProduct, deleteProduct } = require("../controllers/productController")
const { protect } = require('../middleware/authMiddleware')

router.route("/").get(protect, getProducts).post(protect, setProduct)
router.route("/:id").put(protect, updateProduct).delete(protect, deleteProduct)

module.exports = router