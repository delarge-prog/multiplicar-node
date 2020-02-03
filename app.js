const { argv } = require('./config/yargs');
argv.argv;
const colors = require('colors');
const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(mostrarTabla => {
            console.log(` ${mostrarTabla}`);
        }).catch(err => {
            console.log(err);
        });
        break;

    case 'crear':
        console.log('crear');
        crearTabla(argv.base, argv.limite).then(tablaMultiplicar => {
            console.log(`tabla de multiplicar ha sido creada: ${tablaMultiplicar}`);
        }).catch(err => {
            console.log(err);
        });
        break;

    default:
        console.log('object');
}
// let base = 10;

// let argv2 = process.argv;
console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);

// crearTabla(base).then(tablaMultiplicar => {
//     console.log(`tabla de multiplicar ha sido creada: ${tablaMultiplicar}`);
// }).catch(err => {
//     console.log(err);
// });