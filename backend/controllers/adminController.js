const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc    Get a list of all users
// @route   GET /v1/api/admin/users
// @access  Private - requires admin priveleges
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

// @desc    Update a user by admin
// @route   PUT /v1/api/admin/users/:id
// @access  Private - requires admin priveleges
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found!')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json(updatedUser)
})



module.exports = {
    getAllUsers,
    updateUser
}