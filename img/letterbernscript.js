document.getElementById("sidebarcontent").style = "cursor: pointer;";

let chapter = ["#chap1", "#chap2", "#chap3", "#chap4"];
let letterBernContentDanish = [
  "Frederiks Hospital, den 23. Januar 1767.",
  "København, 19. Juli 1770.",
  "Kiöng 17. August 1770.",
  "København, 23. November 1770.",
];
let letterBernContentEnglish = [
  "Frederiks Hospital, 23rd January 1767.",
  "Copenhagen, 19 July 1770.",
  "Kiöng 17 August 1770",
  "Copenhagen, 23 November 1770",
];
let letterBernContentGerman = [
  "Frederiks Hosp. , 23. Januar 1767.",
  "Kopenhagen, 19. Juli 1770.",
  "Kiöng 17. August 1770.",
  " Kopenhagen 23. november 1770.",
];
PrependBrBeforeChap(chapter);
let img = "./img/letterbern.png";
let link = "https://slaegtsbibliotek.dk/924457.pdf#page=593";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterbern-dk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, letterBernContentDanish);
}

if (path == "letterbern-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, letterBernContentEnglish);
}

if (path == "letterbern-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, letterBernContentGerman);
}
