const Contact = require('../models/contact.form');
const contactCntrl = {};

contactCntrl.getForms = async (req, res, next) => {
    const contact = await Contact.find();
    res.json(contact);
};

contactCntrl.saveForm = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    await contact.save();
    res.json({status: 'Form saved'});
};


module.exports = contactCntrl;