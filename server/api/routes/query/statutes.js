let express = require('express'),
    router  = express.Router();

router.get('/', function(req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

module.exports = router;
