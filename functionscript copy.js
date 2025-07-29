let contentgerman = ["Inhaltsverzeichnis", "Zu Anfang"];
let contentenglish = ["Content", "Page start"];
let contentdanish = ["Indhold", "Til start"];

function SetContent(contentLang) {
  var a = document.createElement("p");
  a.innerText = contentLang[0];
  a.style = "margin: 0; font-size: 20px;";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = contentLang[1];
  a.href = "#dex";
  document.getElementById("content").appendChild(a);

  var a = document.createElement("a");
  a.innerText = contentLang[0];
  a.setAttribute("onclick", "closeSidebar()");
  a.style = "margin: 0; padding: 0;";
  a.style = "cursor: none; font-size: 20px";
  a.setAttribute("id", "sidecontent");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = contentLang[1];
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  a.style = "margin: 0; padding: 0;";
  document.getElementById("sidebarcontent").appendChild(a);
}

function SetImage(list) {
  for (let index = 0; index < list.length; index++) {
    const element = image[index];

    console.log("img" + (index + 1));
    document.getElementById("img" + (index + 1)).setAttribute("src", element);
  }
}

function SetLetterCheBio(bio, language) {
  for (let index = 0; index < bio.length; index++) {
    document
      .getElementById("bio" + (index + 1))
      .setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
  }
}
function SetLetterCheImg(img, alt) {
  for (let index = 0; index < img.length; index++) {
    document
      .getElementById("img" + (index + 2))
      .setAttribute("src", "./img/" + img[index]);
    document
      .getElementById("img" + (index + 2))
      .setAttribute("alt", alt[index]);
  }
}
function SetAlifeBio(bio, language) {
  for (let index = 0; index < bio.length; index++) {
    document
      .getElementById("bio" + (index + 1))
      .setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
  }
}
function SetAlifeImg(img, alt) {
  for (let index = 0; index < img.length; index++) {
    document
      .getElementById("img" + (index + 1))
      .setAttribute("src", "./img/" + img[index]);
    document
      .getElementById("img" + (index + 1))
      .setAttribute("alt", alt[index]);
  }
}

function SetAlifeContent(chapter, content) {
  for (let index = 0; index < content.length; index++) {
    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("id", index);
    document.getElementById("content").appendChild(a);

    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("id", index + "m");
    a.setAttribute("onclick", "closeSidebar()");
    document.getElementById("sidebarcontent").appendChild(a);
  }
}

function SetLetterCheContent(chapter, content) {
  for (let index = 0; index < content.length; index++) {
    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("id", index);
    document.getElementById("content").appendChild(a);

    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("onclick", "closeSidebar()");
    document.getElementById("sidebarcontent").appendChild(a);
  }
}
function SetContentAndenken(chapter, content) {
  for (let index = 0; index < content.length; index++) {
    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("id", index);

    document.getElementById("content").appendChild(a);

    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("id", index + "m");

    a.setAttribute("onclick", "closeSidebar()");
    document.getElementById("sidebarcontent").appendChild(a);
  }
}

function showSidebar() {
  document.querySelector(".sidebar").style.display = "flex";
}
function showSidebarContent() {
  // document.getElementById("sidebarcontent").style.display = "flex";
  // document.getElementById("sidebarcontent").style.right="0";
  document.getElementById("sidebarcontent").setAttribute("class", "show")
  document.getElementById("sidebarcontent").classList
  // document.getElementById("sidebarcontent").style.transition = "right 3000ms ease-in";

}

function closeSidebar() {
  document.querySelector(".sidebar").style.display = "none";
  document.getElementById("sidebarcontent").style.display = "none";

}
function SetALink(start, end) {
  for (let index = start; index < end; index++) {
    document
      .getElementById("a" + index)
      .setAttribute(
        "href",
        "https://www.google.dk/books/edition/Zus%C3%A4tze_zu_dem_Bedenken_%C3%BCber_die_Frage/2EalGGmOXRMC?hl=da&gbpv=1&dq=Zus%C3%A4tze+zu+dem+bedenken+%C3%BCber&pg=PA" +
          index
      );
    document.getElementById("a" + index).setAttribute("target", "_blank");
  }
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
window.onscroll = function () {
  let count = 0;
  for (let index = 0; index < chapter.length; index++) {
    document.getElementById(index).style.backgroundColor = "rgb(241, 235, 209)";
    document.getElementById(index).style.color = "black";
    document.getElementById(index + "m").style.backgroundColor =
      "rgb(241, 235, 209)";
    document.getElementById(index + "m").style.color = "black";
  }
  for (let index = chapter.length - 1; index > -1; index--) {
    var chapString = chapter[index];
    chapString = chapString.slice(1);
    var chapterToHighlight = document.getElementById(chapString);
    if (chapterToHighlight.getBoundingClientRect().top < 500 && count < 1) {
      document.getElementById(index).style.backgroundColor = "steelblue";
      document.getElementById(index).style.color = "white";
      document.getElementById(index + "m").style.backgroundColor = "steelblue";
      document.getElementById(index + "m").style.color = "white";

      count++;
    }
    if (chapterToHighlight.getBoundingClientRect().top > 500) {
      document.getElementById(index).style.backgroundColor =
        "rgb(241, 235, 209)";
      document.getElementById(index).style.color = "black";
      document.getElementById(index + "m").style.backgroundColor =
        "rgb(241, 235, 209)";
      document.getElementById(index + "m").style.color = "black";
    }
  }
};
