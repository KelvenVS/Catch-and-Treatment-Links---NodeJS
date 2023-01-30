import bringfile from './index.js';

const path = process.argv;
console.log(path[2])

// node src/cli.js  ./arquivos/text.md 

bringfile(path[2]);