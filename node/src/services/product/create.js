const { Product } = require('../../models');

module.exports = async (product, amount, price, installments, paid, beginning) => {
  try {
    const newProduct = new Product({ product, amount, price, installments, paid, beginning });
    await newProduct.save();
    
    if (!newProduct) {
      return { error: { statusCode: (400), message: 'Invalid' } };
    }
  
    return { statusCode: (201), newProduct };
  } catch (e) {
    return { error: { statusCode: (409), message: e.message } };
  }
};
