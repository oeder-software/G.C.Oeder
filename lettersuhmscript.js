document.getElementById("sidebarcontent").style = "cursor: pointer;";

let chapter = ["#chap1", "#chap2", "#chap3", "#chap4", "#chap5"];
let letterBernContentDanish = [
  "Kbhvn d. 2 Jan. 1762. Oeder.",
  "Kbhvn d. 7 Aug. 1762. Oeder",
  "Kbhvn d. 26 Nov. 1763.",
  "Bilag til brev af 26 Nov.",
  "Den 17 April 1772. Oeder.",
];
let letterBernContentEnglish = [
  "Copenhagen, the 2nd of January, 1762.",
  "Copenhagen, the 7th of August 1762.",
  "Copenhagen, 26 November 1763.",
  "Appendix to of 26 November 1763.",
  "The 17th of April, 1772.",
];
let letterBernContentGerman = [
  "Kopenhagen, den 2. Januar 1762.",
  "Kopenhagen, den 7. August 1762.",
  "Kopenhagen, den 26. November 1763.",
  "Beilage zu Brief von 26. November. ",
  "Den 17. April 1772.",
];
PrependBrBeforeChap(chapter);
let img = "./img/lettersuhm.png";
let link = "https://www.kb.dk/e-mat/dod/130000926249_bw.pdf#page=428";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "lettersuhm-dk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, letterBernContentDanish);
}

if (path == "lettersuhm-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, letterBernContentEnglish);
}

if (path == "lettersuhm-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, letterBernContentGerman);
}
