const { Product } = require('../../models');

module.exports = async (id, product, amount, price, installments, paid, beginning) => {
  try {
     await Product.findByIdAndUpdate(id, { product, amount, price, installments, paid, beginning });

    const updateProduct = await Product.findById(id);

    if (!updateProduct) return { error: { statusCode: (400), message: 'Invalid' } };

    return { statusCode: (201), updateProduct };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } }
  }
}