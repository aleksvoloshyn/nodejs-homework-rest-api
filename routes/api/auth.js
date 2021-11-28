const express = require('express')

const {
  validation,
  authenticate,
  controllerWrapper,
  upload,
} = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiSchema } = require('../../models/user')

const router = express.Router()

router.post(
  '/register',
  validation(joiSchema),
  controllerWrapper(ctrl.register)
)

router.post('/login', validation(joiSchema), controllerWrapper(ctrl.login))

router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))
router.post('/verify', controllerWrapper(ctrl.reVerify))

router.get('/current', authenticate, controllerWrapper(ctrl.getCurrentUser))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  controllerWrapper(ctrl.updateAvatar)
)

module.exports = router
