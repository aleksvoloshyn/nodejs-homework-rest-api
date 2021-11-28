const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const getCurrentUser = require('./getCurrentUser')
const updateAvatar = require('./updateAvatar')
const verify = require('./verify')
const reVerify = require('./reVerify')

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateAvatar,
  verify,
  reVerify,
}
