  const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenCreator = (data) => jwt.sign({ data }, secret, jwtConfig);

module.exports = {
  tokenCreator,
};