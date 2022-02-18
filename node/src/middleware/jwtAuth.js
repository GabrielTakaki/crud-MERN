const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtAuth = async (req, res, next) => {
  const token = req.cookies['ccToken'];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ username: decoded.data.username });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'No registered user' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = jwtAuth;