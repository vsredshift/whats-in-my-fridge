
// @desc    Register New User
// @route   POST /v1/api/users
// @access  Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}

// @desc    Login User
// @route   POST /v1/api/users/login
// @access  Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User' })
}

// @desc    Get currently logged in user
// @route   GET /v1/api/users/me
// @access  Private
const getUser = (req, res) => {
    res.json({ message: 'Get Current User' })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}