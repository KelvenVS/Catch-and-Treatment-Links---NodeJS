import chalk from 'chalk';
import fs, { lstat } from 'fs';
import bringfile from './index.js';
import listValidated from './http-check.js';

const path = process.argv;

function printList(check, result, identify = ''){

  if (check){
    console.log(chalk.yellow('Lista Validada'),
  chalk.black.bgGreen(identify),
  listValidated(result));
  } else {
    console.log(chalk.yellow('Lista de links'),
  chalk.black.bgGreen(identify),
  result);
  }
}

async function processText(pathArguments) {
  const path = pathArguments[2];
  const check = pathArguments[3] === '--check';
  // console.log(check);

  try{
    fs.lstatSync(path);
  }catch(fault){
    if (fault.code === 'ENOENT'){
      console.log(chalk.red('Arquivo ou diretório não existe'));
      return;
    }
  }

  if (fs.lstatSync(path).isFile()){
    const result = await bringfile(pathArguments[2]);
    printList(check,result);

  } else if (fs.lstatSync(path).isDirectory()) {
    const file = await fs.promises.readdir(path);
    file.forEach(async (nameFile) => {
      const list = await bringfile(`${path}/${nameFile}`);
      printList(check,list,nameFile);
    })
    console.log(file);
  }

}

// node src/cli.js  ./arquivos/text.md 
// node src/cli.js  ./arquivos/ 
// node src/cli.js  ./arquivo/ 
processText(path);