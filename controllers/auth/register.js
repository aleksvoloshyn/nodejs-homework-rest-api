const { Conflict } = require('http-errors')
const { User } = require('../../models')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const { sendMail } = require('../../helpers')

const register = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  const avatarURL = gravatar.url(email, { protocol: 'https', s: '250' })

  if (user) {
    throw new Conflict(`User with email=${email} already exist`)
  }

  const verificationToken = nanoid()
  const newUser = new User({ email, verificationToken, avatarURL })
  newUser.setPassword(password)

  await newUser.save()

  const mail = {
    to: email,
    subject: 'email confirmation',
    html: `<a href='http://localhost:3000/api/users/verify/${verificationToken}'><h1> Confirm your email, please</h1></a>`,
  }

  await sendMail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Register success',
    user: { email, subscription: 'starter', avatarURL },
  })
}

module.exports = register
