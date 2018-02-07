const nodeFetch = require('node-fetch');
const { ROOT_SETTINGS, ENDPOINTS_SETTINGS } = require('./config');

function traceError(data, reject, logMessage) {

    if (logMessage) console.log(logMessage);
    reject({ custom_error: data.custom_error });
}

function processRequest(url, resolve, reject) {
    var headers = {
        app_id: ROOT_SETTINGS.app_id,
        app_key: ROOT_SETTINGS.app_key
    }
    nodeFetch(url, { method: 'GET', headers: headers})
        .then((res) => {
            if (res.status === 200) {
                console.log("Successful API call");
                return res.json().then((data) => resolve(data));
                 
            } else if (res.status === 403) {              
                traceError({ statusCode: res.status, url: url, custom_error: 'Access denied: Incorrect app_id/app_key parameters. Check config.js' }, reject);
            } else {
                traceError({ statusCode: res.status, url: url, custom_error: 'Error. Check for incorrect query parameters' }, reject);                   
                
            }                     
        })
        .catch(ex => {
            traceError({ ex: ex, custom_error: 'Failed to fetch data. No response.' }, reject);            
        })

}

function fetch(url) {
    
    return new Promise((resolve, reject) => processRequest(url, resolve, reject) );   
}

module.exports = fetch;
