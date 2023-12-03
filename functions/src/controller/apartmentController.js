const apartmentModel = require("../models/apartmentModel");

module.exports = {
  async getAllApartment() {
    return await apartmentModel.getAllApartments();
  },

};
