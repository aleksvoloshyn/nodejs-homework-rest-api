const contactsOperations = require('../../models/contacts')

const removeById = async (req, res) => {
  const { id } = req.params

  res.json({
    status: 'success',
    code: 200,
    message: 'Remove success',
  })
}

module.exports = removeById
