'use strict'
const EXPRESS = require("express");
const APP = EXPRESS();
const BODYPARSER = require("body-parser");

// LAS RUTAS

var all_routes = require('./src/routes/allRoutes');

//CABECERAS
APP.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, x-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});

//MIDDLEWARES
APP.use(BODYPARSER.urlencoded({extended: false}));
APP.use(BODYPARSER.json());

//ROUTES

APP.use('/api', all_routes);
module.exports = APP;