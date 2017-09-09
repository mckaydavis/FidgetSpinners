let express = require('express'),
    router  = express.Router();

let services = require('../../services/services.js'),
    ElasticSearch = require('../../services/ElasticSearch.js');

router.route('/')
	.get(services.listAllStatutes);
	
router.route('/division/:division')
	.get(services.listByDivision);
	
router.route('/title/:title')
	.get(services.listByTitle);
	
router.route('/chapter/:chapter')
    .get(services.listByChapter);
    
router.route('/search')
    .get(ElasticSearch.searchDocs);
	

module.exports = router;
