const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
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


const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet Created!'
            });
        });
    });
}
module.exports = { writeFile, copyFile }