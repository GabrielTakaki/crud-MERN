const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const secret = process.env.JWT_SECRET;

module.exports = async (username, ccToken) => {
  try {
    const decoded = jwt.verify(ccToken, secret);
    const user = await User.findOne({ username: decoded.padStart.username });

    if (!user) return { error: { statusCodes: (404), message: 'User not found' } };

    if (user.username !== username) return { error: { statusCodes: (404), message: 'Unauthorized token' } };

    const { _id, password, ...params } = user;

    return { statusCodes: (200), user: params };
  } catch (e) {
    return { error: { statusCodes: (500), message: e.message } };
  }
};
