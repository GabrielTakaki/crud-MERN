const { Contract } = require('../../models');

module.exports = async (documentNumber, socialReason, company) => {
  try {
    // Mongo Aggregation Pipeline
    const query = await Contract.aggregate([{
      $match: {
        $and: [
          // RegExp: correspondência de texto com um padrão.
          { "documentNumber": { $regex: new RegExp(documentNumber) } },
          // A flag 'g' acha todas as correspondências em vez de parar após achar a primeira
          { "socialReason": { $regex: new RegExp(socialReason, 'g') } },
          { "company": { $regex: new RegExp(company, 'g') } },
        ]
      }
    }])

    if (!query) {
      return { error: { statusCode: (400), message: 'Contracts not found' } };
    }

    return { statusCode: (200), query };
  } catch (e) {
    return { error: { statusCode: (500), message: e.message } };
  }
};
