let inokulation1ContentDanish = [
  "Forberetning.",
  "Afhandling indleveret i året 1772 i København til den kommission, som udtrykkeligt var nedsat til at undersøge de forandringer, der siden oktober 1770 var indtruffet i og med kollegierne.",
  "Første Memorandum.",
  "Memoire nr. 2.",
  "Memoire nr. 3.",
  "Memoire nr. 4.",
  "Memoire nr. 5.",
  "I. Concerning the Archives",
  "II. Regarding the correspondence of the Rente-Schreiber (Revenue Clerks).",
  "III. Regarding the secretary",
];
let inokulation1ContentEnglish = [
  "Preliminary Report.",
  "Memorandum submitted in the year 1772 in Copenhagen to the commission that had been expressly appointed to investigate the changes which, since October 1770, had occurred in and with the colleges.",
  "First Memorandum.",
  "Memoire No. 2.",
  "Memoire No. 3.",
  "Memoire No. 4.",
  "Memoir No. 5",
  "I. Vedrørende arkiverne",
  "II. Om renteskrivernes korrespondance.",
  "III. Om sekretæren",
];
let inokulation1ContentGerman = [
  "Vorbericht.",
  "Aufsatz eingereicht im Jahre 1772 in Kopenhagen, an diejenige Commission, welche ausdrücklich zur Untersuchung der seit dem October 1770 in und mit den Collegiis vorgefallenen Veränderungen angeordnet war.",
  "Erstes Memoire.",
  "Memoire Nro. 2.",
  "Memoire Nro. 3.",
  "Memoire Nro. 4.",
  "Memoire Nro. 5.",
  "I.Betreffend die Archive",
  "II. Die Correspondenz der Rente-Schreiber betreffend.",
  "III. Wegen des Secretairs.",
];

let chapter = [
  "#chap1",
  "#chap2",
  "#chap3",
  "#chap4",
  "#chap5",
  "#chap6",
  "#chap7",
  "#chap8",
  "#chap9",
  "#chap10",
];
let img = "./img/commission.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10451860?q=oeder&page=9";
PrependBrBeforeChap(chapter);
SetLinkAndImgToFrontpage(link, img);

// SetLetterCheContent(chapter, content);
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "commission-dk") {
  SetContent(contentdanish);
  //   SetLetterBugBio(letterBugBio, "DK");
  SetAlifeContent(chapter, inokulation1ContentDanish);
}

if (path == "commission-en") {
  SetContent(contentenglish);
  //   SetLetterBugBio(letterBugBio, "EN");
  SetAlifeContent(chapter, inokulation1ContentEnglish);
}

if (path == "commission-de") {
  SetContent(contentgerman);
  //   SetLetterBugBio(letterBugBio, "DE");
  SetAlifeContent(chapter, inokulation1ContentGerman);
}
