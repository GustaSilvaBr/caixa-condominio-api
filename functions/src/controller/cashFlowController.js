const cashFlowModel = require("../models/cashFlowModel");

module.exports = {
  async getAllCashFlow() {
    return await cashFlowModel.getAllCashFlow();
  },

};
