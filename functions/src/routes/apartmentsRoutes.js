const express = require('express');
const apartmentController = require('../controller/apartmentController');


const apartmentRouter = express.Router();

apartmentRouter.get('/apartments/', async (req, res)=>{
    const apartments = await apartmentController.getAllApartment();

    return res.status(200).send({
        message:"Apartments successfully found!",
        apartments: apartments
    })
});

module.exports = apartmentRouter;
