import fs from 'fs';
import chalk from 'chalk';
// const chalk= require('chalk'); // old-version -- other way

const textTest = `São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API 'mozGetAsFile()' em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).

[Teste de retorno 400](https://httpstat.us/404).
[gatinho salsicha](http://gatinhosalsicha.com.br/)`

function extractLinks(text){
  const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  // const capture =text.match(regex);
  const capture =regex.exec(text);
  console.log(capture);
}

extractLinks(textTest);

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

// /\(https?:\/\/[^\s?#.].[^\s]*\)

//groups
// /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
// bringfile('./arquivos/text.md');
// bringfile('./arquivos/');