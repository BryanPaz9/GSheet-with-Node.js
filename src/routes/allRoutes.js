'use strict'

var express = require("express");

var apiController = require('../controllers/apiController');
var api = express.Router();


api.post('/addRecord', apiController.newRegister);
api.get('/getRecords', apiController.getRecords)

module.exports = api;