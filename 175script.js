let ContentDanish = [
  "Indledning, forskningsstatus.",
  "Oeders begyndelse, den danske tid indtil forvisningen til Oldenburg.",
  "Begyndelsen i Oldenburg.",
  "Kvægsygdomme og kvægvaccination.",
  "Noget om enkekasser.",
  "Mindre arbejder, personlige forhold.",
  "Om handelen i Drontheim og oprettelsen af en ny handelsby i Norge.",
  "Den oldenborgske enkekasse.",
  "Opgør med Danmark, sprog- og nationalitetsspørgsmål.",
  "Kanalbyggeri gennem Slesvig-Holsten.",
  "Den oldenborgske landmåling.",
  "Lønningsspørgsmål, adelsbrev.",
  "Folketælling og statistik.",
  "Militærvæsen i Danmark.",
  "Forvaltningsreform i Danmark.",
  "Valutaproblemer, Om papirpenge.",
  "Slutningen.",
  "Sammenfatning.",
];
let ContentEnglish = [
  "Introduction, state of research.",
  "Oeder’s beginnings, the Danish period up to his banishment to Oldenburg.",
  "Beginnings in Oldenburg.",
  "Cattle plagues and cattle vaccination.",
  "Something about widows’ funds.",
  "Minor works, personal matters.",
  "On the trade of Drontheim and the founding of a new trading town in Norway.",
  "The Oldenburg widow's fund.",
  "Dispute with Denmark, language and nationality issues.",
  "Canal construction through Schleswig-Holstein.",
  "The Oldenburg land survey.",
  "Questions of salary, patent of nobility.",
  "Census and statistics.",
  "Military affairs in Denmark.",
  "Administrative reform in Denmark.",
  "Currency issues, On paper money.",
  "The end.",
  "Summary.",
];
let ContentGerman = [
  "1. Einleitung, Forschungsstand.",
  "2. Oeders Anfänge, die dänische Zeit bis zur Verbannung nach Oldenburg.  ",
  "3. Beginn in Oldenburg. ",
  "4. Viehseuchen und Viehimpfung.  ",
  "5. Etwas von Witwenkassen.  ",
  "6. Kleinere Arbeiten, Persönliches.  ",
  "7. Über den Handel von Drontheim und die Errichtung einer neuen Handelsstadt in Norwegen.",
  "8. Die oldenburgische Witwenkasse.  ",
  "9. Auseinandersetzung mit Dänemark, Sprachen- und Nationalitätenproblem. ",
  "10.Kanalbau durchSchleswig-Holstein. ",
  "11.Die oldenburgische Landesvermessung.  ",
  "12. Besoldungsfragen, Adelspatent.  ",
  "13. Volkszählung und Statistik.  ",
  "14. Militärwesen in Dänemark.  ",
  "15. Verwaltungsreform in Dänemark.  ",
  "16. Währungsprobleme, Über Papiergeld.  ",
  "17. Das Ende.  ",
  "18. Zusammenfassung.",
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
  "#chap15",
  "#chap16",
  "#chap17",
  "#chap18",
];
// export{chapter};
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
let infotxt= "";
if (path == "175-en") {
  // SetContent(contentenglish);
  SetContent(chapter, ContentEnglish);
  SetKap(ContentEnglish);
  infoTxt= "Translated from German."
}
if (path == "175-de") {
  // SetContent(contentgerman);
  SetContent(chapter, ContentGerman);
  SetKap(ContentGerman);
  infoTxt=" Deutsch Original."
}
if (path == "175-dk") {
  // SetContent(contentdanish);
  SetContent(chapter, ContentDanish);
  SetKap(ContentDanish);
  infoTxt="Oversat fra tysk."
}
let img = "./img/covers/175.png";
let link = "https://slaegtsbibliotek.dk/2023/935997.pdf";
SetLinkAndImgToFrontpage(link, img);

SetFlora();
PrependBrBeforeChap(chapter)

document.getElementById("info").innerHTML=infoTxt;

function SetKap(kap) {
  for (let i = 0; i < kap.length; i++) {
    var txt = kap[i];
    var kapx = "kap" + (i + 1);
    var chap = "chap" + (i + 1);
    var a = document.getElementById(kapx);
    a.innerHTML = txt;
    var a = document.createElement("br");
    document.getElementById(chap).prepend(a);
  }
}
  //  var a = document.getElementById("chap3").getBoundingClientRect().top.toFixed();
  // document.getElementById("navbarchapname").innerHTML=a;
