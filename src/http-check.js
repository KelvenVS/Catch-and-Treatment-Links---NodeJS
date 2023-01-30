function extractLinksArray (arrLinks){
  return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checkStatus (listURLs) {
  return listURLs.map(async (url) => {
    const response = await fetch(url);
    return response.status;
  })
}

// const res = await fetch('https://nodejs.org/api/documentation.json');
// if (res.ok) {
//   const data = await res.json();
//   console.log(data);
// }

export default function listValidated (listLinks) {
  const links = extractLinksArray(listLinks);
  const status = checkStatus(links);
  console.log(status);
  return status;
}