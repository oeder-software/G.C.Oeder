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
a.setAttribute("id", "bioa");
document.getElementById("bio").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "bioul");
document.getElementById("bio").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "bio1");
document.getElementById("bioul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "bio1a");
document.getElementById("bio1").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "bio2");
document.getElementById("bioul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "bio2a");
document.getElementById("bio2").appendChild(a);
//Manuscripts
var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manu");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "drop3");
a.innerText = "Manuskripter";
document.getElementById("manu").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "manulist");
document.getElementById("manu").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist1");
document.getElementById("manulist").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "preface");
document.getElementById("manulist1").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist2");
document.getElementById("manulist").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "bedenken");
document.getElementById("manulist2").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist3");
document.getElementById("manulist").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "addition");
document.getElementById("manulist3").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist4");
document.getElementById("manulist").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "supplement");
document.getElementById("manulist4").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist5");
document.getElementById("manulist").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "botanical");
document.getElementById("manulist5").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist6");
document.getElementById("manulist").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "oederiana");
document.getElementById("manulist6").appendChild(a);

// letters
var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "letter");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "lettera");
document.getElementById("letter").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "letterul");
document.getElementById("letter").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "letter1");
document.getElementById("letterul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letter1a");
document.getElementById("letter1").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "letter2");
document.getElementById("letterul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letter2a");
document.getElementById("letter2").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "letter3");
document.getElementById("letterul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letter3a");
document.getElementById("letter3").appendChild(a);

// Familytree

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "tree");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "treea");
document.getElementById("tree").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1");
a.setAttribute("id", "treeul");
document.getElementById("tree").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "tree1");
document.getElementById("treeul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "tree1a");
document.getElementById("tree1").appendChild(a);

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "tree2");
document.getElementById("treeul").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "tree2a");
document.getElementById("tree2").appendChild(a);

// Language
// var a = document.createElement("li");
// a.setAttribute("class", "listelement");
// a.setAttribute("id", "language");
// document.getElementById("list").appendChild(a);

// var a = document.createElement("a");
// a.setAttribute("id", "languagea");
// document.getElementById("language").appendChild(a);
// Oeder software
var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "soft");
document.getElementById("list").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "softa");
document.getElementById("soft").appendChild(a);

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

//sidebar

// home sidebar
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
a.setAttribute("id", "bioam");
document.getElementById("biom").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "bioulm");
document.getElementById("biom").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "bio1m");
document.getElementById("bioulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "bio1am");
document.getElementById("bio1m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "bio2m");
document.getElementById("bioulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "bio2am");
document.getElementById("bio2m").appendChild(a);

//Manuscripts sidebar

var a = document.createElement("li");
// a.setAttribute("class", "listelement");
a.setAttribute("id", "manum");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "drop3m");
a.innerText = "Manuskripter";
document.getElementById("manum").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop11");
a.setAttribute("id", "manulistm");
document.getElementById("manum").appendChild(a);

var a = document.createElement("li");
a.setAttribute("onclick", "closeSidebar()");
a.setAttribute("id", "manulist1m");
document.getElementById("manulistm").appendChild(a);

var a = document.createElement("li");
a.setAttribute("onclick", "closeSidebar()");
a.setAttribute("id", "manulist2m");
document.getElementById("manulistm").appendChild(a);

var a = document.createElement("a");
// a.innerText = "Forord";
a.setAttribute("id", "prefacem");
document.getElementById("manulist1m").appendChild(a);

var a = document.createElement("a");
// a.innerText = "Betænkning";
a.setAttribute("id", "bedenkenm");
document.getElementById("manulist2m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("onclick", "closeSidebar()");
a.setAttribute("id", "manulist3m");
document.getElementById("manulistm").appendChild(a);

var a = document.createElement("a");
// a.innerText = "Tillæg til betænkningen";
a.setAttribute("id", "additionm");
document.getElementById("manulist3m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("onclick", "closeSidebar()");
a.setAttribute("id", "manulist4m");
document.getElementById("manulistm").appendChild(a);

var a = document.createElement("a");
// a.innerText = "Tilføjelse til betænkningen";
a.setAttribute("id", "supplementm");
document.getElementById("manulist4m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("onclick", "closeSidebar()");
a.setAttribute("id", "manulist5m");
document.getElementById("manulistm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "botanicalm");
document.getElementById("manulist5m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("onclick", "closeSidebar()");
a.setAttribute("id", "manulist6m");
document.getElementById("manulistm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "oederianam");
document.getElementById("manulist6m").appendChild(a);

// Letters sidebar

var a = document.createElement("li");
a.setAttribute("id", "letterm");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letteram");
document.getElementById("letterm").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "letterulm");
document.getElementById("letterm").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "letter1m");
document.getElementById("letterulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letter1am");
document.getElementById("letter1m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "letter2m");
document.getElementById("letterulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letter2am");
document.getElementById("letter2m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "letter3m");
document.getElementById("letterulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "letter3am");
document.getElementById("letter3m").appendChild(a);

// Familytree sidebar

var a = document.createElement("li");
a.setAttribute("id", "treem");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "treeam");
document.getElementById("treem").appendChild(a);

var a = document.createElement("ul");
a.setAttribute("class", "drop1m");
a.setAttribute("id", "treeulm");
document.getElementById("treem").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "tree1m");
document.getElementById("treeulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "tree1am");
document.getElementById("tree1m").appendChild(a);

var a = document.createElement("li");
a.setAttribute("id", "tree2m");
document.getElementById("treeulm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "tree2am");
document.getElementById("tree2m").appendChild(a);

// Language sidebar
// var a = document.createElement("li");
// a.setAttribute("id", "languagem");
// document.getElementById("listm").appendChild(a);

// var a = document.createElement("a");
// a.setAttribute("id", "languageam");
// document.getElementById("languagem").appendChild(a);
// Oeder software sidebar
var a = document.createElement("li");
a.setAttribute("id", "softm");
document.getElementById("listm").appendChild(a);

var a = document.createElement("a");
a.setAttribute("id", "softam");
document.getElementById("softm").appendChild(a);

var a = document.createElement("div");
a.setAttribute("id", "changelangcontainer");
a.style = "display: inline-block;";
// a.style =  "margin-right", "auto";
// a.style = "margin-left", "auto";
document.getElementById("listm").appendChild(a);

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

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (
  path == "indexdk" ||
  path == "letterchedk" ||
  path == "letterbugdk" ||
  path == "letterlindk" ||
  path == "familynicodk" ||
  path == "andenkendk" ||
  path == "alifedk" ||
  path == "bedenkenprefacedk" ||
  path == "bedenkendk" ||
  path == "bedenkenadditiondk" ||
  path == "bedenkensupplementdk" ||
  path == "botanicaljourney-dk" ||
  path == "familyoederdk" ||
  path == "oederianadk"
) {
  document.getElementById("homea").innerText = "Hjem";
  document.getElementById("homea").setAttribute("href", "indexdk.html");

  document.getElementById("preface").innerText = "Forord til betænkning";
  document
    .getElementById("preface")
    .setAttribute("href", "bedenkenprefacedk.html");

  document.getElementById("bedenken").setAttribute("href", "bedenkendk.html");
  document.getElementById("bedenken").innerText =
    "Betænkning over spørgsmålet:";

  document
    .getElementById("addition")
    .setAttribute("href", "bedenkenadditiondk.html");
  document.getElementById("addition").innerText = "Tillæg til betænkningen";

  document
    .getElementById("supplement")
    .setAttribute("href", "bedenkensupplementdk.html");
  document.getElementById("supplement").innerText =
    "Tilføjelse til betænkningen";

  document
    .getElementById("botanical")
    .setAttribute("href", "botanicaljourney-dk.html");
  document.getElementById("botanical").innerText = "Oeders botaniske rejse";

  document.getElementById("oederiana").setAttribute("href", "oederianadk.html");
  document.getElementById("oederiana").innerText = "Oeder's forsvar, Oderiana";

  document.getElementById("lettera").innerText = "Breve";
  document.getElementById("letter1a").innerText = "Charlotte Hedevig Ericius";
  document.getElementById("letter1a").setAttribute("href", "letterchedk.html");
  document.getElementById("letter2a").innerText = "Thomas Bugge";
  document.getElementById("letter2a").setAttribute("href", "letterbugdk.html");
  document.getElementById("letter3a").innerText = "Carl von Linné";
  document.getElementById("letter3a").setAttribute("href", "letterlindk.html");

  document.getElementById("bioa").innerText = "Biografi";
  document.getElementById("bio1a").innerText = "Et liv med mere end en indsats";
  document.getElementById("bio1a").setAttribute("href", "alifedk.html");
  document.getElementById("bio2a").innerText = "Til minde om Oeder";
  document.getElementById("bio2a").setAttribute("href", "andenkendk.html");

  document.getElementById("treea").innerText = "Stamtræer";
  document.getElementById("tree1a").innerText = "Familien Oeder";
  document.getElementById("tree1a").setAttribute("href", "familynicodk.html");
  document.getElementById("tree2a").innerText = "Georg Christian Oeder";
  document.getElementById("tree2a").setAttribute("href", "familyoederdk.html");

  document.getElementById("softa").innerText = "Oeder Software";
  document
    .getElementById("softa")
    .setAttribute("href", "http://oeder-software.github.io/dev");

  // document.getElementById("languagea").innerText = "Vælg sprog";
  // document.getElementById("languagea").setAttribute("href", "index.html");

  //Sidebar
  document.getElementById("homeam").innerText = "Hjem";
  document.getElementById("homeam").setAttribute("href", "indexdk.html");

  document.getElementById("prefacem").innerText = "Forord til betænkning";
  document
    .getElementById("prefacem")
    .setAttribute("href", "bedenkenprefacedk.html");

  document.getElementById("bedenkenm").setAttribute("href", "bedenkendk.html");
  document.getElementById("bedenkenm").innerText =
    "Betænkning over spørgsmålet:";
  document
    .getElementById("additionm")
    .setAttribute("href", "bedenkenadditiondk.html");
  document.getElementById("additionm").innerText = "Tillæg til betænkningen";
  document
    .getElementById("supplementm")
    .setAttribute("href", "bedenkensupplementdk.html");
  document.getElementById("supplementm").innerText =
    "Tilføjelse til betænkningen";

  document
    .getElementById("botanicalm")
    .setAttribute("href", "botanicaljourney-dk.html");
  document.getElementById("botanicalm").innerText = "Oders botaniske rejse";

  document
    .getElementById("oederianam")
    .setAttribute("href", "oederianadk.html");
  document.getElementById("oederianam").innerText = "Oeder's forsvar, Oderiana";

  document.getElementById("bioam").innerText = "Biografi";
  document.getElementById("bioam").style = "cursor:default;";
  document.getElementById("bio1am").innerText =
    "Et liv med mere end en indsats";
  document.getElementById("bio1am").setAttribute("href", "alifedk.html");
  document.getElementById("bio2am").innerText = "Til minde om Oeder";
  document.getElementById("bio2am").setAttribute("href", "andenkendk.html");

  document.getElementById("letteram").innerText = "Breve";
  document.getElementById("letter1am").innerText = "Charlotte Hedevig Ericius";
  document.getElementById("letter1am").setAttribute("href", "letterchedk.html");
  document.getElementById("letter2am").innerText = "Thomas Bugge";
  document.getElementById("letter2am").setAttribute("href", "letterbugdk.html");
  document.getElementById("letter3am").innerText = "Carl von Linné";
  document.getElementById("letter3am").setAttribute("href", "letterlindk.html");

  document.getElementById("treeam").innerText = "Stamtræer";
  document.getElementById("tree1am").innerText = "Familien Oeder";
  document.getElementById("tree1am").setAttribute("href", "familynicodk.html");
  document.getElementById("tree2am").innerText = "Georg Christian Oeder";
  document.getElementById("tree2am").setAttribute("href", "familyoederdk.html");

  document.getElementById("softam").innerText = "Oeder Software";
  document
    .getElementById("softam")
    .setAttribute("href", "http://oeder-software.github.io/dev");

  // document.getElementById("languageam").innerText = "Vælg sprog";
  // document.getElementById("languageam").setAttribute("href", "index.html");
}

if (
  path == "indexen" ||
  path == "lettercheen" ||
  path == "letterbugen" ||
  path == "letterlinen" ||
  path == "familynicoen" ||
  path == "andenkenen" ||
  path == "alifeen" ||
  path == "bedenkenprefaceen" ||
  path == "bedenkenen" ||
  path == "bedenkenadditionen" ||
  path == "bedenkensupplementen" ||
  path == "oederianaen" ||
  path == "botanicaljourney-en"
) {
  document.getElementById("homea").innerText = "Home";
  document.getElementById("homea").setAttribute("href", "indexen.html");

  document.getElementById("preface").innerText = "Preface to the Consideration";
  document
    .getElementById("preface")
    .setAttribute("href", "bedenkenprefaceen.html");

  document.getElementById("bedenken").setAttribute("href", "bedenkenen.html");
  document.getElementById("bedenken").innerText =
    "Consideration on the Question:";

  document
    .getElementById("addition")
    .setAttribute("href", "bedenkenadditionen.html");
  document.getElementById("addition").innerText =
    "Addition to the Consideration";

  document
    .getElementById("supplement")
    .setAttribute("href", "bedenkensupplementen.html");
  document.getElementById("supplement").innerText =
    "Supplement to the Consideration";

  document
    .getElementById("botanical")
    .setAttribute("href", "botanicaljourney-en.html");
  document.getElementById("botanical").innerText = "Oeders botanical journey";

  document.getElementById("oederiana").setAttribute("href", "oederianaen.html");
  document.getElementById("oederiana").innerText = "Oeder's defence, Oderiana";

  document.getElementById("lettera").innerText = "Letters";
  document.getElementById("letter1a").innerText = "Charlotte Hedevig Ericius";
  document.getElementById("letter1a").setAttribute("href", "lettercheen.html");
  document.getElementById("letter2a").innerText = "Thomas Bugge";
  document.getElementById("letter2a").setAttribute("href", "letterbugen.html");
  document.getElementById("letter3a").innerText = "Carl von Linné";
  document.getElementById("letter3a").setAttribute("href", "letterlinen.html");

  document.getElementById("bioa").innerText = "Biography";
  document.getElementById("bio1a").innerText =
    "A life - with more than one effort.";
  document.getElementById("bio1a").setAttribute("href", "alifeen.html");
  document.getElementById("bio2a").innerText = "In memory of Oeder.";
  document.getElementById("bio2a").setAttribute("href", "andenkenen.html");

  document.getElementById("treea").innerText = "Family Tree";
  document.getElementById("tree1a").innerText = "Family Oeder";
  document.getElementById("tree1a").setAttribute("href", "familynicoen.html");
  document.getElementById("tree2a").innerText = "Georg Christian Oeder";
  document.getElementById("tree2a").setAttribute("href", "familynicoen.html");

  document.getElementById("softa").innerText = "Oeder Software";
  document
    .getElementById("softa")
    .setAttribute("href", "http://oeder-software.github.io/dev");

  // document.getElementById("languagea").innerText = "Choose Language";
  // document.getElementById("languagea").setAttribute("href", "index.html");

  //Sidebar
  document.getElementById("homeam").innerText = "Home";
  document.getElementById("homeam").setAttribute("href", "indexen.html");

  document.getElementById("prefacem").innerText =
    "Preface to the Consideration";
  document
    .getElementById("prefacem")
    .setAttribute("href", "bedenkenprefaceen.html");

  document.getElementById("bedenkenm").setAttribute("href", "bedenkenen.html");
  document.getElementById("bedenkenm").innerText =
    "Consideration on the Question:";
  document
    .getElementById("additionm")
    .setAttribute("href", "bedenkenadditionen.html");
  document.getElementById("additionm").innerText =
    "Addition to the Consideration";
  document
    .getElementById("supplementm")
    .setAttribute("href", "bedenkensupplementen.html");
  document.getElementById("supplementm").innerText =
    "Supplement to the Consideration";

  document
    .getElementById("botanicalm")
    .setAttribute("href", "botanicaljourney-en.html");
  document.getElementById("botanicalm").innerText = "Oeders botanical journey";

  document
    .getElementById("oederianam")
    .setAttribute("href", "oederianaen.html");
  document.getElementById("oederianam").innerText = "Oeder's defence, Oderiana";

  document.getElementById("bioam").innerText = "Biography";
  document.getElementById("bioam").style = "cursor:default;";
  document.getElementById("bio1am").innerText =
    "A life - with more than one effort.";
  document.getElementById("bio1am").setAttribute("href", "alifeen.html");
  document.getElementById("bio2am").innerText = "In memory of Oeder.";
  document.getElementById("bio2am").setAttribute("href", "andenkenen.html");

  document.getElementById("letteram").innerText = "Letters";
  document.getElementById("letter1am").innerText = "Charlotte Hedevig Ericius";
  document.getElementById("letter1am").setAttribute("href", "lettercheen.html");
  document.getElementById("letter2am").innerText = "Thomas Bugge";
  document.getElementById("letter2am").setAttribute("href", "letterbugen.html");
  document.getElementById("letter3am").innerText = "Carl von Linné";
  document.getElementById("letter3am").setAttribute("href", "letterlinen.html");

  document.getElementById("treeam").innerText = "Family Tree";
  document.getElementById("tree1am").innerText = "Family Oeder";
  document.getElementById("tree1am").setAttribute("href", "familynicodk.html");
  document.getElementById("tree2am").innerText = "Georg Christian Oeder";
  document.getElementById("tree2am").setAttribute("href", "letterbugdk.html");

  document.getElementById("softam").innerText = "Oeder Software";
  document
    .getElementById("softam")
    .setAttribute("href", "http://oeder-software.github.io/dev");

  // document.getElementById("languageam").innerText = "Choose Language";
  // document.getElementById("languageam").setAttribute("href", "index.html");
}

if (
  path == "indexde" ||
  path == "letterchede" ||
  path == "letterbugde" ||
  path == "familynicode" ||
  path == "letterlinde" ||
  path == "andenkende" ||
  path == "alifede" ||
  path == "bedenkenprefacede" ||
  path == "bedenkende" ||
  path == "bedenkenadditionde" ||
  path == "bedenkensupplementde" ||
  path == "botanicaljourney-de" ||
  path == "oederianade"
) {
  document.getElementById("homea").innerText = "Startseite";
  document.getElementById("homea").setAttribute("href", "indexde.html");

  document.getElementById("preface").innerText = "Vorrede zu dem Bedenken";
  document
    .getElementById("preface")
    .setAttribute("href", "bedenkenprefacede.html");

  document.getElementById("bedenken").setAttribute("href", "bedenkende.html");
  document.getElementById("bedenken").innerText = "Bedenken über die Frage:";

  document
    .getElementById("addition")
    .setAttribute("href", "bedenkenadditionde.html");
  document.getElementById("addition").innerText = "Zusäße Zu dem Bedenken";

  document
    .getElementById("supplement")
    .setAttribute("href", "bedenkensupplementde.html");
  document.getElementById("supplement").innerText = "Zulage Zu dem Bedenken";

  document
    .getElementById("botanical")
    .setAttribute("href", "botanicaljourney-de.html");
  document.getElementById("botanical").innerText = "Oeders botanische reise";

  document.getElementById("oederiana").setAttribute("href", "oederianade.html");
  document.getElementById("oederiana").innerText =
    "Oeders Verteidigung, Oderiana";

  document.getElementById("lettera").innerText = "Briefe";
  document.getElementById("letter1a").innerText =
    "Von Charlotte Hedevig Ericius";
  document.getElementById("letter1a").setAttribute("href", "letterchede.html");
  document.getElementById("letter2a").innerText = "An Thomas Bugge";
  document.getElementById("letter2a").setAttribute("href", "letterbugde.html");
  document.getElementById("letter3a").innerText = "An Carl von Linné";
  document.getElementById("letter3a").setAttribute("href", "letterlinde.html");

  document.getElementById("bioa").innerText = "Biographie";
  document.getElementById("bio1a").innerText =
    "Ein Leben - mit mehr als ein einsatz.";
  document.getElementById("bio1a").setAttribute("href", "alifede.html");
  document.getElementById("bio2a").innerText = "Andenken an Oeder.";
  document.getElementById("bio2a").setAttribute("href", "andenkende.html");

  document.getElementById("treea").innerText = "Stambaum";
  document.getElementById("tree1a").innerText = "Familie Oeder";
  document.getElementById("tree1a").setAttribute("href", "familynicode.html");
  document.getElementById("tree2a").innerText = "Georg Christian Oeder";
  document.getElementById("tree2a").setAttribute("href", "familynicode.html");

  document.getElementById("softa").innerText = "Oeder Software";
  document
    .getElementById("softa")
    .setAttribute("href", "http://oeder-software.github.io/dev");

  // document.getElementById("languagea").innerText = "Sparche whälen";
  // document.getElementById("languagea").setAttribute("href", "index.html");

  //Sidebar
  document.getElementById("homeam").innerText = "Startseite";
  document.getElementById("homeam").setAttribute("href", "indexen.html");

  document.getElementById("prefacem").innerText = "Vorrede zu dem Bedenken";
  document
    .getElementById("prefacem")
    .setAttribute("href", "bedenkenprefaceen.html");

  document.getElementById("bedenkenm").setAttribute("href", "bedenkenen.html");
  document.getElementById("bedenkenm").innerText = "Bedenken über die Frage:";
  document
    .getElementById("additionm")
    .setAttribute("href", "bedenkenadditionen.html");
  document.getElementById("additionm").innerText = "Zusäße Zu dem Bedenken";
  document
    .getElementById("supplementm")
    .setAttribute("href", "bedenkensupplementen.html");
  document.getElementById("supplementm").innerText = "Zulage Zu dem Bedenken";

  document
    .getElementById("botanicalm")
    .setAttribute("href", "botanicaljourney-de.html");
  document.getElementById("botanicalm").innerText = "Oeders botanische reise";

  document
    .getElementById("oederianam")
    .setAttribute("href", "oederianade.html");
  document.getElementById("oederianam").innerText =
    "Oeders Verteidigung, Oderiana";

  document.getElementById("bioam").innerText = "Biographie";
  document.getElementById("bioam").style = "cursor:default;";
  document.getElementById("bio1am").innerText =
    "Ein Leben - mit mehr als ein einsatz.";
  document.getElementById("bio1am").setAttribute("href", "alifeen.html");
  document.getElementById("bio2am").innerText = "Andenken an Oeder.";
  document.getElementById("bio2am").setAttribute("href", "andenkenen.html");

  document.getElementById("letteram").innerText = "Briefe";
  document.getElementById("letter1am").innerText =
    "Von Charlotte Hedevig Ericius";
  document.getElementById("letter1am").setAttribute("href", "letterchede.html");
  document.getElementById("letter2am").innerText = "An Thomas Bugge";
  document.getElementById("letter2am").setAttribute("href", "letterbude.html");
  document.getElementById("letter3am").innerText = "An Carl von Linné";
  document.getElementById("letter3am").setAttribute("href", "letterlinde.html");

  document.getElementById("treeam").innerText = "Stambaum";
  document.getElementById("tree1am").innerText = "Familie Oeder";
  document.getElementById("tree1am").setAttribute("href", "familynicode.html");
  document.getElementById("tree2am").innerText = "Georg Christian Oeder";
  document.getElementById("tree2am").setAttribute("href", "familynicode.html");

  document.getElementById("softam").innerText = "Oeder Software";
  document
    .getElementById("softam")
    .setAttribute("href", "http://oeder-software.github.io/dev");

  // document.getElementById("languageam").innerText = "Sprache whälen";
  // document.getElementById("languageam").setAttribute("href", "index.html");
}

if (path == "indexde" || path == "indexen" || path == "indexdk") {
  document.getElementById("homea").style = "background-color:steelblue;";
  document.getElementById("homeam").style =
    "background-color:steelblue; color: white;";
}
if (path == "letterchedk" || path == "lettercheen" || path == "letterchede") {
  document.getElementById("lettera").style = "background-color:steelblue;";
  document.getElementById("letter1a").style = "background-color:steelblue;";
  document.getElementById("letter1am").style =
    "background-color:steelblue; color: white;";
  document.getElementById("chapname").innerText = "Charlotte Hedevig Ericius";
}
if (path == "letterbugdk" || path == "letterbugen" || path == "letterbugde") {
  document.getElementById("lettera").style = "background-color:steelblue;";
  document.getElementById("letter2a").style = "background-color:steelblue;";
  document.getElementById("letter2am").style =
    "background-color:steelblue; color: white;";
  document.getElementById("chapname").innerText = "Thomas Bugge";
}

if (path == "letterlindk" || path == "letterlinen" || path == "letterlinde") {
  document.getElementById("lettera").style = "background-color:steelblue;";
  document.getElementById("letter3a").style = "background-color:steelblue;";
  document.getElementById("letter2am").style =
    "background-color:steelblue; color: white;";
  document.getElementById("chapname").innerText = "Carl von Linné";
}

if (
  path == "familynicodk" ||
  path == "familynicoen" ||
  path == "familynicode"
) {
  document.getElementById("treea").style = "background-color:steelblue;";
  document.getElementById("tree1a").style = "background-color:steelblue;";
  document.getElementById("tree1am").style =
    "background-color:steelblue; color: white;";
}
if (path == "familyoederdk") {
  document.getElementById("treea").style = "background-color:steelblue;";
  document.getElementById("tree2a").style = "background-color:steelblue;";
  document.getElementById("tree2am").style =
    "background-color:steelblue; color: white;";
}
if (path == "andenkendk" || path == "andenkenen" || path == "andenkende") {
  document.getElementById("bioa").style = "background-color:steelblue;";
  document.getElementById("bio2a").style = "background-color:steelblue;";
  document.getElementById("bio2am").style =
    "background-color:steelblue; color: white;";
}
if (path == "alifedk" || path == "alifeen" || path == "alifede") {
  document.getElementById("bioa").style = "background-color:steelblue;";
  document.getElementById("bio1a").style = "background-color:steelblue;";
  document.getElementById("bio1am").style =
    "background-color:steelblue; color: white;";
}

if (
  path == "bedenkenprefacedk" ||
  path == "bedenkenprefacede" ||
  path == "bedenkenprefaceen"
) {
  document.getElementById("manu").style = "background-color:steelblue;";
  document.getElementById("preface").style = "background-color:steelblue;";
  document.getElementById("prefacem").style =
    "background-color:steelblue; color: white;";
  document.getElementById("content").style = "display: none;";
}
if (path == "bedenkendk" || path == "bedenkende" || path == "bedenkenen") {
  document.getElementById("manu").style = "background-color:steelblue;";
  document.getElementById("bedenken").style = "background-color:steelblue;";
  document.getElementById("bedenkenm").style =
    "background-color:steelblue; color: white;";
}
if (
  path == "bedenkenadditiondk" ||
  path == "bedenkenadditionde" ||
  path == "bedenkenadditionen"
) {
  document.getElementById("manu").style = "background-color:steelblue;";
  document.getElementById("addition").style = "background-color:steelblue;";
  document.getElementById("additionm").style =
    "background-color:steelblue; color: white;";
}
if (
  path == "bedenkensupplementdk" ||
  path == "bedenkensupplementde" ||
  path == "bedenkensupplementen"
) {
  document.getElementById("manu").style = "background-color:steelblue;";
  document.getElementById("supplement").style = "background-color:steelblue;";
  document.getElementById("supplementm").style =
    "background-color:steelblue; color: white;";
}
if (
  path == "botanicaljourney-dk" ||
  path == "botanicaljourney-de" ||
  path == "botanicaljourney-en"
) {
  document.getElementById("manu").style = "background-color:steelblue;";
  document.getElementById("botanical").style = "background-color:steelblue;";
  document.getElementById("botanicalm").style =
    "background-color:steelblue; color: white;";
}

if (path == "oederianade") {
  document.getElementById("manu").style = "background-color:steelblue;";
  document.getElementById("oederiana").style = "background-color:steelblue;";
  document.getElementById("oederianam").style =
    "background-color:steelblue; color: white;";
  document.getElementById("chapname").innerText = "Oederiana";
}
switch (path) {
  case "indexdk":
    document.getElementById("chapname").innerText = "Startside";

    break;
  case "indexde":
    document.getElementById("chapname").innerText = "Startseite";
    break;
  case "indexen":
    document.getElementById("chapname").innerText = "Home";
    break;
}

switch (path) {
  case "andenkendk":
    document.getElementById("chapname").innerText = "Til minde om Oeder";
    break;
  case "andenkenen":
    document.getElementById("chapname").innerText = "In Memory of Oeder";
    break;
  case "andenkende":
    document.getElementById("chapname").innerText = "Andenken an Oeder";
    break;
}
switch (path) {
  case "alifedk":
    document.getElementById("chapname").innerText = "Et liv";
    break;
  case "alifeen":
    document.getElementById("chapname").innerText = "A Life";
    break;
  case "alifede":
    document.getElementById("chapname").innerText = "Ein Leben";
    break;
}
switch (path) {
  case "bedenkenprefacedk":
    document.getElementById("chapname").innerText = "Forord til betænkning";
    break;
  case "bedenkenprefacede":
    document.getElementById("chapname").innerText = "Vorrede zu Bedenken";
    break;
  case "bedenkenprefaceen":
    document.getElementById("chapname").innerText = "Preface to Consideration";
    break;
}
switch (path) {
  case "bedenkendk":
    document.getElementById("chapname").innerText =
      "Betænkning over spørgsmålet:";
    break;
  case "bedenkende":
    document.getElementById("chapname").innerText = "Bedenken über die Frage:";
    break;
  case "bedenkenen":
    document.getElementById("chapname").innerText =
      "Consideration on the Question:";
    break;
}
switch (path) {
  case "bedenkenadditionen":
    document.getElementById("chapname").innerText =
      "Addition to the Consideration";
    break;

  case "bedenkenadditiondk":
    document.getElementById("chapname").innerText = "Tillæg til betænkningen";
    break;
  case "bedenkenadditionde":
    document.getElementById("chapname").innerText = "Zusäße Zu dem Bedenken";
    break;
}
switch (path) {
  case "bedenkensupplementen":
    document.getElementById("chapname").innerText =
      "Supplement to the Consideration";
    break;

  case "bedenkensupplementdk":
    document.getElementById("chapname").innerText =
      "Tilføjelser til betænkningen";
    break;
  case "bedenkensupplementde":
    document.getElementById("chapname").innerText = "Zulage Zu dem Bedenken";
    break;
}

switch (path) {
  case "botanicaljourney-de":
    document.getElementById("chapname").innerText = "Oeders Botanische reise";
    break;

  case "botanicaljourney-dk":
    document.getElementById("chapname").innerText = "Oeders Botaniske rejse";
    break;
  case "botanicaljourney-en":
    document.getElementById("chapname").innerText = "Oeders Botanical journey";
    break;
}
if (path == "oederianadk" || path == "oederianade" || path == "oederianaen") {
  document.getElementById("chapname").innerText = "Oederiana";
}

switch (path) {
  case "familynicodk":
    document.getElementById("chapname").innerText = "Stamtræ familie Oeder";
    break;

  case "familynicode":
    document.getElementById("chapname").innerText = "Stambaum Familie Oeder";
    break;
  case "familynicoen":
    document.getElementById("chapname").innerText = "Family Oeder";
    break;
}
switch (path) {
  case "familyoederdk":
    document.getElementById("chapname").innerText = "Oeder's stamtræ";
    break;

  // case "familynicode":
  //   document.getElementById("chapname").innerText = "Stambaum Familie Oeder";
  //   break;
  // case "familynicoen":
  //   document.getElementById("chapname").innerText = "Family Oeder";
  //   break;
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
var danishHtml = [
  "andenkendk",
  "familynicodk",
  "indexdk",
  "letterbugdk",
  "letterlindk",
  "letterchedk",
  "alifedk",
  "Forside",
  "bedenkenprefacedk",
  "bedenkendk",
  "bedenkenadditiondk",
  "bedenkensupplementdk",
  "botanicaljourney-dk",
  "oederianadk",
];
var germanHtml = [
  "andenkende",
  "familynicode",
  "indexde",
  "letterbugde",
  "letterlinde",
  "letterchede",
  "alifede",
  "startseite",
  "bedenkenprefacede",
  "bedenkende",
  "bedenkenadditionde",
  "bedenkensupplementde",
  "botanicaljourney-de",
  "oederianade",
];
var englishHtml = [
  "andenkenen",
  "familynicoen",
  "indexen",
  "letterbugen",
  "letterlinen",
  "lettercheen",
  "alifeen",
  "Home",
  "bedenkenprefaceen",
  "bedenkenen",
  "bedenkenadditionen",
  "bedenkensupplementen",
  "botanicaljourney-en",
  "oederianaen",
];

function ChangeLanguage(lang) {
  console.log(parent.document.title);
  var path = parent.location.pathname;
  path = path.split("/").pop();
  path = path.split(".").shift();
  console.log(path);

  for (let index = 0; index < germanHtml.length; index++) {
    if (germanHtml[index] == path) {
      langindex = index;
    }
  }
  for (let index = 0; index < englishHtml.length; index++) {
    if (englishHtml[index] == path) {
      langindex = index;
    }
  }
  for (let index = 0; index < danishHtml.length; index++) {
    if (danishHtml[index] == path) {
      langindex = index;
    }
  }
  switch (lang) {
    case "dk":
      parent.location.href = danishHtml[langindex] + ".html";
      break;
    case "de":
      parent.location.href = germanHtml[langindex] + ".html";
      break;
    case "en":
      parent.location.href = englishHtml[langindex] + ".html";
      break;
  }
}
