'use strict';

const httpService = require('./http-service');


let searchword = 'widget';
console.log('starting...');
httpService.getWordList("en", searchword)
    .then((results) => {
        console.log(results);
        httpService.getWordEntry("en", results[0].id)
            .then((result) => {
                console.log(result);
            }) 
            .catch((ex) => {
                console.log(ex);
            });
    })
    .catch((ex) => {
        console.log(ex);
    });

