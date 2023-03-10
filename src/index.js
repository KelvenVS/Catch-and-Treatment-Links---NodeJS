import fs from 'fs';
import chalk from 'chalk';
// const chalk= require('chalk'); // old-version -- other way

function extractLinksText(text){
  const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  // const capture = text.match(regex);
  // const capture = regex.exec(text);
  const capture = [...text.matchAll(regex)];
  const result = capture.map(capture => ({[capture[1]]: capture[2]}))
  // console.log(result);
  return result.length !== 0 ? result : 'Não tem links nesse arquivo';
}

function handlingError(fault) {
    console.log(fault);
    throw new Error(chalk.red(fault.code, 'Não há arquivo no diretório'));
}

// aSync/aWait

async function bringfile(pathFile){

  try{
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(pathFile , encoding);
    return(extractLinksText(text));
  } catch (fault) {
    handlingError(fault);
  }
}

// \[[^\[\]]*?\]

// /\(https?:\/\/[^\s?#.].[^\s]*\)

//groups
// /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)

// bringfile('./arquivos/text.md');
// bringfile('./arquivos/');

export default bringfile;