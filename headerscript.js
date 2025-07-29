var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "index") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png); background-size: 110px 120px, 120px 120px, cover;";
}
// var en = "krauter-1-en";
// var dk = "krauter-1-dk";
// var de = "krauter-1-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Knowledge of Herbs. Part 1",
//     "Urtevidenskaben. Del 1",
//     "Kräuterkenntniß. theil 1",
//     "flora"
//   );
// }
// var en = "krauter-2-en";
// var dk = "krauter-2-dk";
// var de = "krauter-2-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Knowledge of Herbs. Part 2",
//     "Urtevidenskaben. Del 2",
//     "Kräuterkenntniß. theil 2",
//     "flora"
//   );
// }

// var en = "efterretning-en";
// var dk = "efterretning-dk";
// var de = "efterretning-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "An Account of a Work",
//     "Efterretning om et Verk",
//     "Nachricht von einem Werke",
//     "flora"
//   );
// }

// if (path == "letterchedk" || path == "letterchede" || path == "lettercheen") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/leontodontrans.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Charlotte Hedevig Ericius";
// }
// if (
//   path == "lettersuhm-dk" ||
//   path == "lettersuhm-de" ||
//   path == "lettersuhm-en"
// ) {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/suhm.jpg),url(./img/headerbg.png); background-size: 110px 120px, 100px 120px, cover;";
//   document.getElementById("headerh2").innerText = "Peter Frederik Suhm";
// }

// if (path == "letterbugdk" || path == "letterbugde" || path == "letterbugen") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/bugge.jpg),url(./img/headerbg.png); background-size: 110px 120px, 120px 120px, cover;";
//   document.getElementById("headerh2").innerText = "Thomas Bugge";
// }

// if (path == "letterlindk" || path == "letterlinde" || path == "letterlinen") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/linne.jpg),url(./img/headerbg.png); background-size: 110px 120px, 100px 120px, cover;";
//   document.getElementById("headerh2").innerText = "Carl von Linné";
// }
// if (
//   path == "letterbern-dk" ||
//   path == "letterbern-de" ||
//   path == "letterbern-en"
// ) {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/jhebernstorff.png),url(./img/headerbg.png); background-size: 110px 120px, 100px 120px, cover;";
//   document.getElementById("headerh2").innerText = "J. H. E. Bernstorff";
// }

// // if (path == "andenkendk" || path == "andenkende" || path == "andenkenen") {
// //   document.querySelector("body").style =
// //     "background-image:  url(./img/logo.png), url(./img/halem1.jpg),url(./img/headerbg.png);";
// // }
// var en = "oederianaen";
// var dk = "oederianadk";
// var de = "oederianade";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(en, dk, de, "Oederiana", "Oederiana", "Oederiana", "flora");
// }

// if (path == "bedenkendk" || path == "bedenkende" || path == "bedenkenen") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/bedenkenforside.png),url(./img/headerbg.png);";
// }
// // var en = "indexen";
// // var dk = "indexdk";
// // var de = "indexde";
// // if (path == en || path == dk || path == de) {
// //   HeaderTitle(en, dk, de, "Home", "Startside", "Startseite", "flora");
// // }

// var en = "andenkenen";
// var dk = "andenkendk";
// var de = "andenkende";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "In Memory of Oeder",
//     "Til minde om Oeder",
//     "Andenken an Oeder",
//     "flora"
//   );
// }

// var en = "bedenkenadditionen";
// var dk = "bedenkenadditiondk";
// var de = "bedenkenadditionde";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Addition to the Consideration",
//     "Tillæg til betænkningen",
//     "Zusäße Zu dem Bedenken",
//     "flora"
//   );
// }

// var en = "bedenkensupplementen";
// var dk = "bedenkensupplementdk";
// var de = "bedenkensupplementde";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Supplement to the Consideration",
//     "Tilføjelser til betænkningen",
//     "Zulage Zu dem Bedenken",
//     "flora"
//   );
// }

// var en = "bedenkenen";
// var dk = "bedenkendk";
// var de = "bedenkende";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Consideration on the Question:",
//     "Betænknig over spørgsmålet:",
//     "Bedenken über die Frage:",
//     "flora"
//   );
// }

// var en = "botanicaljourney-en";
// var dk = "botanicaljourney-dk";
// var de = "botanicaljourney-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Oeders Botanical Journey",
//     "Oeders Botaniske rejse",
//     "Oeders Botanische Reise",
//     "crest"
//   );
// }

// var en = "dissertation-en";
// var dk = "dissertation-dk";
// var de = "dissertation-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Oeders Inaugural Dissertation",
//     "Oeders Inauguralafhandling",
//     "Oeders Inaugural-Dissertation",
//     "flora"
//   );
// }

// var en = "familyoederen";
// var dk = "familyoederdk";
// var de = "familyoederde";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Oeder's Family Tree",
//     "Oeder's stamtræ",
//     "Oeder's Stammbaum",
//     "crest"
//   );
// }

// var en = "familynicoen";
// var dk = "familynicodk";
// var de = "familynicode";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Family Tree, Family Oeder",
//     "Stamtræ familien Oeder",
//     "Stambaum Familie Oeder",
//     "crest"
//   );
// }

// var en = "munzen-en";
// var dk = "munzen-dk";
// var de = "munzen-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "On Banco, Courant, and Coinage.",
//     "On Banco, Courant, og Mønt.",
//     "Ueber Banco, Courant, und Münzen.",
//     "flora"
//   );
// }

// var en = "alifeen";
// var dk = "alifedk";
// var de = "alifede";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(en, dk, de, "A life.", "Et liv.", "Ein Leben.", "flora");
// }

// var en = "munzen-en";
// var dk = "munzen-dk";
// var de = "munzen-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "On Banco, Courant, and Coinage.",
//     "On Banco, Courant, og Mønt.",
//     "Ueber Banco, Courant, und Münzen.",
//     "flora"
//   );
// }

// var en = "ueberpapirgeld-en";
// var dk = "ueberpapirgeld-dk";
// var de = "ueberpapirgeld-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "On Paper Money",
//     "Om Papirpenge",
//     "Ueber Papirgeld",
//     "flora"
//   );
// }
// en = "gedanken-en";
// dk = "gedanken-dk";
// de = "gedanken-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Reflections on Paper Money.",
//     "Tanker over PapirPenge.",
//     "Gedanken über das PapirGeld",
//     "flora"
//   );
// }
// en = "hamburg-en";
// dk = "hamburg-dk";
// de = "hamburg-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Hamburg, General Relief Institution.",
//     "Hamburg, Almindelige Forsørgelsesanstalt.",
//     "Hamburg Allgemeinen Versorgungsanstalt.",
//     "flora"
//   );
// }
// en = "trondheim-en";
// dk = "trondheim-dk";
// de = "trondheim-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Commerce in Trondheim",
//     "Om handelen i Trondheim ",
//     "Von Handel in Trondheim.",
//     "flora"
//   );
// }
// en = "irrabilitate-en";
// dk = "irrabilitate-dk";
// de = "irrabilitate-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Angående Oeder’s afhandling De irritabilitate.",
//     "Angående Oeder’s afhandling De irritabilitate.",
//     "Angående Oeder’s afhandling De irritabilitate.",
//     "crest"
//   );
// }
// if (path == "irrabilitate-lat") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/vaaben3.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Irrabilitate";
// }
// en = "bedenkenprefaceen";
// dk = "bedenkenprefacedk";
// de = "bedenkenprefacede";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Preface to Consideration",
//     "Forord til betænkning",
//     "Vorrede zu Bedenken",
//     "crest"
//   );
// }
// en = "opmaaling-en";
// dk = "opmaaling-dk";
// de = "opmaaling-de";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Determination of the Area of the Lands.",
//     "Bestemmelse af Landenes Areal.",
//     "Bestimmung des Areals der Länder.",
//     "crest"
//   );
// }
// de = "175-de";
// en = "175-en";
// dk = "175-dk";
// if (path == en || path == dk || path == de) {
//   HeaderTitle(
//     en,
//     dk,
//     de,
//     "Georg Christian von Oeder’s Oldenburg Period.",
//     "Georg Christian von Oeders oldenborgske tid. ",
//     "Georg Christian von Oeders Oldenburger Zeit.",
//     "flora"
//   );
// }

function HeaderTitle(pageen, pagedk, pagede, titleen, titledk, titlede, img) {
  switch (path) {
    case pagedk:
      document.getElementById("headerh2").innerText = titledk;
      break;
    case pagede:
      document.getElementById("headerh2").innerText = titlede;
      break;
    case pageen:
      document.getElementById("headerh2").innerText = titleen;
      break;
  }
  // SetRightImg(img);
  // document.querySelector("body").style =
  //   "background-image:  url(./img/logo.png)," +
  //   img +
  //   ",url(./img/headerbg.png);";
}
function SetRightImg(img) {
  if (img == "flora") {
    var randomimg = Math.floor(Math.random() * 14);
    document.querySelector("body").style =
      "background-image:  url(./img/logo.png)," +
      "url(./img/flora" +
      randomimg +
      ".png)" +
      ",url(./img/headerbg.png);";
  }
  if (img == "oeder") {
    document.querySelector("body").style =
      "background-image:  url(./img/logo.png), url(./img/oederlogo.png)  ,url(./img/headerbg.png);";
    document.querySelector("body").style.backgroundSize =
      "110px 120px, 120px 120px, cover";
  }
  if (img == "crest") {
    document.querySelector("body").style =
      "background-image:  url(./img/logo.png), url(./img/vaaben3.png)  ,url(./img/headerbg.png);";
    document.querySelector("body").style.backgroundSize =
      "110px 120px, 100px 120px, cover";
  }
}
// switch (path) {
//   case "bedenkensupplementen":
//     document.getElementById("headerh2").innerText =
//       "Supplement to the Consideration";
//     break;

//   case "bedenkensupplementdk":
//     document.getElementById("headerh2").innerText =
//       "Tilføjelser til betænkningen";
//     break;
//   case "bedenkensupplementde":
//     document.getElementById("headerh2").innerText = "Zulage Zu dem Bedenken";
//     break;
// }
// switch (path) {
//   case "bedenkenen":
//     document.getElementById("headerh2").innerText =
//       "Consideration on the Question:";
//     break;

//   case "bedenkendk":
//     document.getElementById("headerh2").innerText =
//       "Overvejelser over spørgsmålet:";
//     break;
//   case "bedenkende":
//     document.getElementById("headerh2").innerText = "Bedenken über die Frage:";
//     break;
// }
// if (
//   path == "botanicaljourney-de" ||
//   path == "botanicaljourney-dk" ||
//   path == "botanicaljourney-en"
// ) {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/botaniskhave.jpg),url(./img/headerbg.png);";
// }

// switch (path) {
//   case "botanicaljourney-de":
//     document.getElementById("headerh2").innerText = "Oeders Botanische Reise";
//     break;

//   case "botanicaljourney-dk":
//     document.getElementById("headerh2").innerText = "Oeders Botaniske rejse";
//     break;
//   case "botanicaljourney-en":
//     document.getElementById("headerh2").innerText = "Oeders Botanical Journey";
//     break;
// }
// if (path == "dissertation-de") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/Dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inaugural-Dissertation,";
// }
// if (path == "dissertation-dk") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/Dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inauguralafhandling";
// }
// if (path == "dissertation-en") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/Dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inaugural Dissertation,";
// }

// switch (path) {
//   case "dissertation-de":
//     document.getElementById("headerh2").innerText =
//       "oeders Inaugural-Dissertation";
//     break;

//   case "dissertation-dk":
//     document.getElementById("headerh2").innerText =
//       "Oeders Inauguralafhandling";
//     break;
//   case "dissertation-en":
//     document.getElementById("headerh2").innerText =
//       "Oeders Inaugural Dissertation";
//     break;
// }
// switch (path) {
//   case "familynicodk":
//     document.getElementById("headerh2").innerText = "Stamtræ familien Oeder";
//     break;

//   case "familynicode":
//     document.getElementById("headerh2").innerText = "Stambaum Familie Oeder";
//     break;
//   case "familynicoen":
//     document.getElementById("headerh2").innerText = "Family Oeder";
//     break;
// }

// switch (path) {
//   case "familyoederdk":
//     document.getElementById("headerh2").innerText = "Oeder's stamtræ";
//     break;
// }
// if (
//   path == "familynicodk" ||
//   path == "familynicode" ||
//   path == "familynicoen" ||
//   path == "familyoederdk" ||
//   path == "familyoederde" ||
//   path == "familyoederen"
// ) {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
// }
//                                             switch (path) {
//                                               case "alifedk":
//                                                 document.getElementById("headerh2").innerText = "Et liv";
//                                                 break;
//                                               case "alifeen":
//                                                 document.getElementById("headerh2").innerText = "A Life";
//                                                 break;
//                                               case "alifede":
//                                                 document.getElementById("headerh2").innerText = "Ein Leben";
//                                                 break;
//                                             }
// if (path == "alifedk" || path == "alifede" || path == "alifeen") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
// }
// if (path == "efterretning-de") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/efterretning.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Nachricht von einem Werke,";
// }
// if (path == "efterretning-dk") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/efterretning.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Efterretning om et Verk,";
// }
// if (path == "krauter-1-de") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/krauter1.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Kräuterkenntniß theil 1";
// }
// if (path == "krauter-1-dk") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/krauter1.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Urtevidenskaben. Del 1";
// }
// if (path == "krauter-1-en") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/krauter1.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Knowledge of Herbs. Part 1";
// }

// if (path == "krauter-2-de") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/krauter1.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Kräuterkenntniß theil 2";
// }
// if (path == "krauter-2-dk") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/krauter1.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Urtevidenskaben. Del 2";
// }
// if (path == "krauter-2-en") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/krauter1.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Knowledge of Herbs. Part 2";
// }
// if (path == "efterretning-en") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/efterretning.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "An Account of a Work,";
// }
// if (path == "dissertation-de") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/Dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inaugural-Dissertation,";
// }
// if (path == "dissertation-dk") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/Dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inauguralafhandling";
// }
// if (path == "dissertation-en") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/Dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inaugural Dissertation,";
// }
// if (path == "oederianadk" || path == "oederianade" || path == "oederianaen") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Oederiana|";
// }
// if (path == "dissertation-de") {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/dissertation.png),url(./img/headerbg.png);";
//   document.getElementById("headerh2").innerText = "Inaugural-Dissertation";
// }
// if (
//   path == "botanicaljourney-de" ||
//   path == "botanicaljourney-dk" ||
//   path == "botanicaljourney-en"
// ) {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/botaniskhave.jpg),url(./img/headerbg.png);";
// }

// if (
//   // path == "bedenkenpreface-dk" ||
//   // path == "bedenkenpreface-de" ||
//   // path == "bedenkenpreface-en" ||
//   path == "bedenkenadditionde" ||
//   path == "bedenkenadditiondk" ||
//   path == "bedenkenadditionen" ||
//   path == "bedenkensupplementde" ||
//   path == "bedenkensupplementdk" ||
//   path == "bedenkensupplementen"
// ) {
//   document.querySelector("body").style =
//     "background-image:  url(./img/logo.png), url(./img/bedenkenforside.png),url(./img/headerbg.png);";
//   // document.querySelector("body").style =
//   //   "background-size: 110px 120px, 70px 110px, cover;";
// }
// switch (path) {
//   case "indexdk":
//     document.getElementById("headerh2").innerText = "Startside";
//     break;
//   case "indexde":
//     document.getElementById("headerh2").innerText = "Startseite";
//     break;
//   case "indexen":
//     document.getElementById("headerh2").innerText = "Home";
//     break;
// }
// switch (path) {
//   case "andenkendk":
//     document.getElementById("headerh2").innerText = "Til minde om Oeder";
//     break;
//   case "andenkende":
//     document.getElementById("headerh2").innerText = "Andenken an Oeder";
//     break;
//   case "andenkenen":
//     document.getElementById("headerh2").innerText = "In Memory of Oeder";
//     break;
// }
// switch (path) {
//   case "bedenkenprefacedk":
//     document.getElementById("headerh2").innerText = "Forord til Betænkning";
//     break;
//   case "bedenkenprefaceen":
//     document.getElementById("headerh2").innerText =
//       "Preface to the Consideration";
//     break;
//   case "bedenkenprefacede":
//     document.getElementById("headerh2").innerText = "Vorrede zu Bedenken";
//     break;
// }

// switch (path) {
//   case "bedenkenadditionen":
//     document.getElementById("headerh2").innerText =
//       "Addition to the Consideration";
//     break;

//   case "bedenkenadditiondk":
//     document.getElementById("headerh2").innerText = "Tillæg til betænkningen";
//     break;
//   case "bedenkenadditionde":
//     document.getElementById("headerh2").innerText = "Zusäße Zu dem Bedenken";
//     break;
// }
