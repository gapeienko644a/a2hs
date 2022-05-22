// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/a2hs/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}


let EngUrl = "https://listenenglish.freevar.com/2021-November-December-phrases/phrases-of-the-day-practice-Nov-Decemb-22.htm";
// var request = new XMLHttpRequest;
// request.open("GET", EngUrl, true);
// request.send();
// let htmlcode;
// request.onreadystatechange = function() {
//   if (request.readyState == 4 && this.status == 200)
//   htmlcode = request.responseText;
//   alert(htmlcode);
// };
fetch(EngUrl)
  .then((response) => {
    return response.text;
  })
  .then((data) => {
    console.log(data);
  });