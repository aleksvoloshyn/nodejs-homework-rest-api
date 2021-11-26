// const { contactsOperations } = require('../../models/contacts')
const { Contact } = require('../../models')
const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')

const contactsDir = path.join(__dirname, '../../public/contacts')

const add = async (req, res) => {
  const image = gravatar.url('alex@gmail.com')
  const newContact = { ...req.body, image, owner: req.user._id }
  const result = await Contact.create(newContact)
  const productFolder = path.join(contactsDir, String(result._id))
  await fs.mkdir(productFolder)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  })
}

module.exports = add
