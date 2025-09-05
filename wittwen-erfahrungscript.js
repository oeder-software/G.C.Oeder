let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/witwencasse-erfahrung.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614678?q=inhalt&page=261";
SetLinkAndImgToFrontpage(link, img);
SetFlora();
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "wittwen-erfahrung-en") {
    infoTxt = "Translated from German.";
}
if (path == "wittwen-erfahrung-de") {
    infoTxt = " Deutsch Original.";
}
if (path == "wittwen-erfahrung-dk") {
    infoTxt = "Oversat fra tysk.";
}
document.getElementById("info").innerHTML=infoTxt;
