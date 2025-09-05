document.getElementById("sidebarcontent").style = "cursor: pointer;";

let letterBugImg = ["ryberg.jpg", "moltke1.png", "wessel.jpg", "jupiter.jpg"];
let letterBugAlt = [
  "Niels Ryberg",
  "Adam Gotlob Moltke",
  "Caspar Wessel",
  "Jupiter",
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
];
let letterBugContentDanish = [
  "Den 9 januar 1782",
  "Den 13 november 1782",
  "Den 28 januar 1783",
  "Den 5 oktober 1783",
  "Den 25 jan 1784",
  "Den 20 april 1784",
  "Den 2 januar 1785",
  "Den 18 februar 1785",
];
let letterBugContentEnglish = [
  "January 9 1782",
  "November 13 1782",
  "January 28 1783",
  "October 5 1783",
  "January 25 1784",
  "April 20 1784",
  "January 2 1785",
  "February 18 1785",
];
let letterBugContentGerman = [
  "Januar 9 1782",
  "November 13 1782",
  "Januar 28 1783",
  "Oktober 5 1783",
  "Januar 25 1784",
  "April 20 1784",
  "Januar 2 1785",
  "Februar 18 1785",
];
PrependBrBeforeChap(chapter);

SetBioImage(letterBugImg);
let letterBugBio = ["ryberg", "Moltke", "Wessel", "jupiter"];
// document.getElementById("bio2").setAttribute("height", "fit-content");
// document.getElementById("bio3").setAttribute("height", "fit-content");
// document.getElementById("bio4").setAttribute("height", "fit-content");
// document.getElementById("bio5").setAttribute("height", "fit-content");

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterbug-dk") {
  SetBio(letterBugBio, "DK");
  SetContent(chapter, letterBugContentDanish);
  infoTxt="Oversat fra tysk."
}

if (path == "letterbug-en") {
  SetBio(letterBugBio, "EN");
  SetContent(chapter, letterBugContentEnglish);
  infoTxt= "Translated from German."
}

if (path == "letterbug-de") {
  SetBio(letterBugBio, "DE");
  SetContent(chapter, letterBugContentGerman);
  infoTxt=" Deutsch Original."
}

// function SetLetterBugBio(bio, language) {
//   for (let index = 0; index < bio.length; index++) {
//     document
//       .getElementById("bio" + (index + 2))
//       .setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
//   }
// }
// function SetLetterBugImg(img, alt) {
//   for (let index = 0; index < img.length; index++) {
//     document
//       .getElementById("img" + (index + 2))
//       .setAttribute("src", "./img/persons/" + img[index]);
//     document
//       .getElementById("img" + (index + 2))
//       .setAttribute("alt", alt[index]);
//   }
// }

document.getElementById("info").innerHTML=infoTxt;
SetFlora();