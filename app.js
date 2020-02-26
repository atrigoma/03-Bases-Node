const {argv} = require('./config/yargs');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];
let base=argv.base;
let limite=argv.limite;

switch (comando) {
    case 'listar': 
        listarTabla(base, limite).then(archivo => console.log(`se ha creado el archivo ${archivo}`));
        console.log(comando);
        break;
    case 'crear':
        console.log(comando);
        console.log(`Base:  ${base}`);
        crearArchivo(base, limite).then(archivo => console.log(`se ha creado el archivo ${archivo}`));

        break;
    default:

        console.log("Comando no reconocido");

    
}
