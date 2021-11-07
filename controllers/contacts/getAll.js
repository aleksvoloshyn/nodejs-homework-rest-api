const contactsOperations = require('../../models/contacts')

const getAll = async (req, res) => {
  const result = await contactsOperations.getAll()
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getAll
