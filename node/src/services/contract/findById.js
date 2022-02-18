const { Contract } = require('../../models');

module.exports = async (id) => {
  try {
    const contract = await Contract.findById(id);
    if (!contract) return { error: { statusCode: (401), message: 'Contract not found.' } };
    return { statusCode: (200), contract };
  } catch (err) {
    return { error: { statusCode: (500), message: e.message } };
  }
}
