let ContentDanish = [
  "uddrag fra “Udsigt over Danmarks zoologiske literatur” 1873.",
  "Rectoris Magnifici Iustitsraad Anchersens Indberetning til Universitetets Patron Gehejmeraad Grev Holstein angaaende den Oederske Disputere-Act.",
  "G. C. Oeders Brev til Greven af Holstein. København, den 17. Februar 1757",
  "Exract af Facultatis Medicæ (Buchwalds og Lodberg Friis’s) Brev til Geheimsraad Holstein af 2 Marts 1752.",
  "Rotbøll Fris's Forklaring over Doctor Oeders Disputats.",
];
let ContentEnglish = [
  "uddrag fra “Udsigt over Danmarks zoologiske literatur” 1873.",
  "Rectoris Magnifici Iustitsraad Anchersens Indberetning til Universitetets Patron Gehejmeraad Grev Holstein angaaende den Oederske Disputere-Act.",
  "G. C. Oeders Brev til Greven af Holstein. København, den 17. Februar 1757",
  "Exract af Facultatis Medicæ (Buchwalds og Lodberg Friis’s) Brev til Geheimsraad Holstein af 2 Marts 1752.",
  "Rotbøll Fris's Forklaring over Doctor Oeders Disputats.",
];
let ContentGerman = [
  "uddrag fra “Udsigt over Danmarks zoologiske literatur” 1873.",
  "Rectoris Magnifici Iustitsraad Anchersens Indberetning til Universitetets Patron Gehejmeraad Grev Holstein angaaende den Oederske Disputere-Act.",
  "G. C. Oeders Brev til Greven af Holstein. København, den 17. Februar 1757",
  "Exract af Facultatis Medicæ (Buchwalds og Lodberg Friis’s) Brev til Geheimsraad Holstein af 2 Marts 1752.",
  "Rotbøll Fris's Forklaring over Doctor Oeders Disputats.",
];
let ContentLat = [
  "Tilbage til Angående Oeder’s afhandling De irritabilitate.",
  "Return to Angående Oeder’s afhandling De irritabilitate.",
  "Zurück zur Angående Oeder’s afhandling De irritabilitate.",
];

let chapter = ["#chap1", "#chap2", "#chap4", "#chap5", "#chap6"];
let chapterLat = [
  "./irrabilitate-dk.html",
  "./irrabilitate-en.html",
  "./irrabilitate-de.html",
];
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

PrependBrBeforeChap(chapter);
SetFlora();

if (path == "irrabilitate-en") {
  SetContent(chapter, ContentEnglish);
  infoTxt= "Translated from Danish and Latin."
}
if (path == "irrabilitate-de") {
    SetContent(chapter, ContentGerman);
    infoTxt=" Übersetz von Danish und Latin."
}
if (path == "irrabilitate-dk") {
    SetContent(chapter, ContentDanish);
    infoTxt="Dansk original og oversat fra latin."
}
if (path == "irrabilitate-lat") {
  // SetContent(contentdanish);
  SetContent(chapterLat, ContentLat);
}

let img = "./img/covers/irrabilitate3.png";
let link = "https://www.kb.dk/e-mat/dod/130020350971.pdf#page=345";
SetLinkAndImgToFrontpage(link, img);


document.getElementById("info").innerHTML=infoTxt;
