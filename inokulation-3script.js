let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/inokulation-1.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum%29&page=529";
SetLinkAndImgToFrontpage(link, img);
// SetLetterCheContent(chapter, content);
SetFlora();

if (path == "inokulation-3-dk") {
  infoTxt="Oversat fra tysk."
}
if (path == "inokulation-3-en") {
  infoTxt= "Translated from German."
}
if (path == "inokulation-3-de") {
  infoTxt=" Deutsch Original."
}
document.getElementById("info").innerHTML=infoTxt;
