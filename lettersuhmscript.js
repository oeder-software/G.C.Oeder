let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

document.getElementById("sidebarcontent").style = "cursor: pointer;";

let chapter = ["#chap1", "#chap2", "#chap3", "#chap4", "#chap5"];
let letterContentDanish = [
  "Kbhvn d. 2 Jan. 1762. Oeder.",
  "Kbhvn d. 7 Aug. 1762. Oeder",
  "Kbhvn d. 26 Nov. 1763.",
  "Bilag til brev af 26 Nov.",
  "Den 17 April 1772. Oeder.",
];
let letterContentEnglish = [
  "Copenhagen, the 2nd of January, 1762.",
  "Copenhagen, the 7th of August 1762.",
  "Copenhagen, 26 November 1763.",
  "Appendix to the Letter of 26 November 1763.",
  "The 17th of April, 1772.",
];
let letterContentGerman = [
  "Kopenhagen, den 2. Januar 1762.",
  "Kopenhagen, den 7. August 1762.",
  "Kopenhagen, den 26. November 1763.",
  "Beilage zu Brief von 26. November. ",
  "Den 17. April 1772.",
];
PrependBrBeforeChap(chapter);
let img = "./img/covers/lettersuhm.png";
let link = "https://www.kb.dk/e-mat/dod/130000926249_bw.pdf#page=428";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "lettersuhm-dk") {
  SetContent(chapter, letterContentDanish);
  infoTxt="Dansk original."
}

if (path == "lettersuhm-en") {
    infoTxt= "Translated from Danish."
    SetContent(chapter, letterContentEnglish);
}

if (path == "lettersuhm-de") {
    infoTxt=" Von Dänish übersetz."
  SetContent(chapter, letterContentGerman);
}

SetFlora();

document.getElementById("info").innerHTML=infoTxt;
