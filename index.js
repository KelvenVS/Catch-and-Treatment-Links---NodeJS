import fs from 'fs';
import chalk from 'chalk';
// const chalk= require('chalk'); // old-version -- other way

function handlingError(fault) {
    console.log(fault);
    throw new Error(chalk.red(fault.code, 'Não há arquivo no diretório'));
}

// aSync/aWait

async function bringfile(pathFile){

  try{
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(pathFile , encoding);
    console.log(chalk.red(text)); // "Promise { <pending> }" if async alone
  } catch (fault) {
    handlingError(fault);
  }
}
// \[[^\[\]]*?\]

bringfile('./arquivos/text.md');
bringfile('./arquivos/');