// const contactsOperations = require("../../models/contacts");
const { Contact } = require('../../models')
const { BadRequest } = require('http-errors')

const getAll = async (req, res, next) => {
  const { page, limit } = req.query

  if (isNaN(page) || isNaN(limit)) {
    return next(new BadRequest())
  }

  const { _id } = req.user

  if (page && limit) {
    const skip = (page - 1) * limit
    const result = await Contact.find(
      { owner: _id },
      '_id name price location owner',
      { skip, limit: +limit }
    ).populate('owner', '_id email')
    res.json({
      status: 'success',
      code: 200,
      data: result,
    })
  }
}

module.exports = getAll
