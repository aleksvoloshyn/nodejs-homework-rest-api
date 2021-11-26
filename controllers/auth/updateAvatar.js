const fs = require('fs/promises')
const path = require('path')
const { BadRequest } = require('http-errors')
const Jimp = require('jimp')
// const moment = require('moment')

const { User } = require('../../models')

const avatarsDir = path.join(__dirname, '../../public/avatars')

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    return next(new BadRequest('Error upload '))
  }

  const { id } = req.user
  const { path: tmpUpload, originalname } = req.file

  try {
    const resultUpload = path.join(avatarsDir, id, originalname)
    await fs.rename(tmpUpload, resultUpload)

    const avatar = path.join('/avatars', originalname)

    await Jimp.read(resultUpload).resize(250, 250).write(resultUpload)

    await User.findByIdAndUpdate(id, { avatarURL: avatar })

    res.json({
      status: 'success',
      code: 200,
      data: {
        avatarURL: avatar,
      },
    })
  } catch (error) {
    await fs.unlink(tmpUpload)
    throw error
  }
}

module.exports = updateAvatar
