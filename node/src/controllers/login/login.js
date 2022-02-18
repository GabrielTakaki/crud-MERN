const dayjs = require('dayjs');
const service = require('../../services/login');

const INVALID_CREDENTIALS = 'Email and password are required';
const NODE_ENV = 'development';

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { ccToken } = req.cookies;

    if (username && (password === '1')) {
      const User = await service.token(username, ccToken);
  
      if (User.error) {
        return res.status(User.error.statusCode).json({
          message: User.error.message,
        });
      }
      const { statusCode, user } = User;

      return res.status(statusCode).json(user);
    }

    if (username && (password !== '') ) {
      const User = await service.login(username, password);
  
      if (User.error ) {
        return res.status(User.error.statusCode).json({
          message: User.error.message,
        });
      }
      const { statusCode, user, token } = User;
      
      return res.status(statusCode)
        .cookie('ccToken', token, {
          // secure: NODE_ENV !== "development",
          secure: true,
          sameSite: 'none',
          httpOnly: true,
          overwrite: true,
          expires: dayjs().add(7, 'day').toDate(),
        })
        .json({user, token});
    }
    return res.status(500).json({ message: INVALID_CREDENTIALS });
  } catch (e) {
    next(e);
  }
};
