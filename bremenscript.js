let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "bremen-en") {
    infoTxt = "Translated from German.";
}
if (path == "bremen-de") {
    infoTxt = "Deutsch original.";
}
if (path == "bremen-dk") {
    infoTxt = "Oversat fra tysk.";
}
document.getElementById("info").innerHTML=infoTxt;
let img = "./img/covers/bremen.png";
let link =
  "https://www.digitale-sammlungen.de/de/view/bsb10033642?q=oeder&page=182";
SetLinkAndImgToFrontpage(link, img);
SetFlora();
