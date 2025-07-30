var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "home1");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "homea");
document.getElementById("home1").appendChild(a);
//biography
var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "bio");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "biographyHeadName");
document.getElementById("bio").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "biography");
document.getElementById("bio").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manu");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "manuscriptsHeadName");
document.getElementById("manu").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "manuscripts");
document.getElementById("manu").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "jour");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "journalsHeadName");
document.getElementById("jour").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "journals");
document.getElementById("jour").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "letter");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "lettersHeadName");
document.getElementById("letter").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("id", "letters");
a.setAttribute("class", "drop1");
document.getElementById("letter").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "tree");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "familytreeHeadName");
document.getElementById("tree").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "familytree");
document.getElementById("tree").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "doc");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "documentHeadName");
document.getElementById("doc").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "document");
document.getElementById("doc").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "soft");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "softa");
document.getElementById("soft").appendChild(a);
document.getElementById("softa").innerText = "Oeder Software";
document
  .getElementById("softa")
  .setAttribute("href", "http://oeder-software.github.io/dev");

var familytreeListElement = ["familynico", "familyoeder"];
var familytreeNameDk = ["Famlien Oeder", "Georg Christian Oeder"];
var familytreeNameDe = ["Famlie Oeder", "Georg Christian Oeder"];
var familytreeNameEn = ["Family Oeder", "Georg Christian Oeder"];
var familytreeHeadName = ["Stamtræ", "Stammbaum", "Family Tree"];
let familytreeHeaderImgRight = ["crest", "crest"];
var familytreeElements = [
  familytreeListElement,
  familytreeNameDk,
  familytreeNameDe,
  familytreeNameEn,
  familytreeHeadName,
  familytreeHeaderImgRight,
];
var linksListElement = ["links-"];
var linksNameDk = ["Links til dokumenter"];
var linksNameDe = ["Links zu Unterlagen"];
var linksNameEn = ["Links to Documents"];
var linksHeadName = ["Links", "Links", "Links"];
let linksHeaderImgRight = ["crest"];
var linksElements = [
  linksListElement,
  linksNameDk,
  linksNameDe,
  linksNameEn,
  linksHeadName,
  linksHeaderImgRight,
];

var lettersListElement = [
  "letterche",
  "letterbug",
  "letterlin",
  "letterbern-",
  "lettersuhm-",
  "lettergun-",
  "letterherzog-",
];
var lettersNameDk = [
  "Fra Charlotte Hedevig Ericius",
  "Til Thomas Bugge",
  "Til Carl von Linné",
  "Til J. H. E. Bernstorff",
  "Til Peter Fredrik Suhm",
  "Til Johan Ernst Gunnerus",
  "Til Herzog Peter Friedrich Ludwig",
];
var lettersNameDe = [
  "Von Charlotte Hedevig Ericius",
  "An Thomas Bugge",
  "An Carl von Linné",
  "An J. H. E. Bernstorff",
  "An Peter Fredrik Suhm",
  "An Johan Ernst Gunnerus",
  "An Herzog Peter Friedrich Ludwig",
];
var lettersNameEn = [
  "From Charlotte Hedevig Ericius",
  "To Thomas Bugge",
  "To Carl von Linné",
  "To J. H. E. Bernstorff",
  "To Peter Fredrik Suhm",
  "To Johan Ernst Gunnerus",
  "To Herzog Peter Friedrich Ludwig",
];
let lettersHeaderImgRight = [
  "flora",
  "flora",
  "flora",
  "flora",
  "flora",
  "flora",
  "flora",
];

var lettersHeadName = ["Breve", "Briefe", "Letters"];
var letterElements = [
  lettersListElement,
  lettersNameDk,
  lettersNameDe,
  lettersNameEn,
  lettersHeadName,
  lettersHeaderImgRight,
];
var biographyHeadName = ["Biografi", "Biographie", "Biography"];
var biographyListElement = ["alife", "andenken", "175-"];
var biographyNameDk = [
  "Et liv -med mere end en indsats",
  "Til minde om Oeder",
  "Georg Christian von Oeders oldenborgske tid.",
];
var biographyNameDe = [
  "Ein Leben - mit mehr als ein einsatz",
  "Andenken an Oeder",
  "Georg Christian von Oeders Oldenburger Zeit",
];
var biographyNameEn = [
  "A life - with more than one effort",
  "In memory of Oeder",
  "Georg Christian von Oeder’s Oldenburg Period.",
];
let biographyHeaderImgRight = ["flora", "flora", "flora"];
var biographyElements = [
  biographyListElement,
  biographyNameDk,
  biographyNameDe,
  biographyNameEn,
  biographyHeadName,
  biographyHeaderImgRight,
];

var journalsHeadName = ["Tidsskrifter", "Zeitschriften", "Journals"];
var journalsListElement = [
  "munzen-",
  "ueberpapirgeld-",
  "gedanken-",
  "hamburg-",
  "trondheim-",
  "opmaaling-",
  "bremen-",
  "1769-",
  "wittwen-etwas-",
  "wittwen-mehreres-",
  "wittwen-teori-",
  "wittwen-erfahrung-",
  "inokulation-1-",
  "inokulation-2-",
  "inokulation-3-",
  "inokulation-4-",
  "commission-",
  "landes-vermessung1-",
  "landes-vermessung2-",
  "osnabruck-",
];
var journalsNameDk = [
  "Om Banco, Courant, og Mønt.",
  "Om Papirpenge.",
  "Tanker over PapirPenge.",
  "Hamburg forsørgelsesanstalt.",
  "Om handlen i Trondheim",
  "Bestemmelse af Landenes Areal.",
  "Om den Bremiske Enkekasse.",
  "Vedrørende Folketælling i året 1769",
  "1. Noget om Enkekasser",
  "2. Noget Mere om Enkekasser.",
  "3. Teori om enkekasser",
  "4. Enkekasser, endnu en Erfaring.",
  "1. Om Inokulationen af hornkvægpesten.",
  "2. Historien om Indpodningen paa Aunøe.",
  "3. Oeders afhandlinger om inokulation",
  "4. Mine tanker om inokulationen",
  "Afhandling til Kommission af 1772.",
  "Beretning om den hersteds Landmåling.",
  "Fortsættelse af den lokale landopmåling.",
  "Osnabrücks og Oldenburgs befolkning.",
];
var journalsNameDe = [
  "Ueber Banco, Courant, and Münzen.",
  "Ueber PapirGeld.",
  "Gedanken über das PapirGeld.",
  "Hamburg, Versorgungsanstalt.",
  "Vom handel in Trondheim",
  "Bestimmung des Areals der Länder.",
  "Ueber die Bremiiche WittwenCasse.",
  "Betreffend die Volkszählung im Jahre 1769;",
  "1. Etwas von Wittwenkassen.",
  "2. Ein Mehreres von Witwenkassen.",
  "3. Theorie zu Witwenkassen",
  "4. Witwenkassen, Noch eine Erfahrung.",
  "1. Über die Inokulation der Hornviehseuche.",
  "2. Geschichte der Einimpfung auf Aunøe.",
  "3. Oeders Abhandlungen über die Inokulation",
  "4. Meine izige Gedanken über die Inokulation.",
  "Aufsatz zu diejenige Commission von 1772.",
  "Nachricht von hiesiger Landes-Vermessung.",
  "Fortsetzung der  hiesiger Landes-Vermessung.",
  "Osnabrückische und Oldenburgische Bevõlkerung.",
];
var journalsNameEn = [
  "On Banco, Courant, and Coinage.",
  "On Paper Money.",
  "Reflections on Paper Money.",
  "Hamburg,  General Relief Institution.",
  "Commerce in Trondheim",
  "Determination of the Area of the Lands.",
  "On the Bremen Widow's Fund.",
  "Concerning the census in the year 1769",
  "1. Something about Widow Funds",
  "2. Further Considerations on Widow’s Funds.",
  "3. Theory of Widow Funds",
  "4. Widow Funds, another Observation.",
  "1. On the Inoculation of the Cattle Plague.",
  "2. History of the Inoculationon Aunø.",
  "3. Oeder’s Treatises on Inoculation",
  "4. My present thoughts on the inoculation.",
  "Treatise to the Commission from 1772.",
  "Report on the local Land Survey.",
  "Continuation of the local land survey.",
  "Population of Osnabrück and Oldenburg.",
];
let journalsHeaderImgRight = [
  "crest",
  "crest",
  "crest",
  "flora",
  "flora",
  "crest",
  "crest",
  "flora",
  "crest",
  "flora",
  "flora",
  "crest",
  "flora",
  "crest",
  "crest",
  "flora",
  "flora",
  "crest",
  "crest",
  "crest",
];
var journalsElements = [
  journalsListElement,
  journalsNameDk,
  journalsNameDe,
  journalsNameEn,
  journalsHeadName,
  journalsHeaderImgRight,
];

var manuscriptHeadName = ["Manuskripter", "Manuskripte", "Manuscripts"];
var manuscriptsListElemnts = [
  "bedenkenpreface",
  "bedenken",
  "bedenkenaddition",
  "bedenkensupplement",
  "botanicaljourney-",
  "oederiana",
  "krauter-1-",
  "krauter-2-",
  "efterretning-",
  "dissertation-",
  // "munzen-",
  // "ueberpapirgeld-",
  // "gedanken-",
  // "hamburg-",
  // "trondheim-",
  // "opmaaling-",
  "irrabilitate-",
  "svar-",
  // "bremen-",
  // "1769-",
  // "wittwen-etwas-",
  // "testhtml-",
];
var manuscriptsNameDk = [
  "Forord til betænkning",
  "Betænkning over spørgsmålet:",
  "Tillæg til betænkningen",
  "Tilføjelse til betænkningen",
  "Oeders botaniske rejse",
  "Oeder's forsvar, Oederiana",
  "Indledning til Urtevidenskaben. 1",
  "Indledning til Urtevidenskaben. 2",
  "Efterretning om et Verk.",
  "Oeders Inauguralafhandling",
  // "Om Banco, Courant, og Mønt.",
  // "Om Papirpenge.",
  // "Tanker over PapirPenge.",
  // "Hamburg forsørgelsesanstalt.",
  // "Om handlen i Trondheim",
  // "Bestemmelse af Landenes Areal.",
  "Oeder’s afhandling De irritabilitate.",
  "Svar paa Recensionen.",
  // "Om den Bremiske Enkekasse.",
  // "Vedrørende Folketælling i året 1769",
  // "test",
];
var manuscriptsNameDe = [
  "Vorrede zu dem Bedenken",
  "Bedenken über die Frage:",
  "Zusätze Zu dem Bedenken",
  "Zulage Zu dem Bedenken",
  "Oeders botanische reise",
  "Oeders Verteidigung, Oederiana",
  "Kräuterkenntniß theil 1",
  "Kräuterkenntniß theil 2",
  "Nachricht von einem Werke",
  "Oeder's Inaugural-Dissertation",
  // "Ueber Banco, Courant, and Münzen.",
  // "Ueber PapirGeld.",
  // "Gedanken über das PapirGeld.",
  // "Hamburg, Versorgungsanstalt.",
  // "Vom handel in Trondheim",
  // "Bestimmung des Areals der Länder.",
  "Oeder’s afhandling De irritabilitate.",
  "Antwort auf die Rezension.",
  // "Ueber die Bremiiche WittwenCasse.",
  // "Betreffend die Volkszählung im Jahre 1769;",
  // "Etwas von Wittwenkassen.",

  // "testhtml-",
];
var manuscriptsNameEn = [
  "Preface to the Consideration",
  "Consideration on the Question:",
  "Addition to the Consideration",
  "Supplement to the Consideration",
  "Oeders botanical journey",
  "Oeder's defence, Oederiana",
  "Introduction to the Knowledge of Herbs. 1",
  "Introduction to the Knowledge of Herbs. 2",
  "An Account of a Work, Flora Danica",
  "Inaugural Dissertation",
  // "On Banco, Courant, and Coinage.",
  // "On Paper Money.",
  // "Reflections on Paper Money.",
  // "Hamburg,  General Relief Institution.",
  // "Commerce in Trondheim",
  // "Determination of the Area of the Lands.",
  "Oeder’s afhandling De irritabilitate.",
  "Reply to the review.",
  // "On the Bremen Widow's Fund.",
  // "Concerning the census in the year 1769",
  // "testhtml-",
];
let manuscriptsHederImgRight = [
  "crest",
  "flora",
  "flora",
  "flora",
  "crest",
  "flora",
  "flora",
  "flora",
  "flora",
  "flora",
  // "crest",
  // "crest",
  // "crest",
  // "flora",
  // "flora",
  // "crest",
  "flora",
  "crest",
  // "crest",
  // "flora",
  // "crest",
];
var manuElements = [
  manuscriptsListElemnts,
  manuscriptsNameDk,
  manuscriptsNameDe,
  manuscriptsNameEn,
  manuscriptHeadName,
  manuscriptsHederImgRight,
];
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

// // home sidebar
var a = document.createElement("li");
a.setAttribute("id", "home1m");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "homeam");
document.getElementById("home1m").appendChild(a);
// Biogrphy Sidebar
var a = document.createElement("li");
a.setAttribute("id", "biom");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "biographyResponsiveHeadName");
a.setAttribute("onclick", "HideMenuElements('biographyResponsive')");
document.getElementById("biom").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "biographyResponsive");
a.style.display = "none";
document.getElementById("biom").appendChild(a);

// function HideMenuElements() {
//   document.getElementById("biographyResponsive").style.display = "block";
// }

var a = document.createElement("li");
// a.setAttribute("class", "listelement");
a.setAttribute("id", "manum");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "manuscriptsResponsiveHeadName");
a.setAttribute("onclick", "HideMenuElements('manuscriptsResponsive')");
document.getElementById("manum").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "manuscriptsResponsive");
a.style.display = "none";
document.getElementById("manum").appendChild(a);

var a = document.createElement("li");
// a.setAttribute("class", "listelement");
a.setAttribute("id", "jourm");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "journalsResponsiveHeadName");
a.setAttribute("onclick", "HideMenuElements('journalsResponsive')");
document.getElementById("jourm").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "journalsResponsive");
a.style.display = "none";
document.getElementById("jourm").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "letterm");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "lettersResponsiveHeadName");
a.setAttribute("onclick", "HideMenuElements('lettersResponsive')");
document.getElementById("letterm").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "lettersResponsive");
a.style.display = "none";
document.getElementById("letterm").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "treem");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "familytreeResponsiveHeadName");
a.setAttribute("onclick", "HideMenuElements('familytreeResponsive')");
document.getElementById("treem").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "familytreeResponsive");
a.style.display = "none";
document.getElementById("treem").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "docm");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "documentResponsiveHeadName");
a.setAttribute("onclick", "HideMenuElements('documentResponsive')");
document.getElementById("docm").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "documentResponsive");
a.style.display = "none";
document.getElementById("docm").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "softm");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "softam");
document.getElementById("softm").appendChild(a);
document.getElementById("softam").innerText = "Oeder Software";
document
  .getElementById("softam")
  .setAttribute("href", "http://oeder-software.github.io/dev");

// document.getElementById("homea").innerText = "Home";
// document.getElementById("homea").setAttribute("href", "indexdk.html");
// document.getElementById("homeam").innerText = "Home";
// document.getElementById("homeam").setAttribute("href", "indexdk.html");
CreateManuscriptsInNavbar(biographyElements, "biography");
// CreateManuscriptsInNavbar(homeElements, "index");
CreateManuscriptsInNavbar(manuElements, "manuscripts");
CreateManuscriptsInNavbar(journalsElements, "journals");
CreateManuscriptsInNavbar(letterElements, "letters");
CreateManuscriptsInNavbar(familytreeElements, "familytree");
CreateManuscriptsInNavbar(linksElements, "document");

function CreateManuscriptsInNavbar(elements, kategory) {
  var elem = elements[0];
  var elemNaDk = elements[1];
  var elemNaDe = elements[2];
  var elemNaEn = elements[3];
  var headName = elements[4];
  var headerImgRight = elements[5];
  var lang = "";
  var elemText = "";
  let lastChar = path.charAt(path.length - 1);
  for (let i = 0; i < elem.length; i++) {
    let sideMenu = elem[i] + "m";
    var page = elem[i];
    var a = document.createElement("li");
    a.setAttribute("class", "listelement");
    a.setAttribute("id", kategory + i);
    document.getElementById(kategory).appendChild(a);

    var a = document.createElement("a");
    a.setAttribute("id", elem[i]);
    document.getElementById(kategory + i).appendChild(a);

    var a = document.createElement("li");
    a.setAttribute("onclick", "closeSidebar()");
    a.setAttribute("id", kategory + "Responsive" + i);
    document.getElementById(kategory + "Responsive").appendChild(a);

    var a = document.createElement("a");
    a.setAttribute("id", elem[i] + "m");
    document.getElementById(kategory + "Responsive" + i).appendChild(a);

    switch (lastChar) {
      case "k":
        lang = page + "dk";
        elemText = elemNaDk[i];
        document.getElementById(kategory + "HeadName").innerText = headName[0];
        document.getElementById(kategory + "ResponsiveHeadName").innerText =
          headName[0];

        break;

      case "e":
        lang = page + "de";
        elemText = elemNaDe[i];
        document.getElementById(kategory + "HeadName").innerText = headName[1];
        document.getElementById(kategory + "ResponsiveHeadName").innerText =
          headName[1];

        break;
      case "n":
        lang = page + "en";
        elemText = elemNaEn[i];
        document.getElementById(kategory + "HeadName").innerText = headName[2];
        document.getElementById(kategory + "ResponsiveHeadName").innerText =
          headName[2];

        break;
    }
    document.getElementById(elem[i]).setAttribute("href", lang + ".html");
    document.getElementById(elem[i]).innerText = elemText;
    document.getElementById(sideMenu).setAttribute("href", lang + ".html");
    document.getElementById(sideMenu).innerText = elemText;
  }
  if (path == "indexde" || path == "indexdk" || path == "indexen") {
    switch (lastChar) {
      case "k":
        document.getElementById("chapname").innerHTML = "Hjem";

        break;
      case "e":
        document.getElementById("chapname").innerHTML = "Startseite";
        break;
      case "n":
        document.getElementById("chapname").innerHTML = "Home";
        break;
    }
  }
  var indexName;
  var indexPageLanguage;
  switch (lastChar) {
    case "k":
      indexName = "Hjem";
      indexPageLanguage = "indexdk.html";

      break;
    case "e":
      indexName = "Startseite";
      indexPageLanguage = "indexde.html";
      break;
    case "n":
      indexName = "Home";
      indexPageLanguage = "indexen.html";
      break;
  }

  document.getElementById("homea").innerText = indexName;
  document.getElementById("homea").setAttribute("href", indexPageLanguage);
  document.getElementById("homeam").innerText = indexName;
  document.getElementById("homeam").setAttribute("href", indexPageLanguage);

  for (let i = 0; i < elem.length; i++) {
    var pageName = path.slice(0, -2);
    if (elem[i] == pageName) {
      document.getElementById(elem[i]).style = "background-color:steelblue;";
      document.getElementById(kategory + "HeadName").style =
        "background-color:steelblue;";
      document.getElementById(kategory + "ResponsiveHeadName").style =
        "background-color:steelblue; color:white;";
      document.getElementById(kategory + "Responsive").style.display = "block";

      document.getElementById(elem[i] + "m").style =
        "background-color:steelblue; color: white;";
      switch (lastChar) {
        case "k":
          document.getElementById("chapname").innerText = elemNaDk[i];
          SetHeaderPageName(elemNaDk[i], headerImgRight[i]);
          break;
        case "e":
          document.getElementById("chapname").innerText = elemNaDe[i];
          SetHeaderPageName(elemNaDe[i], headerImgRight[i]);
          break;
        case "n":
          document.getElementById("chapname").innerText = elemNaEn[i];
          SetHeaderPageName(elemNaEn[i], headerImgRight[i]);

          break;
      }
    }
  }
  if (
    path == "indexdk" ||
    path == "indexen" ||
    path == "indexde" ||
    path == "index"
  ) {
    document
      .getElementById("frameindex")
      .contentWindow.document.querySelector("body").style =
      "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png); background-size: 110px 120px, 120px 120px, cover;";
  }
}
function SetHeaderPageName(headerpageName, img) {
  var iframeHeader = document.getElementById("frameindex");
  var headerH2 = iframeHeader.contentWindow.document.getElementById("headerh2");
  headerH2.innerText = headerpageName;
  if (img == "flora") {
    var randomimg = Math.floor(Math.random() * 14);
    iframeHeader.contentWindow.document.querySelector("body").style =
      "background-image:  url(./img/logo.png)," +
      "url(./img/flora" +
      randomimg +
      ".png)" +
      ",url(./img/headerbg.png);";
  }
  if (img == "oeder") {
    iframeHeader.contentWindow.document.querySelector("body").style =
      "background-image:  url(./img/logo.png), url(./img/oederlogo.png)  ,url(./img/headerbg.png);";
    iframeHeader.contentWindow.document.querySelector(
      "body"
    ).style.backgroundSize = "110px 120px, 120px 120px, cover";
  }
  if (img == "crest") {
    iframeHeader.contentWindow.document.querySelector("body").style =
      "background-image:  url(./img/logo.png), url(./img/vaaben3.png)  ,url(./img/headerbg.png);";
    iframeHeader.contentWindow.document.querySelector(
      "body"
    ).style.backgroundSize = "110px 120px, 100px 120px, cover";
  }
}
var a = document.getElementsByTagName("main")[0];
a.setAttribute("onclick", "closeSidebar()");

function showSidebar() {
  document.querySelector(".sidebar").style.display = "flex";
}
function showSidebarContent() {
  document.getElementById("sidebarcontent").style.display = "flex";
}

function closeSidebar() {
  document.querySelector(".sidebar").style.display = "none";
  document.getElementById("sidebarcontent").style.display = "none";
}
var a = document.createElement("div");
a.setAttribute("id", "changelangcontainer");
a.style = "display: inline-block;";
// a.style =  "margin-right", "auto";
// a.style = "margin-left", "auto";
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "langdk");
a.setAttribute("onclick", "ChangeLanguage('dk')");
document.getElementById("list").appendChild(a);
var a = document.createElement("img");
a.setAttribute("src", "./buttons/dk.png");
a.setAttribute("class", "lang");
a.style = "width:20px;";
document.getElementById("langdk").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "langde");
a.setAttribute("onclick", "ChangeLanguage('de')");
document.getElementById("list").appendChild(a);
var a = document.createElement("img");
a.setAttribute("src", "./buttons/de.png");
a.setAttribute("class", "lang");
a.style = "width:20px;";
document.getElementById("langde").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "langen");
a.setAttribute("onclick", "ChangeLanguage('en')");
document.getElementById("list").appendChild(a);
var a = document.createElement("img");
a.setAttribute("src", "./buttons/gb.png");
a.setAttribute("class", "lang");
a.style = "width:20px;";
document.getElementById("langen").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "langdkm");
a.setAttribute("onclick", "ChangeLanguage('dk')");
a.style = "margin: 10px;";
document.getElementById("changelangcontainer").appendChild(a);
var a = document.createElement("img");
a.setAttribute("src", "./buttons/dk.png");
a.style = "width:20px;";
document.getElementById("langdkm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "langdem");
a.setAttribute("onclick", "ChangeLanguage('de')");
a.style = "margin: 10px;";
document.getElementById("changelangcontainer").appendChild(a);
var a = document.createElement("img");
a.setAttribute("src", "./buttons/de.png");
a.style = "width:20px;";
document.getElementById("langdem").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "langenm");
a.setAttribute("onclick", "ChangeLanguage('en')");
a.style = "margin: 10px;";
document.getElementById("changelangcontainer").appendChild(a);
var a = document.createElement("img");
a.setAttribute("src", "./buttons/gb.png");
a.style = "width:20px;";
document.getElementById("langenm").appendChild(a);

function ChangeLanguage(lang) {
  var path = parent.location.pathname;
  path = path.split("/").pop();
  path = path.split(".").shift();
  path = path.slice(0, -2);
  parent.location.href = path + lang + ".html";
}
function HideMenuElements(ulToShow) {
  let menuToClose = document.getElementsByClassName("drop1m");
  for (let i = 0; i < menuToClose.length; i++) {
    menuToClose[i].style.display = "none";
  }
  // var a = document.getElementById(ulToShow);
  // a.style.display = "block";
  document.getElementById(ulToShow).style.display = "block";
  // document.getElementById("biographyResponsive").appendChild(a);
}
