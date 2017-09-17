'use strict';

let mongoose = require('mongoose'),
	Location = mongoose.model('Location'),
	cache = require('memory-cache');

exports.listAllLocations = function(req, res) {
	Location.find({}, function(err, location) {
		if (err)
			res.send(err);
		res.json(location);
	});
};

exports.postLocation = function(req, res) {
	let newLocation = new Location({
		x: req.body.x,
		y: req.body.y,
		statute: req.body.statute
	});

	newLocation.save(function(err) {
		if(err) 
			res.send(err);
	});

	res.send(newLocation)
};
