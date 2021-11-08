// const contactsOperations = require('../../models/contacts')
const { Contact } = require("../../models");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    return next(new NotFound(`Contact with id=${contactId} not found`));
  }

  res.json({
    status: "success",
    code: 200,
    message: "Remove success",
  });
};

module.exports = removeById;
