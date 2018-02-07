const fetch = require('./fetch-wrapper');
const { ROOT_SETTINGS, ENDPOINTS_SETTINGS } = require('./config');


function getWordList(language, word) {

    return new Promise((resolve, reject) => {
        fetch(ROOT_SETTINGS.baseUrl + ENDPOINTS_SETTINGS.search.url(language, word))           
            .then(data => {
                
                if (data.error) resolve({ res: data }); 
                console.log("Parsing data");  
                resolve(data.results);
                
            })        
            .catch(ex => reject(ex));
    });
}


function getWordEntry(language, word_id) {
    
    return new Promise((resolve, reject) => {
        fetch(ROOT_SETTINGS.baseUrl + ENDPOINTS_SETTINGS.entries.url(language, word_id))           
            .then(data => {
                
                if (data.error) resolve({ res: data }); 
                console.log("Parsing data");  
                resolve(data.results[0]);
                
            })        
            .catch(ex => reject(ex));
    });
}



module.exports = {
    getWordList,
    getWordEntry
}

