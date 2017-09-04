let express = require('express');

let app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Server Running!');
});

app.listen(3000, function() {
    console.log('Server running on port: ' + port);
});
