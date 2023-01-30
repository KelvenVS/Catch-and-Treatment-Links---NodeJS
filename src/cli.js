import chalk from 'chalk';
import bringfile from './index.js';

const path = process.argv;

async function processText(path) {
  const result = await bringfile(path[2]);
  console.log(chalk.yellow('Lista de Links'),result);
}

// node src/cli.js  ./arquivos/text.md 
processText(path);