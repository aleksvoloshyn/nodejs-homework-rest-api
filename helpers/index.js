const sendSuccessRes = require('./sendSuccessRes')
const { notFound, badRequest } = require('./httpErrors')
const sendMail = require('./sendMail')

module.exports = {
  sendSuccessRes,
  notFound,
  badRequest,
  sendMail,
}
