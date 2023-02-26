const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register New User
// @route   POST /v1/api/users
// @access  Public
const registerUser = asyncHandler( async (req, res) => {
    const { username, fullname, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Required fields are missing')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        username,
        fullname,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            fullname: user.fullname,
            email: user.email,
            admin: user.admin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Login User
// @route   POST /v1/api/users/login
// @access  Public
const loginUser = asyncHandler( async (req, res) => {
    const { username, email, password } = req.body

    // Check for user with username or email
    let user = await User.findOne({ username })
    if (!user) {
        user = await User.findOne({ email })
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc    Get currently logged in user
// @route   GET /v1/api/users/me
// @access  Private
const getUser = asyncHandler( async (req, res) => {
    res.status(200).json(req.user)
})

// Create JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}