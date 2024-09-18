document.getElementById("software").innerText = "Oeder Software";
document
  .getElementById("software")
  .setAttribute("href", "http://oeder-software.github.io/dev");
document.getElementById("softwarem").innerText = "Oeder Software";
document
  .getElementById("softwarem")
  .setAttribute("href", "http://oeder-software.github.io/dev");

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

var a = document.createElement("li");
a.setAttribute("class", "listelement");
a.setAttribute("id", "manulist2");
document.getElementById("manulist").appendChild(a);

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
  path == "bedenkenprefacedk"
) {
  document.getElementById("lang").innerText = "Vælg sprog";

  document.getElementById("home").innerText = "Hjem";
  document.getElementById("home").setAttribute("href", "indexdk.html");

  document.getElementById("drop").innerText = "Breve";
  document.getElementById("che").innerText = "Fra Chalotte Hedevig Ericius";
  document.getElementById("che").setAttribute("href", "letterchedk.html");

  document.getElementById("lin").innerText = "Til Carl von Linné";
  document.getElementById("lin").setAttribute("href", "letterlindk.html");

  document.getElementById("bug").innerText = "Til Thomas Bugge";
  document.getElementById("bug").setAttribute("href", "letterbugdk.html");

  document.getElementById("drop1").innerText = "Biografi";
  document.getElementById("alife").innerText =
    "Et liv - med flere end en indsats";
  document.getElementById("alife").setAttribute("href", "alifedk.html");

  document.getElementById("andenken").innerText = "Til minde om Oeder";
  document.getElementById("andenken").setAttribute("href", "andenkendk.html");

  document.getElementById("drop2").innerText = "Slægtstræ";
  document.getElementById("family").innerText = "Slægten Oeder";
  document.getElementById("family").setAttribute("href", "familynicodk.html");
  document.getElementById("gco").innerText = "Georg C. Oeder";

  /* -----------------------------------------------------------------------------------
   */
  document.getElementById("langm").innerText = "Vælg sprog";

  document.getElementById("homem").innerText = "Hjem";
  document.getElementById("homem").setAttribute("href", "indexdk.html");

  document.getElementById("drop1m").innerText = "Biografi";
  document.getElementById("dropm").style = "cursor:default;";

  document.getElementById("alifem").innerText =
    "Et liv - med flere end en indsats";
  document.getElementById("andenkenm").innerText = "Til minde om Oeder";

  document.getElementById("dropm").innerText = "Breve";
  document.getElementById("drop1m").style = "cursor:default;";
  document.getElementById("chem").innerText = "Fra Chalotte Hedevig Ericius";
  document.getElementById("chem").setAttribute("href", "letterchedk.html");

  document.getElementById("linm").innerText = "Til Carl von Linné";
  document.getElementById("linm").setAttribute("href", "letterlindk.html");

  document.getElementById("bugm").innerText = "Til Thomas Bugge";
  document.getElementById("bugm").setAttribute("href", "letterbugdk.html");

  document.getElementById("drop2m").innerText = "Slægtstræ";
  document.getElementById("drop2m").style = "cursor:default;";

  document.getElementById("familym").innerText = "Slægten Oeder";
  document.getElementById("familym").setAttribute("href", "familynicodk.html");

  document.getElementById("gcom").innerText = "Georg C. Oeder";

  var a = document.createElement("a");
  a.innerText = "Forord";
  a.setAttribute("id", "preface");
  document.getElementById("manulist1").appendChild(a);

  document
    .getElementById("preface")
    .setAttribute("href", "bedenkenprefacedk.html");

  var a = document.createElement("a");
  a.innerText = "Betænkning";
  a.setAttribute("id", "bedenken");
  document.getElementById("manulist2").appendChild(a);

  document.getElementById("bedenken").setAttribute("href", "alifedk.html");

  var a = document.createElement("a");
  a.innerText = "Forord";
  a.setAttribute("id", "prefacem");
  document.getElementById("manulist1m").appendChild(a);

  document
    .getElementById("prefacem")
    .setAttribute("href", "bedenkenprefacedk.html");

  var a = document.createElement("a");
  a.innerText = "Betænkning";
  a.setAttribute("id", "bedenkenm");
  document.getElementById("manulist2m").appendChild(a);

  document.getElementById("bedenkenm").setAttribute("href", "alifedk.html");
}

if (
  path == "indexen" ||
  path == "lettercheen" ||
  path == "letterbugen" ||
  path == "letterlinen" ||
  path == "familynicoen" ||
  path == "andenkenen" ||
  path == "alifeen" ||
  path == "bedenkenprefaceen"
) {
  document.getElementById("lang").innerText = "Choose language";

  document.getElementById("home").innerText = "Home";
  document.getElementById("home").setAttribute("href", "indexen.html");

  document.getElementById("drop2").innerText = "Family Tree";
  document.getElementById("family").innerText = "Oeder family";
  document.getElementById("family").setAttribute("href", "familynicoen.html");
  document.getElementById("gco").innerText = "Georg C. Oeder";

  document.getElementById("drop").innerText = "Letters";
  document.getElementById("che").innerText = "From Chalotte Hedevig Ericius";
  document.getElementById("che").setAttribute("href", "lettercheen.html");

  document.getElementById("lin").innerText = "To Carl von Linné";
  document.getElementById("lin").setAttribute("href", "letterlinen.html");

  document.getElementById("bug").innerText = "To Thomas Bugge";
  document.getElementById("bug").setAttribute("href", "letterbugen.html");

  document.getElementById("drop1").innerText = "Biography";
  document.getElementById("alife").innerText =
    "A life - with more than one effort.";
  document.getElementById("alife").setAttribute("href", "alifeen.html");

  document.getElementById("andenken").innerText = "In memory of Oeder.";
  document.getElementById("andenken").setAttribute("href", "andenkenen.html");

  /* ------------------------------------------------------------------------------- */

  document.getElementById("langm").innerText = "Choose language";

  document.getElementById("homem").innerText = "Home";
  document.getElementById("homem").setAttribute("href", "indexen.html");

  document.getElementById("drop2m").innerText = "Family Tree";
  document.getElementById("familym").innerText = "Oeder family";
  document.getElementById("familym").setAttribute("href", "familynicoen.html");
  document.getElementById("gcom").innerText = "Georg C. Oeder";

  document.getElementById("dropm").innerText = "Letters";
  document.getElementById("chem").innerText = "From Chalotte Hedevig Ericius";
  document.getElementById("chem").setAttribute("href", "lettercheen.html");

  document.getElementById("linm").innerText = "To Carl von Linné";
  document.getElementById("linm").setAttribute("href", "letterlinen.html");

  document.getElementById("bugm").innerText = "To Thomas Bugge";
  document.getElementById("bugm").setAttribute("href", "letterbugen.html");

  document.getElementById("drop1m").innerText = "Biography";
  document.getElementById("alifem").innerText =
    "A life - with more than one effort.";
  document.getElementById("alifem").setAttribute("href", "alifeen.html");

  document.getElementById("andenkenm").innerText = "In memory of Oeder.";

  var a = document.createElement("a");
  a.innerText = "Preface";
  a.setAttribute("id", "preface");
  document.getElementById("manulist1").appendChild(a);

  document
    .getElementById("preface")
    .setAttribute("href", "bedenkenprefaceen.html");

  var a = document.createElement("a");
  a.innerText = "Consideration";
  a.setAttribute("id", "bedenken");
  document.getElementById("manulist2").appendChild(a);

  document.getElementById("bedenken").setAttribute("href", "alifedk.html");

  var a = document.createElement("a");
  a.innerText = "Preface";
  a.setAttribute("id", "prefacem");
  document.getElementById("manulist1m").appendChild(a);

  document
    .getElementById("prefacem")
    .setAttribute("href", "bedenkenprefaceen.html");

  var a = document.createElement("a");
  a.innerText = "Consideration";
  a.setAttribute("id", "bedenkenm");
  document.getElementById("manulist2m").appendChild(a);

  document.getElementById("bedenkenm").setAttribute("href", "alifedk.html");
}

if (
  path == "indexde" ||
  path == "letterchede" ||
  path == "letterbugde" ||
  path == "familynicode" ||
  path == "letterlinde" ||
  path == "andenkende" ||
  path == "alifede" ||
  path == "bedenkenprefacede"
) {
  document.getElementById("lang").innerText = "Sprache whälen";

  document.getElementById("home").innerText = "Startseite";
  document.getElementById("home").setAttribute("href", "indexde.html");

  document.getElementById("drop2").innerText = "Stammbaum";
  document.getElementById("family").innerText = "Familie Oeder";
  document.getElementById("family").setAttribute("href", "familynicode.html");
  document.getElementById("gco").innerText = "Georg C. Oeder";

  document.getElementById("drop").innerText = "Briefe";
  document.getElementById("che").innerText = "Von Chalotte Hedevig Ericius";
  document.getElementById("che").setAttribute("href", "letterchede.html");

  document.getElementById("lin").innerText = "An Carl von Linné";
  document.getElementById("lin").setAttribute("href", "letterlinde.html");

  document.getElementById("bug").innerText = "An Thomas Bugge";
  document.getElementById("bug").setAttribute("href", "letterbugde.html");

  document.getElementById("drop1").innerText = "Biografie";
  document.getElementById("alife").innerText =
    "Ein Leben - mit mehr als ein einsatz.";
  document.getElementById("alife").setAttribute("href", "alifede.html");

  document.getElementById("andenken").innerText = "Andenken an Oeder.";
  document.getElementById("andenken").setAttribute("href", "andenkende.html");

  /* ------------------------------------------------------------------------------------------------
   */
  document.getElementById("langm").innerText = "Sprache whälen";

  document.getElementById("homem").innerText = "Startseite";
  document.getElementById("homem").setAttribute("href", "indexde.html");

  document.getElementById("drop2m").innerText = "Stammbaum";
  document.getElementById("familym").innerText = "Familie Oeder";
  document.getElementById("familym").setAttribute("href", "familynicode.html");
  document.getElementById("gcom").innerText = "Georg C. Oeder";

  document.getElementById("dropm").innerText = "Briefe";
  document.getElementById("chem").innerText = "Von Chalotte Hedevig Ericius";
  document.getElementById("chem").setAttribute("href", "letterchede.html");

  document.getElementById("linm").innerText = "An Carl von Linné";
  document.getElementById("linm").setAttribute("href", "letterlinde.html");

  document.getElementById("bugm").innerText = "An Thomas Bugge";
  document.getElementById("bugm").setAttribute("href", "letterbugde.html");

  document.getElementById("drop1m").innerText = "Biografie";
  document.getElementById("alifem").innerText =
    "Ein Leben - mit mehr als ein einsatz.";
  document.getElementById("alifem").setAttribute("href", "alifede.html");

  document.getElementById("andenkenm").innerText = "Andenken an Oeder.";
  document.getElementById("andenkenm").setAttribute("href", "andenkende.html");

  var a = document.createElement("a");
  a.innerText = "Vorrede";
  a.setAttribute("id", "preface");
  document.getElementById("manulist1").appendChild(a);

  document
    .getElementById("preface")
    .setAttribute("href", "bedenkenprefacede.html");

  var a = document.createElement("a");
  a.innerText = "Bedenken";
  a.setAttribute("id", "bedenken");
  document.getElementById("manulist2").appendChild(a);

  document.getElementById("bedenken").setAttribute("href", "alifede.html");

  var a = document.createElement("a");
  a.innerText = "Vorrede";
  a.setAttribute("id", "prefacem");
  document.getElementById("manulist1m").appendChild(a);

  document
    .getElementById("prefacem")
    .setAttribute("href", "bedenkenprefacede.html");

  var a = document.createElement("a");
  a.innerText = "Bedenken";
  a.setAttribute("id", "bedenkenm");
  document.getElementById("manulist2m").appendChild(a);

  document.getElementById("bedenkenm").setAttribute("href", "alifede.html");
}

if (path == "startseite" || path == "home" || path == "forside") {
  document.getElementById("home").style = "background-color:steelblue;";
}
if (path == "letterchedk" || path == "lettercheen" || path == "letterchede") {
  document.getElementById("drop").style = "background-color:steelblue;";
  document.getElementById("che").style = "background-color:steelblue;";
  document.getElementById("chapname").innerText = "Charlotte Hedevig Ericius";
}
if (path == "letterbugdk" || path == "letterbugen" || path == "letterbugde") {
  document.getElementById("drop").style = "background-color:steelblue;";
  document.getElementById("bug").style = "background-color:steelblue;";
  document.getElementById("chapname").innerText = "Thomas Bugge";
}

if (path == "letterlindk" || path == "letterlinen" || path == "letterlinde") {
  document.getElementById("drop").style = "background-color:steelblue;";
  document.getElementById("lin").style = "background-color:steelblue;";
  document.getElementById("chapname").innerText = "Carl von Linné";
}

if (
  path == "familynicodk" ||
  path == "familynicoen" ||
  path == "familynicode"
) {
  document.getElementById("drop2").style = "background-color:steelblue;";
  document.getElementById("family").style = "background-color:steelblue;";
}
if (
  path == "slægtstrænico" ||
  path == "slægtstrænico" ||
  path == "slægtstrænico"
) {
  document.getElementById("drop2").style = "background-color:steelblue;";
  document.getElementById("family").style = "background-color:steelblue;";
}
if (path == "andenkendk" || path == "andenkenen" || path == "andenkende") {
  document.getElementById("drop1").style = "background-color:steelblue;";
  document.getElementById("andenken").style = "background-color:steelblue;";
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
// var a = document.getElementById("list");
// var b = a.getElementsByTagName("li");
// console.log("length  " + b.length);
