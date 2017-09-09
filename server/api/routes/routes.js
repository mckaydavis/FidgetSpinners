let express = require('express');

let routes = [];

routes.push({ url:'/statutes', route:require('./query/statutes.js') });
routes.push({ url:'/division', route:require('./query/statuteDivisions.js')});

module.exports = routes;
