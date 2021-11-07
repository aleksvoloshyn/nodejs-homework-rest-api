const { contactsOperations } = require('../../models/contacts')

const getById = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.getById(id)
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getById
