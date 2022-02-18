const service = require('../../services/contract');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contract = await service.findById(id);
    if (contract.error) return res.status(contract.error.statusCode).json(contract.error.message);
    return res.status(contract.statusCode).json(contract.contract);
  } catch (e) {
    next(e);
  }
};
