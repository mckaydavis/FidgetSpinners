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
                "size": req.query.size,
                "query":{
                  "bool": {
                    "should": [
                      {
                        "match_phrase_prefix": {
                          "section_text": req.query.input
                        }
                      },
                      {
                        "match": {
                          "section_text": {
                            "query": req.query.input,
                            "fuzziness": 1
                          }
                        }
                      },
                      {
                        "match_phrase": {
                          "chapter_section": req.query.input
                        }
                      },
                      {
                        "match": {
                          "text": {
                            "query": req.query.input,
                            "fuzziness": 1
                          }
                        }
                      },
                      {
                        "common": {
                          "query": req.query.input
                        }
                      }
                    ],
                    "minimum_should_match": 1
                  }
                },
                "_source": ["_id", "division", "division_text", "volume", 
                    "title", "title_text", "chapter", "chapter_text", "section", "section_text",
                    "year"]
            }
        }).then(function(docs) {
            res.send(docs.hits.hits);
        });
    });

    return {
        searchDocs: searchDocs
    }
};

module.exports = elasticService(bluebird, elasticsearch);
