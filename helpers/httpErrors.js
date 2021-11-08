const { NotFound, BadRequest } = require("http-errors");

const notFound = (contactId, next) => {
  next(new NotFound(`object with id=${contactId} not found`));
};

const badRequest = (error, next) => {
  next(new BadRequest(error.message));
};

module.exports = {
  notFound,
  badRequest,
};
