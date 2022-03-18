const express = require("express")
const { AddContact, GetContact, DeleteContact, UpdateContact } = require("../Controllers/Contact")

const ContactRouter = express.Router()
ContactRouter.post('/AddContact', AddContact)
ContactRouter.get('/GetContact',GetContact)
ContactRouter.delete('/DeleteContact/:id',DeleteContact)
ContactRouter.put('/UpdateContact/:id',UpdateContact)
module.exports = ContactRouter