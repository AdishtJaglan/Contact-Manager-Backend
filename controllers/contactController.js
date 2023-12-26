const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@routes GET /api/contacts
//@access public
const getContacts = asyncHandler((req, res) => {
    res.status(200).json({ message: "Get all contacts." });
});

//@desc Create New contacts
//@routes POST /api/contacts
//@access public
const createContact = asyncHandler((req, res) => {
    console.log("the request body is: ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.status(201).json({ message: "Create contact." });
});

//@desc Get contact
//@routes GET /api/contacts/:id
//@access public
const getContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contacts
//@routes PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contacts
//@routes POST /api/contacts/:id
//@access public
const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Deleted contact for ${req.params.id}` });
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};