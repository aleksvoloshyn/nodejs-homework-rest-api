const sendSuccessRes = require('./sendSuccessRes')
const { notFound, badRequest } = require('./httpErrors')

module.exports = {
  sendSuccessRes,
  notFound,
  badRequest,
}
