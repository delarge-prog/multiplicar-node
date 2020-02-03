const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'crea tabla de multiplicar en un archivo', opciones)
    .help()
    .argv;

module.exports = {
    argv
}