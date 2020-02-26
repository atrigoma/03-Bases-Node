const fs = require('fs');
const colors = require ('colors');


let listarTabla = async(base, limite) => {

    console.log('======================'.green);
    console.log(`dentro listar ${base} ${limite}`.red);
    console.log('======================'.green);
    let data = "";
    let nameFile = "data-" + base + ".txt";
    for (let i = 1; i <= limite; i++) {
        let result = base * i;
        data += `${base} * ${i} = ${result}\n`;
    }

    console.log(data);
}

let crearArchivo = async(base, limite) => {
    let data = "";
    let nameFile = "data-" + base + ".txt";
    for (let i = 1; i <= limite; i++) {
        let result = base * i;
        data += `${base} * ${i} = ${result}\n`;
    }

    fs.writeFile(nameFile, data, (err) => {
        if (err) console.log(err);
        else {
            console.log("archivo creado ".green + `${nameFile}`.red);
            return nameFile;
        }
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}

crearArchivo(3).then(file => console.log(`Archivo ${file} creado`));