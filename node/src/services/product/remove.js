const { Product } = require('../../models');

module.exports = async (id) => {
  try {
    const product = await Product.findByIdAndRemove(id).exec();

    if (!product || !id) return { error: { statusCode: (400), message: 'Id not found' } }
    
    return { statusCode: (200), product };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
};
