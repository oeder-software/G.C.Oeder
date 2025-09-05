let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "gedanken-en") {
  infoTxt= "Translated from German."
}
if (path == "gedanken-de") {
  infoTxt=" Deutsch Original."
}
if (path == "gedanken-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
SetFlora();

let img = "./img/covers/stats-57-gedank.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10725589?q=oeder&page=307";
SetLinkAndImgToFrontpage(link, img);
