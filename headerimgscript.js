var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (
  path == "indexdk" ||
  path == "indexen" ||
  path == "indexde" ||
  path == "index" || 
  "G.C.Oeder"
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
    "background-image:  url(./img/logo.png), url(.img/linne.jpg),url(./img/headerbg.png);";
  document.getElementById("headerh2").innerText = "Carl von Linné";
}
if (path == "andenkendk" || path == "andenkende" || path == "andenkenen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(.img/halem1.jpg),url(./img/headerbg.png);";
}
if (
  path == "bedenkenprefacedk" ||
  path == "bedenkenprefacede" ||
  path == "bedenkenprefaceen"
) {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/bedenkenforside.png),url(./img/headerbg.png);";
  // document.querySelector("body").style =
  //   "background-size: 110px 120px, 110px 110px, cover;";
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

if (
  path == "familynicodk" ||
  path == "familynicode" ||
  path == "familynicoen"
) {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
}
if (path == "alifedk" || path == "alifede" || path == "alifeen") {
  document.querySelector("body").style =
    "background-image:  url(./img/logo.png), url(./img/oederlogo.png),url(./img/headerbg.png);";
}
