// const contactsOperations = require('../../models/contacts')
const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

// const removeById = async (req, res) => {
//   const { id } = req.params
//   console.log(req)
//   const result = await Contact.findByIdAndRemove(id)
//   if (!result) {
//     throw new NotFound(`Contact with id=${id} not found`)
//   }

//   res.json({
//     status: 'success',
//     code: 200,
//     message: 'Remove success',
//   })
// }

const removeById = async (req, res, next) => {
  const { id } = req.params
  const { _id } = req.user
  console.log(req.params)
  console.log(req.user)
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
