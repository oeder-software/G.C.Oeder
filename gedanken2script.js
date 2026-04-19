let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "gedanken2-en") {
  infoTxt= "Translated from German."
}
if (path == "gedanken2-de") {
  infoTxt=" Deutsch Original."
}
if (path == "gedanken2-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
SetFlora();

let img = "./img/covers/gedanken2.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10725589?q=statsanzeigen&page=500";
SetLinkAndImgToFrontpage(link, img);
