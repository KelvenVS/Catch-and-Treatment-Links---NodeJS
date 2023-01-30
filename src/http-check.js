function extractLinksArray (arrLinks){
  return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

export default function listValidated (listLinks) {
  return extractLinksArray(listLinks);
}