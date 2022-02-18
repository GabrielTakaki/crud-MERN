const service = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { product, amount, price, installments, paid, beginning } = req.body;


    const updateProduct = await service.update(id, product, amount, price, installments, paid, beginning);

    if (updateProduct.error) return res.status(updateProduct.error.statusCode).json(updateProduct.error.message);
    return res.status(updateProduct.statusCode).json(updateProduct.updateProduct);
  } catch (e) {
    next(e);
  }
};
