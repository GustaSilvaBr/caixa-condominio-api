const express = require('express');
const cashFlowController = require('../controller/cashFlowController');


const cashFlowRouter = express.Router();

cashFlowRouter.get('/cashFlow/', async (req, res)=>{
    const cashFlow = await cashFlowController.getAllCashFlow();

    return res.status(200).send({
        message:"Cash Flow successfully found!",
        cashFlow: cashFlow
    })
});

module.exports = cashFlowRouter;
