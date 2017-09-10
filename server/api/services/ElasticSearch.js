'use strict';

/**
 * API for elasticsearch.
 * @author Jonathan Robello
 */

let bluebird = require('bluebird'),
    elasticsearch  = require('elasticsearch');

let uri = process.env.ELASTIC_URI;

let elasticService = function(Promise, elasticsearch) {

    let client = new elasticsearch.Client({
        host: process.env.ELASTIC_URI
    });

    client.ping({
        // ping usually has a 3000ms timeout 
        requestTimeout: 1000
    }, function (error) {
        if (error) {
          console.trace('elasticsearch cluster is down!');
        } else {
          console.log('elasticsearch client running');
        }
    });

    /**
     * @name searchDocs
     * @desc search for documents close to the given input.
     * @param req the request object.
     * @param res the response object
     */
    let searchDocs = (function(req, res) {
        client.search({
            index: 'hrs',
            body: {
                size: req.query.size,
                query: {
                    match: {
                        "_all": {
                            "query": req.query.input,
                            "fuzziness": 1, 
                            "minimum_should_match": "75%"
                        }
                    }
                }
            }
        }).then(function(docs) {
            res.send(docs);
        });
    });

    return {
        searchDocs: searchDocs
    }
};

module.exports = elasticService(bluebird, elasticsearch);
