const roverService = require('../services/rover');
const NotFoundError = require('../util/NotFoundError');

module.exports = async (req, res, next) => {
  
    try {
      const response = await roverService.getRoverImages();
  
      if (response === undefined) {
        return next(new NotFoundError("Images not found"));
      }
      return res.json(response);
    } catch (e) {
      console.log(e);
    }
  };