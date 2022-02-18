const service = require('../../services/product');

module.exports = async (req, res, next) => {
  try {
    const listProducts = await service.list();

    if (listProducts.error) return res.status(listProducts.error.statusCode).json(listProducts.error.message);

    return res.status(listProducts.statusCode).json(listProducts.list);
  } catch (e) {
    next(e);
  } 
}
