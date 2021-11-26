const fs = require('fs/promises')
const path = require('path')
const { NotFound } = require('http-errors')
const moment = require('moment')

const { Contact } = require('../../models')

const contactsDir = path.join(__dirname, '../../public/contacts')

const updateImage = async (req, res) => {
  const { id } = req.params
  const { path: tempUpload, originalname } = req.file
  try {
    const date = moment().format('DD-MM-YYYY_hh-mm-ss')
    // const filename = `${id}_${date}_${originalname}`
    // const resultUpload = path.join(contactsDir, id, filename)
    const resultUpload = path.join(contactsDir, originalname)
    await fs.rename(tempUpload, resultUpload)
    // const image = path.join('/contacts', id, filename)
    const image = path.join('/contacts', originalname)
    const result = await Contact.findByIdAndUpdate(id, { image }, { new: true })
    if (!result) {
      throw new NotFound(`Contact with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
}

module.exports = updateImage
