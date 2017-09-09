let express = require('express'),
	services = require('../../services/services.js'),
    router  = express.Router();

router.route('/')
	.get(services.listAllStatutes);
	
router.route('/division/:division')
	.get(services.listByDivision);
	
router.route('/title/:title')
	.get(services.listByTitle);
	
router.route('/chapter/:chapter')
	.get(services.listByChapter);
	

module.exports = router;
