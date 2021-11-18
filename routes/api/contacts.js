const express = require('express')
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatus,
  updateImage,
} = require('../../controllers/contacts/')
const {
  validation,
  controllerWrapper,
  authenticate,
  upload,
} = require('../../middlewares')

const { joiContactSchema } = require('../../models/contact')
const router = express.Router()

router.get('/', authenticate, controllerWrapper(getAll))

router.get('/:id', authenticate, controllerWrapper(getById))

router.post(
  '/',
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(add)
)

router.put(
  '/:id',
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(updateById)
)

router.patch(
  '/:contactId/favorite',
  authenticate,
  controllerWrapper(updateStatus)
)

router.patch(
  '/:id/image',
  upload.single('image'),
  controllerWrapper(updateImage)
)

router.delete('/:id', controllerWrapper(removeById))

module.exports = router
