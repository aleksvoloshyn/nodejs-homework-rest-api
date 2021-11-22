const getCurrentUser = async (req, res) => {
  const { email, subscription } = req.user

  res.status(200).json({
    status: 'success',
    code: 200,
    data: { email, subscription },
  })
}

module.exports = getCurrentUser
