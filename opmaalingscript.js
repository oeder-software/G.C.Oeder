let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/opmaaling.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614673?q=%28Deutsches+Museum%29&page=225";
if (path == "opmaaling-en") {
    infoTxt = "Translated from German.";
}
if (path == "opmaaling-de") {
    infoTxt = "Deutsch original.";
}
if (path == "opmaaling-dk") {
    infoTxt = "Oversat fra tysk.";
}
document.getElementById("info").innerHTML=infoTxt;

  SetLinkAndImgToFrontpage(link, img);
SetFlora();
