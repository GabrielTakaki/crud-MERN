const { Contract } = require('../../models');

module.exports = async (id) => {
  try {
    const contract = await Contract.findByIdAndRemove(id).exec();

    if (!contract || !id) return { error: { statusCode: (400), message: 'Id not found' } }
    
    return { statusCode: (200), contract };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
}
