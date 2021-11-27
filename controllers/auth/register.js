const { Conflict } = require('http-errors')
const { User } = require('../../models')
const gravatar = require('gravatar')

const register = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  const avatarURL = gravatar.url(email, { protocol: 'https', s: '250' })

  if (user) {
    throw new Conflict(`User with email=${email} already exist`)
  }

  const newUser = new User({ email, avatarURL })
  newUser.setPassword(password)

  await newUser.save()

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Register success',
    user: { email, subscription: 'starter', avatarURL },
  })
}

module.exports = register
