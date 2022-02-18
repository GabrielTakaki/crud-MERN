const service = require('../../services/contract');

module.exports = async (req, res, next) => {
  try {
    const {
      country = 'Brazil',
      state = 'Santa Catarina',
      city = 'Balneário Camboriú',
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

    const newContract = await service.create(
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

    if (newContract.error) return res.status(newContract.error.statusCode).json(newContract.error.message);

    return res.status(newContract.statusCode).json(newContract.newContract);
  } catch (e) {
    next(e);
  }
}
