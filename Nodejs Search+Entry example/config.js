const ROOT_SETTINGS = {
    baseUrl: 'https://od-api.oxforddictionaries.com:443/api/v1/',
    app_id: '<SET YOUR API KEY HERE>', //go here for more detail https://developer.oxforddictionaries.com/documentation/getting_started
    app_key: '<SET YOUR API KEY HERE>'
};

const ENDPOINTS_SETTINGS = {
    entries: {
        url(language, word_id) { return 'entries/' + language + '/' + word_id }
    },
    search: {
        url(language, word) { return 'search/' + language + '?q=' + word + '&prefix=false' }
    }
};

module.exports = {
    ROOT_SETTINGS,
    ENDPOINTS_SETTINGS
};
