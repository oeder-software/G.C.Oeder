let wittwenMehreresContentDanish = [
  "Den Bremiske Enkekasse",
  "Den Kalenbergske Enkekasse",
  "Den kongelige preussiske enkekasse",
  "Tillæg til artiklen om enkerkasser i april måned i dette år i D. M.",
];
let wittwenMehreresContentEnglish = [
  "The Bremen Widow’s Fund",
  "The Calenberg Widow’s Fund",
  "The Royal Prussian Widow's Fund",
  "Supplement to the article on widow’s funds from April of this year in D. M.",
];
let wittwenMehreresContentGerman = [
  "Bremische Witwenkasse.",
  "Kalenbergische Witwenkasse.",
  "Königl. Preussische Witwenkasse.",
  "Zusatz zu dem Aufsatz von Wittwenkassen im April des D.M.",
];

let chapter = ["#chap3", "#chap4", "#chap5", "#chap6"];
let img = "./img/witwencasse-mehreres.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614676?q=oeder&page=363";
SetLinkAndImgToFrontpage(link, img);
PrependBrBeforeChap(chapter);

// SetLetterCheContent(chapter, content);
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "wittwen-mehreres-dk") {
  SetContent(contentdanish);
  //   SetLetterBugBio(letterBugBio, "DK");
  SetAlifeContent(chapter, wittwenMehreresContentDanish);
}

if (path == "wittwen-mehreres-en") {
  SetContent(contentenglish);
  //   SetLetterBugBio(letterBugBio, "EN");
  SetAlifeContent(chapter, wittwenMehreresContentEnglish);
}

if (path == "wittwen-mehreres-de") {
  SetContent(contentgerman);
  //   SetLetterBugBio(letterBugBio, "DE");
  SetAlifeContent(chapter, wittwenMehreresContentGerman);
}
