let contentgerman = ["Inhaltsverzeichnis", "Zu Anfang"];
let contentenglish = ["Content", "Page start"];
let contentdanish = ["Indhold", "Til start"];

// a = setAttribute("onclick", "closeSidebar()");
// document.getElementsByTagName("main").appendChild(a);

function SetContent(contentLang) {
  var a = document.createElement("p");
  a.innerText = contentLang[0];
  document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = contentLang[1];
  a.href = "#dex";
  document.getElementById("content").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("content").appendChild(a);

  var a = document.createElement("p");
  a.innerText = contentLang[0];
  a.setAttribute("onclick", "closeSidebar()");
  a.style = "cursor: none; font-size: 20px";

  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = contentLang[1];
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  // a = document.createElement("br");
  // document.getElementById("sidebarcontent").appendChild(a);
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
    document.getElementById("content").appendChild(a);

    a = document.createElement("a");
    a.innerText = content[index];
    a.href = chapter[index];
    a.setAttribute("onclick", "closeSidebar()");
    document.getElementById("sidebarcontent").appendChild(a);
  }
}

function SetLetterCheContent(chapter, content) {
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
