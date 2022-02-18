const { ObjectId } = require('mongodb');
const { Contract } = require('../../models');

module.exports = async (_id, image) => {
  try {
    if (!ObjectId.isValid(_id)) return null;

    await Contract.findByIdAndUpdate(_id, { image: `localhost:3000/src/uploads/${image}` });

    const updateContract = await Contract.findById(_id);

    return { statusCode: (200), updateContract };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } }
  }
}
