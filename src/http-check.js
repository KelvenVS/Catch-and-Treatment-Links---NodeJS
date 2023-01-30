function extractLinksArray (arrLinks){
  return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checkStatus (listURLs) {
  const arrStatus = await Promise.all(
    listURLs.map(async (url) => {
      const response = await fetch(url);
      return response.status;
    })
  )
  return arrStatus;
}

export default async function listValidated (listLinks) {
  const links = extractLinksArray(listLinks);
  const status = await checkStatus(links);
  // console.log(status);
  return status;
}

// [gatinho salsicha](http://gatinhosalsicha.com.br/)