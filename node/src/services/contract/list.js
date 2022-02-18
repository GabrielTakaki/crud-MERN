const { Contract } = require('../../models');

module.exports = async () => {
  try {
    const list = await Contract.find({});
    
    if (!list) {
      return { error: { statusCode: (400), message: 'Contracts not found' } };
    }
  
    return { statusCode: (200), list };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
};
