const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

function delay(ms) {
}

exports.haleywebsite = {
    url: function() {
        return 'https://www.haleybridge.com/';
    },
    searchTextBox: function() {
        return select('#search_keywords');
    },

    firstSearchResult: function() {
        return Selector('.search-title').nth(0).with({boundTestRun: testController});
    },
    searchLocation: function() {
        return select('#search_location');
    },
    searchButton: function() {
        return select('.search-value');
    },
    keyword: function() {
        return Selector('.search-title').nth(0).with({boundTestRun: testController});
    },
    location: function() {
        return Selector('.search-page-location').nth(0).with({boundTestRun: testController});
    },
   
};
