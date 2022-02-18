const { Contract } = require('../../models');

module.exports = async (
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
    const newContract = new Contract({
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
    await newContract.save();

    if (!newContract) return { error: { statusCode: (400), message: 'Invalid' } };

    return { statusCode: (201), newContract };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } }
  }
}
