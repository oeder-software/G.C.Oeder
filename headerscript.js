var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (
  path == "indexdk" ||
  path == "indexen" ||
  path == "indexde" ||
  path == "index"
) {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
}
if (path == "letterchedk" || path == "letterchede" || path == "lettercheen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/leontodontrans.png),url(./img/headerbg.png);";
  document.getElementById("headerh2").innerText = "Charlotte Hedevig Ericius";
}

if (path == "letterbugdk" || path == "letterbugde" || path == "letterbugen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/bugge.jpg),url(./img/headerbg.png);";
  document.getElementById("headerh2").innerText = "Thomas Bugge";
}

if (path == "letterlindk" || path == "letterlinde" || path == "letterlinen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/linne.jpg),url(./img/headerbg.png);";
  document.getElementById("headerh2").innerText = "Carl von Linné";
}
if (path == "andenkendk" || path == "andenkende" || path == "andenkenen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/halem1.jpg),url(./img/headerbg.png);";
}
if (path == "oederianadk" || path == "oederianadk" || path == "oederianadk") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
      document.getElementById("headerh2").innerText = "Oederiana";

}

if (
  path == "botanicaljourney-de" ||
  path == "botanicaljourney-dk" ||
  path == "botanicaljourney-en"
) {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/botaniskhave.jpg),url(./img/headerbg.png);";
}

if (
  path == "bedenkenprefacedk" ||
  path == "bedenkenprefacede" ||
  path == "bedenkenprefaceen" ||
  path == "bedenkenadditionde" ||
  path == "bedenkenadditiondk" ||
  path == "bedenkenadditionen" ||
  path == "bedenkensupplementde" ||
  path == "bedenkensupplementdk" ||
  path == "bedenkensupplementen"
) {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/bedenkenforside.png),url(./img/headerbg.png);";
  // document.querySelector("body").style =
  //   "background-size: 110px 120px, 70px 110px, cover;";
}
if (path == "bedenkendk" || path == "bedenkende" || path == "bedenkenen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/bedenkenforside.png),url(./img/headerbg.png);";
}

switch (path) {
  case "andenkendk":
    document.getElementById("headerh2").innerText = "Til minde om Oeder";
    break;
  case "andenkende":
    document.getElementById("headerh2").innerText = "Andenken an Oeder";
    break;
  case "andenkenen":
    document.getElementById("headerh2").innerText = "In Memory of Oeder";
    break;
}
switch (path) {
  case "alifedk":
    document.getElementById("headerh2").innerText = "Et liv";
    break;
  case "alifeen":
    document.getElementById("headerh2").innerText = "A Life";
    break;
  case "alifede":
    document.getElementById("headerh2").innerText = "Ein Leben";
    break;
}
switch (path) {
  case "bedenkenprefacedk":
    document.getElementById("headerh2").innerText = "Forord til Betænkning";
    break;
  case "bedenkenprefaceen":
    document.getElementById("headerh2").innerText =
      "Preface to the Consideration";
    break;
  case "bedenkenprefacede":
    document.getElementById("headerh2").innerText = "Vorrede zu Bedenken";
    break;
}

switch (path) {
  case "bedenkenadditionen":
    document.getElementById("headerh2").innerText =
      "Addition to the Reflections";
    break;

  case "bedenkenadditiondk":
    document.getElementById("headerh2").innerText = "Tillæg til betænkningen";
    break;
  case "bedenkenadditionde":
    document.getElementById("headerh2").innerText = "Zusäße Zu dem Bedenken";
    break;
}
switch (path) {
  case "bedenkensupplementen":
    document.getElementById("headerh2").innerText =
      "Supplement to the Reflections";
    break;

  case "bedenkensupplementdk":
    document.getElementById("headerh2").innerText =
      "Tilføjelser til betænkningen";
    break;
  case "bedenkensupplementde":
    document.getElementById("headerh2").innerText = "Zulage Zu dem Bedenken";
    break;
}
switch (path) {
  case "bedenkenen":
    document.getElementById("headerh2").innerText =
      "Reflections on the Question:";
    break;

  case "bedenkendk":
    document.getElementById("headerh2").innerText =
      "Overvejelser over spørgsmålet:";
    break;
  case "bedenkende":
    document.getElementById("headerh2").innerText = "Bedenken über di Frage:";
    break;
}

switch (path) {
  case "botanicaljourney-de":
    document.getElementById("headerh2").innerText = "Oeders Botanische reise";
    break;

  case "botanicaljourney-dk":
    document.getElementById("headerh2").innerText = "Oeders Botanische reise";
    break;
  case "botanicaljourney-en":
    document.getElementById("headerh2").innerText = "Oeders Botanische reise";
    break;
}
switch (path) {
  case "familynicodk":
    document.getElementById("headerh2").innerText = "Stamtræ familien Oeder";
    break;

  case "familynicode":
    document.getElementById("headerh2").innerText = "Stambaum Familie Oeder";
    break;
  case "familynicoen":
    document.getElementById("headerh2").innerText = "Family Oeder";
    break;
}

switch (path) {
  case "familyoederdk":
    document.getElementById("headerh2").innerText = "Oeder's stamtræ";
    break;
}
if (
  path == "familynicodk" ||
  path == "familynicode" ||
  path == "familynicoen" ||
  path == "familyoederdk"
) {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
}
if (path == "alifedk" || path == "alifede" || path == "alifeen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
}
