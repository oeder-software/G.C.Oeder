document.getElementById("img1").setAttribute("src", "./img/laurvig.jpg");

document.getElementById("sidebarcontent").style = "cursor: pointer;";
let chapter = ["#chap1", "#chap2", "#chap3", "#chap4", "#chap5", "#chap6"];
let letterCheContentDanish = [
  "Den 20 maj 1755",
  "Den 21 maj 1755",
  "Den 22 maj 1755",
  "Den 25 maj 1755",
  "Den 27 maj 1755",
  "Den 21 juni 1755",
];
let letterCheContentEnglish = [
  "May 20 1755",
  "May 21 1755",
  "May 22 1755",
  "May 25 1755",
  "May 27 1755",
  "June 21 1755",
];
let letterCheContentGerman = [
  "Mai 20 1755",
  "Mai 21 1755",
  "Mai 22 1755",
  "Mai 25 1755",
  "Mai 27 1755",
  "Juni 21 1755",
];
let image = ["./img/laurvig.jpg"];
let letterCheBio = ["laurvig"];
SetImage(image);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterchedk") {
  SetContent(contentdanish);
  SetLetterCheBio(letterCheBio, "DK");
  SetAlifeContent(chapter, letterCheContentDanish);
}
if (path == "lettercheen") {
  SetContent(contentenglish);
  SetLetterCheBio(letterCheBio, "EN");
  SetAlifeContent(chapter, letterCheContentEnglish);
}

if (path == "letterchede") {
  SetContent(contentgerman);
  SetLetterCheBio(letterCheBio, "DE");
  SetAlifeContent(chapter, letterCheContentGerman);
}
