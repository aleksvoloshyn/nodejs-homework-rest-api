const Joi = require('joi')

const joiContactSchema = Joi.object({
  name: Joi.string().min(1).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string()
    .regex(/^\d{3}-\d{3}-\d{4}$/)
    .required(),
})

module.exports = joiContactSchema
