const service = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.remove(id);

    if (product.error) return res.status(product.error.statusCode).json(product.error.message);

    return res.status(product.statusCode).json(product.product);
  } catch (e) {
    next(e);
  }
};
