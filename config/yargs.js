const opts= {
    base: {
        demand:true,
        alias: 'b'
    },
    limite: {
        demand:false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar', "imprime el contenido",opts)
            .command('crear', "crea el contenido",opts)
            .help()
            .argv;


module.exports ={
    argv
}