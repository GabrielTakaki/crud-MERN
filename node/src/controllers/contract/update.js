const service = require('../../services/contract');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      country,
      state,
      city,
      documentNumber,
      socialReason,
      address,
      district,
      zip,
      phone,
      email,
      contractStart,
      contractEnd,
      due,
      company,
    } = req.body;


    const updateContract = await service.update(
      id,
      country,
      state,
      city,
      documentNumber,
      socialReason,
      address,
      district,
      zip,
      phone,
      email,
      contractStart,
      contractEnd,
      due,
      company,
    );

    if (updateContract.error) return res.status(updateContract.error.statusCode).json(updateContract.error.message);
    return res.status(updateContract.statusCode).json(updateContract.updateContract);
  } catch (e) {
    next(e);
  }
};
