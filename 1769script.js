let ContentDanish = [
  "Forberetning.",
  "A. Forelagt efter befaling fra den Kongelige Rentekammer i året 1772.",
  "Første Afsnit.",
  "Andet Afsnit.",
  "Sammenligning med fremmede stater.",
  "Tredje afsnit.",
  "Fjerde afsnit",
  "Femte afsnit",
  "Sjette Afsnit",
  "Syvende Afsnit.",
  "Ottende Afsnit.",
  "B. Tabeller angaaende Befolkningen i Hans Majestæts Kongelige Danske Stater i Europa",
  "C. Plan Til Optælling af Menneskene I Staten",
  "Bilag",
];
let ContentEnglish = [
  "Preface.",
  "A. Submitted by order of the Royal Rentekammer in the year 1772.",
  "First Section.",
  "Second Section.",
  "Comparison with Foreign States",
  "Third Section.",
  "Fourth Section",
  "Fifth Section",
  "Sixth Section",
  "Seventh Section.",
  "Eighth Section.",
  "B. Tables concerning the Population of His Majesty’s Royal Danish States in Europe",
  "C. Plan For the Enumeration of the People In the State",
  "Appendix",
];
let ContentGerman = [
  "Vorbericht.",
  "A. Auf Befehh der Königlichen Rentekammer vorgelegt im Jahr 1772.",
  "Erster Abschnitt.",
  "Zweiter Abschnitt.",
  "Vergleichung mit fremden Staaten.",
  "Tredje afsnit.",
  "Vierter Abschnitt.",
  "Fünfter Abschnitt.",
  "Sechster Abschnitt.",
  "Siebenter Abschnitt.",
  "Achter Abschnitt.",
  "B. Tabellen betreffend die Bevölkerung Der Königl. Dänischen Staaten in Europa,",
  "C. Plan Zur Zählung der Menschen Im Staate",
  "Beilage",
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
  "#chap11",
  "#chap12",
  "#chap13",
  "#chap14",
];
let img = "./img/covers/1769.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10451859?q=oeder&page=15";
// export{chapter};
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
let infotxt= "";
if (path == "1769-en") {
  SetContent(chapter, ContentEnglish);
  infoTxt= "Translated from German."
}
if (path == "1769-de") {
  SetContent(chapter, ContentGerman);
  infoTxt=" Deutsch Original."
}
if (path == "1769-dk") {
  SetContent(chapter, ContentDanish);
  infoTxt="Oversat fra tysk."
}
SetLinkAndImgToFrontpage(link, img);
SetFlora();
PrependBrBeforeChap(chapter)

document.getElementById("info").innerHTML=infoTxt;

// var h3 = document.querySelectorAll("h3");
// for (let i = 0; i < h3.length; i++) {
//   var a = document.createElement("br");
//   h3[i].append(a)
// }
