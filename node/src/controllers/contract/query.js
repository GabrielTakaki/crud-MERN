const service = require('../../services/contract');

module.exports = async (req, res, next) => {
  try {
    const { documentNumber, socialReason, company } = req.query;
    const query = await service.query(documentNumber, socialReason, company);

    if (query.error) return res.status(query.error.statusCode).json(query.error.message);
    return res.status(query.statusCode).json(query.query);
  } catch (e) {
    return next(e);
  }
};
