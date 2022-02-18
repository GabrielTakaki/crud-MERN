const service = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const newUser = await service.create(username, password);

    if (newUser.error) {
      return res.status(newUser.error.statusCode).json({ message: newUser.error.message });
    }
    return res.status(newUser.statusCode).json({ newUser: newUser.newUser });
  } catch (e) {
    next(e);
  }
}
