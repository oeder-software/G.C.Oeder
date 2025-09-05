let inokulation1ContentDanish = [
  "Uddrag af professor Todes historie om indpodningen af kvægpesten.",
  "Historie om Indpodningen i Aaret 1770 i Almindelighed.",
  "Almindelige Bemærkninger.",
  "Historie om indpodningen i vinteren 1772.",
  "Beretning om indpodningen i sommeren 1772",
];
let inokulation1ContentEnglish = [
  "Excerpt from Prof. Tode's History of the Inoculation of the Cattle Plague.",
  "History of the Inoculation in the Year 1770, in General.",
  "General Observations.",
  "History of the Inoculation in Winter 1772",
  "History of the Inoculation in the Summer of 1772",
];
let inokulation1ContentGerman = [
  "Auszug aus Herrn Prof. Tode Geschichte der Einimpfung der Hornviehseuche.",
  "Geschichte der Einimpfung im Jahr 1770. überhaupt.",
  "Allgemeine Bemerkungen.",
  "Geschichte der Einimpfung im Winter 1772.",
  "Geschichte der Einimpfung im Sommer 1772.",
];

let chapter = ["#chap1", "#chap2", "#chap3", "#chap4", "#chap5"];
let img = "./img/covers/inokulation-1.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum.+1776%29&page=431";
SetLinkAndImgToFrontpage(link, img);
PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "inokulation-1-dk") {
  SetContent(chapter, inokulation1ContentDanish);
  infoTxt="Oversat fra tysk."
}
if (path == "inokulation-1-en") {
  infoTxt= "Translated from German."
  SetContent(chapter, inokulation1ContentEnglish);
}
if (path == "inokulation-1-de") {
infoTxt=" Deutsch Original."
  SetContent(chapter, inokulation1ContentGerman);
}

SetFlora();
document.getElementById("info").innerHTML=infoTxt;