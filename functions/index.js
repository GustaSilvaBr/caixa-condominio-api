const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const indexRouter = require('./src/routes/index');
const apartmentRouter = require('./src/routes/apartmentsRoutes');
const kindOfFlowRouter = require('./src/routes/kindOfFlowRoute');
const cashFlow = require('./src/routes/cashFlowRoute');

const condominiumCashFlowApi = express();

const corsOptions = {
    'Access-Control-Allow-Origin': ['http://localhost:3000', 'http://localhost:5000', 
    'http://localhost:5173/'],
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'optionsSuccessStatus': 200,
}

condominiumCashFlowApi.use(cors(corsOptions));

condominiumCashFlowApi.use(express.json());

condominiumCashFlowApi.use(indexRouter);
condominiumCashFlowApi.use(apartmentRouter);
condominiumCashFlowApi.use(kindOfFlowRouter);
condominiumCashFlowApi.use(cashFlow);

exports.condominiumCashFlowApi = functions.https.onRequest(condominiumCashFlowApi);