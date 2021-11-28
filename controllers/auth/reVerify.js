const { BadRequest } = require('http-errors')
const { sendMail } = require('../../helpers')
const { User } = require('../../models')

const reVerify = async (req, res, next) => {
  const { email } = req.body

  const user = await User.findOne({ email })

  if (user.verify) {
    return next(new BadRequest('Verification is already passed'))
  }

  const mail = {
    to: email,
    subject: 'registration varification',
    html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}">
    verificat your email</a>`,
  }

  await sendMail(mail)

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      message: 'Verification email sent',
    },
  })
}

module.exports = reVerify
