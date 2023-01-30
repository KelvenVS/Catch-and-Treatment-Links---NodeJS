import chalk from "chalk";

function extractLinksArray (arrLinks){
  return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checkStatus (listURLs) {
  const arrStatus = await Promise.all(
    listURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return `${response.status} - ${response.statusText}`;;
      } catch (fault) {
        return treatmentError(fault);
      }
    })
  )
  return arrStatus;
}

function treatmentError (fault){
  if (fault.cause.code === 'ENOTFOUND'){
    return 'link não encontrado';
  } else {
    return 'ocorreu algum erro';
  }
}

export default async function listValidated (listLinks) {
  const links = extractLinksArray(listLinks);
  const status = await checkStatus(links);

  return listLinks.map((object,index) => ({
    ...object,
    status: status[index]
  }))
}