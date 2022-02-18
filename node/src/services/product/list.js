const { Product } = require('../../models');

module.exports = async () => {
  try {
    const list = await Product.find({});
    
    if (!list) {
      return { error: { statusCode: (400), message: 'Products not found' } };
    }
  
    return { statusCode: (200), list };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
};
