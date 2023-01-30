import chalk from 'chalk';
import fs, { lstat } from 'fs';
import bringfile from './index.js';

const path = process.argv;

function printResult(result){
  console.log(chalk.yellow('Lista de links'),result);
}

async function processText(pathArguments) {
  const path = pathArguments[2];

  if (fs.lstatSync(path).isFile()){
    const result = await bringfile(pathArguments[2]);
    printResult(result);
  } else if (fs.lstatSync(path).isDirectory()) {
    const file = await fs.promises.readdir(path);
    file.forEach(async (nameFile) => {
      const list = await bringfile(`${path}/${nameFile}`);
      printResult(list);
    })
    console.log(file);
  }

}

// node src/cli.js  ./arquivos/text.md 
processText(path);