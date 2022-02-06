const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //IF ERR SEND PROMISE TO '.catch()' METHOD
            if (err) {
                reject(err);
                //RETURN OUT OF 'IF' HERE SO PROMISE DOESNT EXECUTE 'resolve()'
                return;
            }

            //IF EVERYTHING IS OK, RESOLVE PROMISE & SEND TO '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


//DEMO HTML CODE
const sampleHtml = '<h1>This is an example</h1>';

writeFile(sampleHtml)
    .then(successfulResponse => {
        console.log(successfulResponse);
    })
    .catch(errorResponse => {
        console.log(errorResponse);
    });