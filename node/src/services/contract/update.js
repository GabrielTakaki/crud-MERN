const { Contract } = require('../../models');

module.exports = async (
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
) => {
  try {
     await Contract.findByIdAndUpdate(id, {
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
    });

    const updateContract = await Contract.findById(id);
    updateContract.save();

    if (!updateContract) return { error: { statusCode: (400), message: 'Invalid' } };

    return { statusCode: (201), updateContract };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } }
  }
}