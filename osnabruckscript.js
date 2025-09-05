let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];
let img = "./img/covers/witwencasse-etwas.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614671?q=%28Deutsches+Museum%29&page=89";
SetLinkAndImgToFrontpage(link, img);
SetFlora();

  if (path == "osnabruck-en") {
  infoTxt= "Translated from German."
}
if (path == "osnabruck-de") {
  infoTxt=" Deutsch Original."
}
if (path == "osnabruck-dk") {
  infoTxt="Oversat fra tysk."
}

document.getElementById("info").innerHTML=infoTxt;
