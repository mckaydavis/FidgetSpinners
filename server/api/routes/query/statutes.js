let express = require('express'),
    router  = express.Router();

let hrsService = require('../../services/hrsService.js'),
    ElasticSearch = require('../../services/ElasticSearch.js');

router.route('/')
	.get(hrsService.listAllStatutes);
	  
router.route('/search')
    .get(ElasticSearch.searchDocs);
	
module.exports = router;
