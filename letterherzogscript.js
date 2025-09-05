document.getElementById("sidebarcontent").style = "cursor: pointer;";

let chapter = [
  "#chap1",
  "#chap2",
  "#chap3",
  "#chap4",
  "#chap5",
  "#chap6",
  "#chap7",
];
let letterherzogContentDanish = [
  "Oldenburg, den 2. maj 1787.",
  "Oldenburg, den 18. januar 1788",
  "Oldenburg, den 20. januar 1788",
  "Oldenburg, den 22. januar 1788,",
  "18. november 1788",
  "Oldenburg, den 18. februar 1790",
  "den 3. november 1790.",
];
let letterherzogContentEnglish = [
  "Oldenburg, 2nd May 1787",
  "Oldenburg, 18 January 1788",
  "Oldenburg, 20 January 1788.",
  "Oldenburg, January 22nd, 1788",
  "18th November 1788",
  "Oldenburg, 18 February 1790",
  "3rd November 1790",
];
let letterherzogContentGerman = [
  "Oldenburg, den 2ten May 1787.",
  "Oldenburg, den 18. Jan. 1788.",
  "Oldenburg, den 20t Jan. 1788",
  "Oldenburg, d. 22t Jan. 1788 ",
  "18t Nov. 1788.",
  "Oldenburg, den 18. Febr. 1790.",
  " 3. Nov. 1790.",
];
PrependBrBeforeChap(chapter);
let img = "./img/covers/175.png";
let link = "https://slaegtsbibliotek.dk/2023/935997.pdf#page=41";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterherzog-dk") {
  SetContent(chapter, letterherzogContentDanish);
  infoTxt="Oversat fra tysk."
}

if (path == "letterherzog-en") {
  SetContent(chapter, letterherzogContentEnglish);
  infoTxt= "Translated from German."
}

if (path == "letterherzog-de") {
  SetContent(chapter, letterherzogContentGerman);
  infoTxt=" Deutsch Original."
}

SetFlora();

document.getElementById("info").innerHTML=infoTxt;
