'use strict';

/**
 * Cache service for for quick lookups.
 * @author Jonathan Robello
 */

let cache = {};

let cacheService = function() {

    let add = function(key, val) {
        cache[key] = val;
    }

    let get = function(key) {
        return cache[key];
    }

    return {
        add: add,
        get: get
    }
};

 module.exports = cacheService;  