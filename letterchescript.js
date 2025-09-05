// document.getElementById("img1").setAttribute("src", "./img/laurvig.jpg");

document.getElementById("sidebarcontent").style = "cursor: pointer;";
let chapter = ["#chap1", "#chap2", "#chap3", "#chap4", "#chap5", "#chap6"];
let letterCheContentDanish = [
  "Den 20 maj 1755",
  "Den 21 maj 1755",
  "Den 22 maj 1755",
  "Den 25 maj 1755",
  "Den 27 maj 1755",
  "Den 21 juni 1755",
];
let letterCheContentEnglish = [
  "May 20 1755",
  "May 21 1755",
  "May 22 1755",
  "May 25 1755",
  "May 27 1755",
  "June 21 1755",
];
let letterCheContentGerman = [
  "Mai 20 1755",
  "Mai 21 1755",
  "Mai 22 1755",
  "Mai 25 1755",
  "Mai 27 1755",
  "Juni 21 1755",
];
PrependBrBeforeChap(chapter);

let img = "./img/covers/letterche.png";
let link =
  "https://digital.slub-dresden.de/werkansicht/dlf/124154/35?tx_dlf_navigation%5Bcontroller%5D=Navigation&cHash=2b7eef6229ba85ff2b6ec7ffb9f4c277";
SetLinkAndImgToFrontpage(link, img);

let image = ["laurvig.jpg"];
let letterCheBio = ["laurvig"];
SetBioImage(image);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
let infoTxt = "";
if (path == "letterche-dk") {
  SetBio(letterCheBio, "DK");
  SetContent(chapter, letterCheContentDanish);
    infoTxt="Oversat fra tysk."

}
if (path == "letterche-en") {
  SetBio(letterCheBio, "EN");
  SetContent(chapter, letterCheContentEnglish);
    infoTxt= "Translated from German."

}

if (path == "letterche-de") {
  SetBio(letterCheBio, "DE");
  SetContent(chapter, letterCheContentGerman);
    infoTxt=" Deutsch Original."

}



SetFlora();

document.getElementById("info").innerHTML=infoTxt;
