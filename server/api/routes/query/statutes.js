let express = require('express'),
	services = require('../../services/services.js'),
    router  = express.Router();

router.get('/', services.listAllStatutes)

module.exports = router;
