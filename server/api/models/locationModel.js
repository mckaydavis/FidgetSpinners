'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  x: Number,
  y: Number,
  statute: String
});

module.exports = mongoose.model('Location', LocationSchema, 'hrs-locations');