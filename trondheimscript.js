let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/trondheim.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614675?page=132,133&q=oeder";
SetLinkAndImgToFrontpage(link, img);
SetFlora();
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "trondheim-en") {
  infoTxt= "Translated from German."
}
if (path == "trondheim-de") {
  infoTxt=" Deutsch Original."
}
if (path == "trondheim-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
