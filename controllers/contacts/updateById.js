// const contactsOperations = require('../../models/contacts')
const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const updateById = async (req, res, next) => {
  const { id } = req.params
  const { _id } = req.user

  const result = await Contact.findOneAndUpdate(
    { owner: _id, _id: id },
    req.body,
    { new: true }
  ).populate('owner', '_id email')

  if (!result) {
    return next(new NotFound(`Contact with id=${id} not found`))
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = updateById
