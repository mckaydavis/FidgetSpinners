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

    /**
     * @name searchDocs
     * @desc search for documents close to the given input.
     * @param input the input to match.
     * @param size number of hits to return.
     * @return return the client search promise.
     */
    let searchDocs = (function(input, size) {
        return client.search({
            index: 'hrs',
            body: {
                size: size,
                query: {
                    match: {
                        "_all": {
                            "query": input,
                            "fuzziness": 1, 
                            "minimum_should_match": "75%"
                        }
                    }
                }
            }
        })
    });

    return {
        searchDocs: searchDocs
    }
};

module.exports = elasticService(bluebird, elasticsearch);
