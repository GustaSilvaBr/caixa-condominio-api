const express = require('express');
const kindOfFlowController = require('../controller/kindOfFlowController');


const kindOfFlowRouter = express.Router();

kindOfFlowRouter.get('/kindOfFlow/', async (req, res)=>{
    const kindOfFlow = await kindOfFlowController.getAllKindOfFlow();

    return res.status(200).send({
        message:"Kind Of Flow successfully found!",
        kindOfFlow: kindOfFlow
    })
});

module.exports = kindOfFlowRouter;
