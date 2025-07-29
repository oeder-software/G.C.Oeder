let inokulation1ContentDanish = [
  "BemærkningeroverHistorien om Indpodningenpaa Aunøe.",
  "Fortsættelse den 11. Oktober",
  "Fortsættelse den 26. oktober",
  "Fortsættelse den 9. november",
];
let inokulation1ContentEnglish = [
  "Remarkson the History of the Inoculationon Aunø.",
  "Continuation, October 11",
  "Continuation, October 26",
  "Continuation, November 9",
];
let inokulation1ContentGerman = [
  "Bemerkungen über die Geschichte der Einimpfung auf Aunøe.",
  "Fortsezung den 11ten Oktober.",
  "Fortsezung den 26ten Oktober.",
  "Fortsezung den 9ten Nov.",
];

let chapter = ["#chap0", "#chap1", "#chap2", "#chap3"];
let img = "./img/inokulation-1.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum%29&page=446";
SetLinkAndImgToFrontpage(link, img);
PrependBrBeforeChap(chapter);

// SetLetterCheContent(chapter, content);
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "inokulation-2-dk") {
  SetContent(contentdanish);
  //   SetLetterBugBio(letterBugBio, "DK");
  SetAlifeContent(chapter, inokulation1ContentDanish);
}

if (path == "inokulation-2-en") {
  SetContent(contentenglish);
  //   SetLetterBugBio(letterBugBio, "EN");
  SetAlifeContent(chapter, inokulation1ContentEnglish);
}

if (path == "inokulation-2-de") {
  SetContent(contentgerman);
  //   SetLetterBugBio(letterBugBio, "DE");
  SetAlifeContent(chapter, inokulation1ContentGerman);
}
