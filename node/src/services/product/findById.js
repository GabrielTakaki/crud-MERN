const { Product } = require('../../models');

module.exports = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) return { error: { statusCode: (401), message: 'Product not found.' } };
    return { statusCode: (200), product };
  } catch (err) {
    return { error: { statusCode: (500), message: e.message } };
  }
}
