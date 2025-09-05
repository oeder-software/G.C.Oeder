let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "ueberpapirgeld-en") {
  infoTxt= "Translated from German."
}
if (path == "ueberpapirgeld-de") {
  infoTxt=" Deutsch Original."
}
if (path == "ueberpapirgeld-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
SetFlora();

let img = "./img/covers/stats-uberpapir.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10616678?q=oeder&page=379";
SetLinkAndImgToFrontpage(link, img);
