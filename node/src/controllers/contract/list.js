const service = require('../../services/contract');

module.exports = async (_req, res, next) => {
  try {
    const list = await service.list();

    if (list.error) return res.status(list.error.statusCode).json(list.error.message);

    return res.status(list.statusCode).json(list.list);
  } catch (e) {
    next(e);
  }
}
