// const contactsOperations = require("../../models/contacts");
const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const { page, limit } = req.query
  const { _id } = req.user
  const skip = (page - 1) * limit || 0
  const result = await Contact.find(
    { owner: _id },
    '_id name price location owner',
    { skip, limit: +limit }
  ).populate('owner', '_id email')

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getAll
