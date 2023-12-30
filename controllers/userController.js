const asyncHandler = require("express-async-handler");

//@desc Register a user
//@routes POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user." });
});

//@desc Login a user
//@routes POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user." });
});

//@desc Current user info
//@routes GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information." });
});

module.exports = { registerUser, loginUser, currentUser };