'use strict'

var express = require("express");

var apiController = require('../controllers/apiController');
var api = express.Router();


api.post('/addRecord', apiController.newRegister);

module.exports = api;