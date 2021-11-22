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

// const removeById = async (req, res) => {
//   const { contactId } = req.params
//   const { _id } = req.user
//   console.log(req.user)
//   const result = await Contact.findOneAndRemove({
//     owner: _id,
//     _id: contactId,
//   })
//   if (!result) {
//     throw new NotFound(`Contact with id=${contactId} not found`)
//   }

//   res.json({
//     status: 'success',
//     code: 200,
//     message: 'Remove success',
//   })
// }

module.exports = removeById
