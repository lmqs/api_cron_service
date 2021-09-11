
const fs = require('fs');
const request = require('request');


async function download(url, dest) {

    console.log('entoru DOWNLOAD');
    /* Create an empty file where we can save data */
    const file = fs.createWriteStream(dest);
    /* Using Promises so that we can use the ASYNC AWAIT syntax */
    await new Promise((resolve, reject) => {
        request({
            /* Here you should specify the exact link to the file you are trying to download */
            uri: url,
            gzip: true,
        })
            .pipe(file)
            .on('finish', async () => {
                console.log(`The file is finished downloading.`);
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    })
        .catch((error) => {
            console.log(`Something happened: ${error}`);
        });
}


async function escreverArquivo(data, nome_arquivo) {
    fs.writeFile(nome_arquivo, data, (err) => {
        if (err) throw err;
        console.log('O arquivo foi criado!');
    });
}

// async function example2() {
//     (async () => {
//         const data = await download('https://statusinvest.com.br/img/company/ipo/acoes/square/123.jpg?v=3', './images/image.jpg');
//         console.log(data); // The file is finished downloading.
//     })();
// }



module.exports = { download, escreverArquivo };