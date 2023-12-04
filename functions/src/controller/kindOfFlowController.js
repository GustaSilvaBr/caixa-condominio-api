const kindOfFlowModel = require("../models/kindOfFlowModel");

module.exports = {
  async getAllKindOfFlow() {
    return await kindOfFlowModel.getAllKindOfFlow();
  },

};
