// const contactsOperations = require('../../models/contacts')
const { Contact } = require('../../models')
const { NotFound } = require('../../helpers')

const removeById = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndRemove(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'Remove success',
  })
}

module.exports = removeById
