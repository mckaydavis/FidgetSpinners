let express = require('express');

let routes = [];

routes.push({ url:'/statutes', route:require('./query/statutes.js') })

module.exports = routes;
