const helper = require('../../helper');
const { User } = require('../../models');

module.exports = async (username, password) => {
  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser || existingUser.password !== password) {
      return { error: { statusCode: (404), message: 'Invalid fields' } };
    }

    const { _id, password: _excluded, ...params } = existingUser;
    const token = helper.tokenCreator(existingUser);
    return { statusCode: (200), user: params._doc, token };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
};
