'use strict';
var mongoose = require('mongoose'),
	Statute = mongoose.model('Statute')


exports.listAllStatutes = function(req, res) {
  Statute.find({}, function(err, statute) {
    if (err)
      res.send(err);
    res.json(statute);
  });
};
