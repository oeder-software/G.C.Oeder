let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "leibrente-en") {
  infoTxt= "Translated from German."
}
if (path == "leibrente-de") {
  infoTxt=" Deutsch Original."
}
if (path == "leibrente-dk") {
  infoTxt="Oversat fra tysk."
}
SetFlora();

let img = "./img/covers/stats-5-hamburg.png";
let link = "https://www.digitale-sammlungen.de/en/view/bsb10616669?q=oeder&page=44";
SetLinkAndImgToFrontpage(link, img);
document.getElementById("info").innerHTML=infoTxt;
