document.getElementById("sidebarcontent").style = "cursor: pointer;";

let letterBugImg = ["ryberg.jpg", "moltke1.png", "Wessel.jpg", "jupiter.jpg"];
let letterBugAlt = [
  "Niels Ryberg",
  "Adam Gotlob Moltke",
  "Caspar Wessel",
  "Jupiter",
];
let letterBugChapter = [
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

SetLetterBugImg(letterBugImg, letterBugAlt);
let letterBugBio = ["ryberg", "Moltke", "Wessel", "jupiter"];
// document.getElementById("img2").setAttribute("src", "./img/ryberg.jpg");
// document.getElementById("img3").setAttribute("src", "./img/moltke1.png");

// document.getElementById("img4").setAttribute("src", "./img/Wessel.jpg");
// document.getElementById("img5").setAttribute("src", "./img/jupiter.jpg");

document.getElementById("bio2").setAttribute("height", "fit-content");
document.getElementById("bio3").setAttribute("height", "fit-content");
document.getElementById("bio4").setAttribute("height", "fit-content");
document.getElementById("bio5").setAttribute("height", "fit-content");

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterbugdk") {
  // var a = document.createElement("p");
  // a.innerText = "Indhold";
  // a.style = "cursor: none; font-size: 20px";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Til start";
  // a.href = "#frameindex";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 9 januar 1782";
  // a.href = "#chap1";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 13 november 1782";
  // a.href = "#chap2";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 28 januar 1783";
  // a.href = "#chap3";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 5 oktober 1783";
  // a.href = "#chap4";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 25 jan 1784";
  // a.href = "#chap5";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 20 april 1784";
  // a.href = "#chap6";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 2 januar 1785";
  // a.href = "#chap7";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 18 februar 1785";
  // a.href = "#chap8";
  // document.getElementById("content").appendChild(a);

  /* ----------------------------------------------------------------------
   */
  // var a = document.createElement("p");
  // a.innerText = "Indhold";
  // a.style = "cursor: none; font-size: 20px";
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Til start";
  // a.href = "#frameindex";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 9 januar 1782";
  // a.href = "#chap1";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 13 november 1782";
  // a.href = "#chap2";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 28 januar 1783";
  // a.href = "#chap3";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 5 oktober 1783";
  // a.href = "#chap4";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 25 jan 1784";
  // a.href = "#chap5";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 20 april 1784";
  // a.href = "#chap6";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 2 januar 1785";
  // a.href = "#chap7";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Den 18 februar 1785";
  // a.href = "#chap8";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);
  SetContent(contentdanish);
  SetLetterBugBio(letterBugBio, "DK");
  SetLetterBugContent(letterBugChapter, letterBugContentDanish);

  // document.getElementById("bio2").setAttribute("data", "./bio/DK-ryberg.txt");
  // document.getElementById("bio3").setAttribute("data", "./bio/DK-Moltke.txt");
  // document.getElementById("bio4").setAttribute("data", "./bio/DK-Wessel.txt");
  // document.getElementById("bio5").setAttribute("data", "./bio/DK-jupiter.txt");
}

if (path == "letterbugen") {
  // var a = document.createElement("p");
  // a.innerText = "Content";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Page start";
  // a.href = "#dex";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 9 1782";
  // a.href = "#chap1";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "November 13 1782";
  // a.href = "#chap2";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 28 1783";
  // a.href = "#chap3";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "October 5 1783";
  // a.href = "#chap4";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 25 1784";
  // a.href = "#chap5";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "April 20 1784";
  // a.href = "#chap6";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 2 1785";
  // a.href = "#chap7";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "February 18 1785";
  // a.href = "#chap8";
  // document.getElementById("content").appendChild(a);

  /* ----------------------------------------------------------------------------
   */
  // var a = document.createElement("p");
  // a.innerText = "Content";
  // a.style = "cursor: none; font-size: 20px";
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Page start";
  // a.href = "#dex";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 9 1782";
  // a.href = "#chap1";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "November 13 1782";
  // a.href = "#chap2";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 28 1783";
  // a.href = "#chap3";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "October 5 1783";
  // a.href = "#chap4";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 25 1784";
  // a.href = "#chap5";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "April 20 1784";
  // a.href = "#chap6";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "January 2 1785";
  // a.href = "#chap7";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "February 18 1785";
  // a.href = "#chap8";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);
  SetContent(contentenglish);
  SetLetterBugBio(letterBugBio, "EN");
  SetLetterBugContent(letterBugChapter, letterBugContentEnglish);
  // document.getElementById("bio2").setAttribute("data", "./bio/EN-ryberg.txt");
  // document.getElementById("bio3").setAttribute("data", "./bio/EN-Moltke.txt");
  // document.getElementById("bio4").setAttribute("data", "./bio/EN-Wessel.txt");
  // document.getElementById("bio5").setAttribute("data", "./bio/EN-jupiter.txt");
}

if (path == "letterbugde") {
  // var a = document.createElement("p");
  // a.innerText = "Inhaltsverzeichnis";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Zu Anfang";
  // a.href = "#dex";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Mai 20 1755";
  // a.href = "#chap1";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Januar 9 1782";
  // a.href = "#chap2";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "November 13 1782";
  // a.href = "#chap3";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Januar 28 1783";
  // a.href = "#chap4";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Oktober 5 1783";
  // a.href = "#chap5";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "April 20 1784";
  // a.href = "#chap6";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Januar 2 1785";
  // a.href = "#chap7";
  // document.getElementById("content").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Februar 18 1785";
  // a.href = "#chap8";
  // document.getElementById("content").appendChild(a);

  /*     -------------------------------------------------------------
   */
  // var a = document.createElement("p");
  // a.innerText = "Inhaltsverzeichnis";
  // a.setAttribute("onclick", "closeSidebar()");
  // a.style = "cursor: none; font-size: 20px";

  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Zu Anfang";
  // a.href = "#dex";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Mai 20 1755";
  // a.href = "#chap1";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Januar 9 1782";
  // a.href = "#chap2";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "November 13 1782";
  // a.href = "#chap3";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Januar 28 1783";
  // a.href = "#chap4";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Oktober 5 1783";
  // a.href = "#chap5";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "April 20 1784";
  // a.href = "#chap6";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Januar 2 1785";
  // a.href = "#chap7";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("a");
  // a.innerText = "Februar 18 1785";
  // a.href = "#chap8";
  // a.setAttribute("onclick", "closeSidebar()");
  // document.getElementById("sidebarcontent").appendChild(a);
  SetContent(contentgerman);
  SetLetterBugBio(letterBugBio, "DE");
  SetLetterBugContent(letterBugChapter, letterBugContentGerman);

  // document.getElementById("bio2").setAttribute("data", "./bio/DE-ryberg.txt");
  // document.getElementById("bio3").setAttribute("data", "./bio/DE-Moltke.txt");
  // document.getElementById("bio4").setAttribute("data", "./bio/DE-Wessel.txt");
  // document.getElementById("bio5").setAttribute("data", "./bio/DE-jupiter.txt");
}

function SetLetterBugBio(bio, language) {
  for (let index = 0; index < bio.length; index++) {
    document
      .getElementById("bio" + (index + 2))
      .setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
  }
}
function SetLetterBugImg(img, alt) {
  for (let index = 0; index < img.length; index++) {
    document
      .getElementById("img" + (index + 2))
      .setAttribute("src", "./img/" + img[index]);
    document
      .getElementById("img" + (index + 2))
      .setAttribute("alt", alt[index]);
  }
}
function SetLetterBugContent(chapter, content) {
  for (let index = 0; index < content.length; index++) {
    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    document.getElementById("content").appendChild(a);

    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("onclick", "closeSidebar()");
    document.getElementById("sidebarcontent").appendChild(a);
  }
}
