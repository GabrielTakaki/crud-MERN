const service = require('../../services/contract');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;

    const uploadImage = await service.upload(id, filename);
      
    if (uploadImage.error) {
      return res.status(uploadImage.error.statusCode).json(uploadImage.error.message);
    }
    return res.status(uploadImage.statusCode).json(uploadImage.updateContract);
  } catch (e) {
    next(e);
  }
};
