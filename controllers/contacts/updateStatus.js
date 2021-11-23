const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const { sendSuccessRes } = require('../../helpers')

const updateStatus = async (req, res, next) => {
  const { id } = req.params
  const { favorite } = req.body
  const { _id } = req.user

  const result = await Contact.findOneAndUpdate(
    { owner: _id, _id: id },
    { favorite },
    { new: true }
  ).populate('owner', '_id email')

  if (!result) {
    return next(new NotFound(`Contact with id=${id} not found`))
  }

  sendSuccessRes(res, { result })
}

module.exports = updateStatus
