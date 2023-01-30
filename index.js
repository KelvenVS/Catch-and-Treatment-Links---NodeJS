import fs from 'fs';
import chalk from 'chalk';
// const chalk= require('chalk'); // old-version -- other way

function handlingError(fault) {
    console.log(fault);
    throw new Error(chalk.red(fault.code, 'Não há arquivo no diretório'));
}

function bringfile(pathFile){
    const encoding = 'utf-8';
    fs.readFile(pathFile , encoding, (fault,text) => {
        if (fault) {
            handlingError(fault);
        }
        console.log(chalk.green(text));
    })
}

bringfile('./arquivos/');