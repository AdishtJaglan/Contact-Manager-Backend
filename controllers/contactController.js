//@desc Get all contacts
//@routes GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts." });
};

//@desc Create New contacts
//@routes POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Create contact." });
};

//@desc Get contact
//@routes GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update contacts
//@routes PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete contacts
//@routes POST /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Deleted contact for ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};