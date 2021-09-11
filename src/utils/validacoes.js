
const fs = require('fs');
const request = require('request');


function validaData(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
        return false;
    }
    return true;
};


function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}


module.exports = { validaData, FormataStringData};