//requireds
const fs = require('fs');
const colors = require('colors');


let getTitulo = (base) => {
    console.log('==================================='.rainbow);
    console.log(`Tabla del ${base}`.rainbow);
    console.log('==================================='.rainbow);
}

let data = '';


let listarTabla = (base, limite) => {
    getTitulo(base);
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`No es un valor valido se requiere numero.`);
        } else {
            for (let i = 1; i <= limite; i++) {
                data += (`${base} x ${[i]} = ${ base*[i]}\n`.green);
            }
            resolve(data);
        }
    });
}

let crearTabla = async(base, limite) => {
    //return new Promise((resolve, reject) => {
    getTitulo(base);
    let resp = `El archivo tabla-${base} ha sido creado!`;
    if (!Number(base) || !Number(limite)) {
        throw ("no es numero ");
    } else {
        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${[i]} = ${base*[i]}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw (err);
            else return resp;
        });
    }
    //});
}

module.exports = {
    listarTabla,
    crearTabla

}


// let crearTabla = async(base) => {

//     for (let i <= 10; i++) {
//         data += (`${base} x ${[i]} = ${base*[i]}\n`);
//     }

//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw err;
//         else return (`El archivo tabla-${base} ha sido creado!`);
//     });
// }