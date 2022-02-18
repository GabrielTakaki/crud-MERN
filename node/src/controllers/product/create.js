const service = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { product, amount, price, installments, paid, beginning } = req.body;

    const newProduct = await service.create(product, amount, price, installments, paid, beginning);

    if (newProduct.error) {
      return res.status(newProduct.error.statusCode).json(newProduct.error.message);
    }

    return res.status(newProduct.statusCode).json(newProduct.newProduct);
  } catch (e) {
    next(e);
  }
};
