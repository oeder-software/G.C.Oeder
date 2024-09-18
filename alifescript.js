let alifeContentDanish = [
  "Ad snoede veje til et mål",
  "Sammenhængen mellem plantevækst og landbrug",
  " Betænkning over det spørgsmaal: Hvorledes Frihed og Eiendom kunde forskaffes Bondestanden i de Lande, hvor den fattes begge Dele.",
  "Betydningen af folkemængdens forøgelse",
  " Om udstykning af hovedgårde",
  "Tillæg til Betænkning",
  "Virkningerne af Oeders skrifter",
  "Årene 1769 - 1773",
  "Oldenburg - et fristed",
  "Mennesket Georg Christian Oeder",
  "Litteratur",
  "Efterskrift om en gravskrift",
];
let alifeContentEnglish = [
  "Through winding paths to a goal",
  "The Relationship Between Plant Growth and Agriculture",
  "The significance of population increase",
  " On the subdivision of manor farms",
  "Supplement to the Report",
  "The Effects of Oeder's Writings",
  "The Years 1769 - 1773",
  "Oldenburg - A Sanctuary",
  "The Man Georg Christian Oeder",
  "Literature",
  "Afterword about an Epitaph",
];
let alifeContentGerman = [
  "Über gewundene Wege zu einem Ziel",
  "Die Verbindung zwischen Pflanzenwachstum und Landwirtschaft",
  "Bedenken über die frage: Wie Freiheit und Eigentum der Bauernschaft in den Ländern verschafft werden könnten, in denen beides fehlt.",
  "Die Bedeutung der Bevölkerungszunahme",
  "Über die Aufteilung von Hauptgütern",
  "Anhang zu Bedenken",
  "Die Auswirkungen von Oeders Schriften",
  "Die Jahre 1769 - 1773",
  "Oldenburg - ein Zufluchtsort",
  "Der Mensch Georg Christian Oeder",
  "Literatur",
  "Nachschrift zu einer Grabinschrift",
];

let alifeContentChapter = [
  "#chap2",
  "#chap3",
  "#chap15",
  "#chap4",
  "#chap5",
  "#chap6",
  "#chap8",
  "#chap9",
  "#chap10",
  "#chap11",
  "#chap13",
  "#chap14",
];
let alifeImg = [
  "wiedewelt1.png",
  "oeder1.jpg",
  "jhebernstorff.png",
  "moltke1.png",
  "lodde.jpg",
  "betaenkning.jpg",
  "zuslag.png",
  "Schack-Rathlou.jpg",
  "struensee1.png",
  "juliane.jpg",
  "apbernstorff.gif",
  "Halem11.jpg",
  "Complex.jpg",
  "revetlow1.png",
  "Ludwig.jpg",
  "caroline.jpg",
  "multebaer.gif",
];
let alifeBio = [
  "wiedewelt",
  "oeder",
  "Bernstorff",
  "Moltke",
  "lodde",
  "betaenkning",
  "zuslag",
  "schack",
  "struensee",
  "juliane",
  "apbernstorff",
  "Halem",
  "Wessel",
  "Reventlow",
  "Ludwig",
  "caroline",
  "multebaer",
];

document
  .getElementById("img6href")
  .setAttribute(
    "href",
    "https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=georg+christian+oeder+bedenken+%C3%BCber+die+frage&pg=PA1"
  );
document.getElementById("img6href").setAttribute("target", "_blank");
document.getElementById("img6href").style = "cursor: pointer";

document
  .getElementById("img7href")
  .setAttribute(
    "href",
    "https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=georg+christian+oeder+bedenken+%C3%BCber+die+frage&pg=PA75"
  );
document.getElementById("img7href").setAttribute("target", "_blank");
document.getElementById("img7href").style = "cursor: pointer";

document
  .getElementById("img13href")
  .setAttribute("href", "https://faculty.etsu.edu/gardnerr/5510/notes/I-3.pdf");
document.getElementById("img13href").setAttribute("target", "_blank");
document.getElementById("img13href").style = "cursor: pointer";

//TODO:sæt sprog i if samt sæt href samt lav sidebar

SetAlifeImg(alifeImg);
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "alifedk") {
  var a = document.createElement("a");
  a.innerText = "Indhold";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Til toppen";
  a.href = "#dex";
  var b = a;
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  var a = document.createElement("a");
  a.innerText = "Indhold";
  a.style = "cursor: none; font-size: 16px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Til toppen";
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  SetAlifeContent(alifeContentChapter, alifeContentDanish);

  SetAlifeBio(alifeBio, "DK");
}

if (path == "alifede") {
  var a = document.createElement("a");
  a.innerText = "Inhaltsverzeichnis";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Zu Anfang";
  a.href = "#dex";
  var b = a;
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  var a = document.createElement("a");
  a.innerText = "Inhaltsverzeichnis";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Zu Anfang";
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  SetAlifeContent(alifeContentChapter, alifeContentGerman);
  SetAlifeBio(alifeBio, "DE");
}
if (path == "alifeen") {
  var a = document.createElement("a");
  a.innerText = "ontent";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Page start";
  a.href = "#dex";
  var b = a;
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  var a = document.createElement("a");
  a.innerText = "Content";
  a.style = "cursor: none; font-size: 16px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Page start";
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  SetAlifeContent(alifeContentChapter, alifeContentEnglish);

  SetAlifeBio(alifeBio, "EN");
}
//https://en.wikipedia.org/wiki/Complex_plane
function SetAlifeBio(bio, language) {
  for (let index = 0; index < bio.length; index++) {
    document
      .getElementById("bio" + (index + 1))
      .setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
  }
}
function SetAlifeImg(img) {
  for (let index = 0; index < img.length; index++) {
    document
      .getElementById("img" + (index + 1))
      .setAttribute("src", "./img/" + img[index]);
    // document
    //   .getElementById("img" + (index + 1))
    //   .setAttribute("alt", alt[index]);
  }
}
function SetAlifeContent(chapter, content) {
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
