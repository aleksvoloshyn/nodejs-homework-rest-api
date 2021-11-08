const express = require('express')
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatus,
} = require('../../controllers/contacts/')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactSchema } = require('../../models/contact')
const router = express.Router()

router.get('/', controllerWrapper(getAll))

router.get('/:id', controllerWrapper(getById))

router.post('/', validation(joiContactSchema), controllerWrapper(add))

router.put('/:id', validation(joiContactSchema), controllerWrapper(updateById))

router.patch('/:contactId/favorite', controllerWrapper(updateStatus))

router.delete('/:id', controllerWrapper(removeById))

module.exports = router
