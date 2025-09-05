let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "botanicaljourney-en") {
  infoTxt= "Translated from German."
}
if (path == "botanicaljourney-de") {
  infoTxt=" Deutsch Original."
}
if (path == "botanicaljourney-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
SetFlora();

let img = "./img/covers/botanical.png";
let link =
  "https://archive.org/details/centaurus_1950-1951_1/page/242/mode/2up";
SetLinkAndImgToFrontpage(link, img);
