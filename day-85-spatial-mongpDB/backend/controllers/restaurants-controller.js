const Restaurant = require("../models/restaurants");
exports.getRestaurants = async (request, respone) => {
  try {
    const result = await Restaurant.find({}).limit(10);
    respone.status(200).json({
      data: result,
    });
  } catch (error) {
    respone.status(500).json({
      error: error,
    });
  }
};
