let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/witwencasse-etwas.png";
let link = "https://www.digitale-sammlungen.de/en/view/bsb10614671?page=36";
  "https://www.digitale-sammlungen.de/en/view/bsb10614678?q=inhalt&page=261";
SetLinkAndImgToFrontpage(link, img);
// SetLetterCheContent(chapter, content);
SetFlora();
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "wittwen-etwas-en") {
    infoTxt = "Translated from German.";
}
if (path == "wittwen-etwas-de") {
    infoTxt = " Deutsch Original.";
}
if (path == "wittwen-etwas-dk") {
    infoTxt = "Oversat fra tysk.";
}
