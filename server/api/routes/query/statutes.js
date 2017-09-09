let express = require('express'),
	services = require('../../services/services.js'),
    router  = express.Router();

router.get('/', services.listAllStatutes);
router.get('/division/:division', services.listByDivision);
router.get('/title/:title', services.listByTitle);
router.get('/chapter/:chapter', services.listByChapter);

module.exports = router;
