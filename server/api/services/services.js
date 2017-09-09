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

exports.listByDivision = function(req, res) {
	Statute.find({division: req.params.division}, function(err, statute) {
		if (err)
			res.send(err);
		res.json(statute);
	});
};

exports.listByTitle = function(req, res) {
	Statute.findOne({title: req.params.title}, function(err, statute) {
		if (err)
			res.send(err);
		res.json(statute);
	});
};

exports.listByChapter = function(req, res) {
	Statute.findOne({chapter: req.params.chapter}, function(err, statute) {
		if (err)
			res.send(err);
		res.json(statute);
	});
};