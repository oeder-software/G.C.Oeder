let wittwenMehreresContentDanish = [
  "Kapitel 1-5",
  "Kapitel 6-10",
  "Kapitel 11-15",
  "Kapitel 16-20",
  "Kapitel 21-25",
  "Kapitel 26-30",
  "Kapitel 31-35",
  "Kapitel 35-39",
];
let wittwenMehreresContentEnglish = [
  "Chapter 1-5",
  "Chapter 6-10",
  "Chapter 11-15",
  "Chapter 16-20",
  "Chapter 21-25",
  "Chapter 26-30",
  "Chapter 31-35",
  "Chapter 35-39",
];
let wittwenMehreresContentGerman = [
  "Kapitel 1-5",
  "Kapitel 6-10",
  "Kapitel 11-15",
  "Kapitel 16-20",
  "Kapitel 21-25",
  "Kapitel 26-30",
  "Kapitel 31-35",
  "Kapitel 35-39",
];

let chapter = [
  "#chap1",
  "#chap6",
  "#chap11",
  "#chap16",
  "#chap21",
  "#chap26",
  "#chap31",
  "#chap36",
];
let img = "./img/witwencasse-teori.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614677?q=%28Deutsches+Museum.+1776%29&page=106,107";
SetLinkAndImgToFrontpage(link, img);
PrependBrBeforeChap(chapter);

// SetLetterCheContent(chapter, content);
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "wittwen-teori-dk") {
  SetContent(contentdanish);
  //   SetLetterBugBio(letterBugBio, "DK");
  SetAlifeContent(chapter, wittwenMehreresContentDanish);
}

if (path == "wittwen-teori-en") {
  SetContent(contentenglish);
  //   SetLetterBugBio(letterBugBio, "EN");
  SetAlifeContent(chapter, wittwenMehreresContentEnglish);
}

if (path == "wittwen-teori-de") {
  SetContent(contentgerman);
  //   SetLetterBugBio(letterBugBio, "DE");
  SetAlifeContent(chapter, wittwenMehreresContentGerman);
}
