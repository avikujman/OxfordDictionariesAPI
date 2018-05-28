const ROOT_SETTINGS = {
    baseUrl: 'https://od-api.oxforddictionaries.com:443/api/v1/',
    app_id: '1185a5db'
        app_key: '875757cd989aa789eb73da718d21f154'
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
