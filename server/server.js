let express = require('express');

let app = express(),
    port = process.env.PORT || 3000,
    uri = process.env.MONGO_URI,
    mongoose = require('mongoose');
    
mongoose.connect(uri);

let routes = require('./api/routes/routes.js');

routes.forEach(function(route) {
    app.use('/api' + route.url, route.route);
});

app.get('/', function(req, res) {
    res.send('Server Running!');
});

app.listen(3000, function() {
    console.log('Server running on port: ' + port);
});
