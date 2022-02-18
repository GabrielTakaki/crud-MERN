const { User } = require('../../models');

module.exports = async (username, password) => {
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    
    if (!username || !password) {
      return { error: { statusCode: (400), message: 'Invalid username or password' } };
    }
  
    return { statusCode: (201), newUser };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
}
