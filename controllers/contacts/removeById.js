const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const removeById = async (req, res, next) => {
  const { id } = req.params
  const { _id } = req.user

  const result = await Contact.findOneAndRemove({
    owner: _id,
    _id: id,
  })
  console.log(result)
  if (!result) {
    return next(new NotFound(`Contact with id=${id} not found`))
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'Remove success',
  })
}

module.exports = removeById
