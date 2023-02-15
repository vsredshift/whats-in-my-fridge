const express = require('express')
const router = express.Router()
const { getAllUsers, updateUser }  = require('../controllers/adminController')
const { hasAdminRole } = require('../middleware/authMiddleware')

router.get('/users', hasAdminRole, getAllUsers)
router.put('/users/:id', updateUser)

module.exports = router