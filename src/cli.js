import chalk from 'chalk';
import fs, { lstat } from 'fs';
import bringfile from './index.js';

const path = process.argv;

function printList(result, identify = ''){
  console.log(chalk.yellow('Lista de links'),
  chalk.black.bgGreen(identify),
  result);
}

async function processText(pathArguments) {
  const path = pathArguments[2];

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
    printList(result);

  } else if (fs.lstatSync(path).isDirectory()) {
    const file = await fs.promises.readdir(path);
    file.forEach(async (nameFile) => {
      const list = await bringfile(`${path}/${nameFile}`);
      printList(list,nameFile);
    })
    console.log(file);
  }

}

// node src/cli.js  ./arquivos/text.md 
// node src/cli.js  ./arquivos/ 
// node src/cli.js  ./arquivo/ 
processText(path);