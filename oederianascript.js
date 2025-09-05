let bedenkenContentDanish = [
    "Forord",
  "G. C. v. Oeders første irettesættelse af en indtrængen prydet med noter af en veteran.",
  "Appel til det danske publikum af Herr Stiftsamtmand von Oeder i Oldenburg, med noter af en veteran.",
  "Om en by, der skal etableres i Nordlanden Skrevet i juni 1763 og Med noter",
  "Bemærkninger om tankerne vedrørende militærvæsenet i Danmark. Overgivet af forfatteren, som ikke var soldat, til en minister, der levede på det tidspunkt i året 1767.",
  "Memoire fra den preussiske minister til Kong Christian VII, overleveret i år 1766 eller 1767.",
];

let bedenkenContentEnglish = [
    "Preface",
  "G. C. v. Oeders erste Rüge einer Zudringlichkeit geziert mit Noten eines Veteranen.",
  "Appell An das dänische Publicum von dem Herrn Stifts-Amtmann von Oeder in Oldenburg, mit Noten von einem Veteranen.",
  "Von einer in den Nordlanden zu errichtenden Stadt. Geschrieben im Junio 1763.",
  "Bemerkungen über die Gedanken von dem Militairwesen in Dännemark. übergeben on dem Verfasser der kein Soldat war, an einen damahls lebenden Minister in dem Jahr 1767.",
  "Memoire des preußischen Ministers an den König Christian VIl, übergeben im Jahr 1766 oder 1767.",
];
let bedenkenContentGerman = [
    "Vorede",
  "G. C. v. Oeders erste Rüge einer Zudringlichkeit geziert mit Noten eines Veteranen.",
  "Appell An das dänische Publicum von dem Herrn Stifts-Amtmann von Oeder in Oldenburg, mit Noten von einem Veteranen.",
  "Von einer in den Nordlanden zu errichtenden Stadt. Geschrieben im Junio 1763.",
  "Bemerkungen über die Gedanken von dem Militairwesen in Dännemark. übergeben on dem Verfasser der kein Soldat war, an einen damahls lebenden Minister in dem Jahr 1767.",
  "Memoire des preußischen Ministers an den König Christian VIl, übergeben im Jahr 1766 oder 1767.",
];

let chapter = ["#chap0","#chap7", "#chap49", "#chap87", "#chap139", "#chap225"];
// let Chapter = ["chap7", "chap49", "chap89", "chap141", "chap225"];
// PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
var buttontext = [];
// if (path == "oederianaen") {
//   SetContent(contentenglish);
//   SetAlifeContent(bedenkenContentChapter, bedenkenContentEnglish);
// }
if (path == "oederiana-de") {
    buttontext = [
      "Briefe zeigen",
      "Noten zeigen",
      "Briefe verstecken",
      "Noten verstecken",
    ];

//   document.getElementById("oederbut").innerText = "";
  // document.getElementById("oletter").innerText = "breve";
//   SetContent(contentgerman);
  SetContent(chapter, bedenkenContentGerman);
}

if (path == "oederiana-en") {
  buttontext = ["Show Letters", "Show Notes", "Hide Letters", "Hide Notes"];
//   document.getElementById("oederbut").innerText = "";

//   SetContent(contentenglish);
  SetContent(chapter, bedenkenContentEnglish);
}
if (path == "oederiana-dk") {
  buttontext = ["Vis breve", "Vis noter", "Skjul breve", "Skjul noter"];
//   document.getElementById("oederbut").innerText = "";

//   SetContent(contentdanish);
  SetContent(chapter, bedenkenContentDanish);
}
let img = "./img/covers/oederiana.png";
let link = " https://www.kb.dk/e-mat/dod/130019453090.pdf";
SetLinkAndImgToFrontpage(link, img);

var letterIsChecked = false;
var notesIsChecked = false;
var oed;
var cam;
function oederiana(showItem) {
  cam = document.getElementsByClassName("notes");
  oed = document.getElementsByClassName("letters");

  if (showItem == "letters") {
    switch (letterIsChecked) {
      case false:
        letterIsChecked = true;
        document.getElementById("oletter").innerText = buttontext[0];
        document.getElementById("oletter").style =
          "background-color: var(--navbarColorMint); color: black;";
        document.getElementById("oletterm").innerText = buttontext[0];
        document.getElementById("oletterm").style =
          "background-color: var(--navbarColorMint); color: black;";

        break;
      case true:
        letterIsChecked = false;
        document.getElementById("oletter").innerText = buttontext[2];
        document.getElementById("oletter").style = "var(--navbarColorBlue); color: black;";
        document.getElementById("oletterm").innerText = buttontext[2];
        document.getElementById("oletterm").style = "var(--navbarColorBlue); color: black;";

        break;
    }
    if (notesIsChecked == true) {
      notesIsChecked = false;
      document.getElementById("cnotes").innerText = buttontext[3];
      document.getElementById("cnotes").style = "var(--navbarColorBlue); color: black;";
      document.getElementById("cnotesm").innerText = buttontext[3];
      document.getElementById("cnotesm").style = "var(--navbarColorBlue); color: black;";

      toggle("notesIsChecked", cam);
    }
    toggle("letterIsChecked", oed);
  }
  if (showItem == "notes") {
    switch (notesIsChecked) {
      case false:
        notesIsChecked = true;
        document.getElementById("cnotes").innerText = buttontext[1];
        document.getElementById("cnotes").style = "background-color: var(--navbarColorMint); color: black;";
        document.getElementById("cnotesm").innerText = buttontext[1];
        document.getElementById("cnotesm").style =
          "background-color: var(--navbarColorMint); color: black;";

        break;
      case true:
        notesIsChecked = false;
        document.getElementById("cnotes").innerText = buttontext[3];
        document.getElementById("cnotes").style = "var(--navbarColorBlue); color: black;";
        document.getElementById("cnotesm").innerText = buttontext[3];
        document.getElementById("cnotesm").style = "var(--navbarColorBlue); color: black;";

        break;
    }
    if (letterIsChecked == true) {
      letterIsChecked = false;
      document.getElementById("oletter").innerText = buttontext[2];
      document.getElementById("oletter").style = "var(--navbarColorBlue); color: black;";
      document.getElementById("oletterm").innerText = buttontext[2];
      document.getElementById("oletterm").style = "var(--navbarColorBlue); color: black;";

      toggle("letterIsChecked", oed);
    }

    // page = document.getElementsByClassName("letter")
    toggle("notesIsChecked", cam);
  }
  function toggle(isChecked, showhide) {
    var x = window.matchMedia("(max-width: 800px)");
    for (let index = 0; index < showhide.length; index++) {
      switch (eval(isChecked)) {
        case false:
          showhide[index].style = "display: block;";
          // showhide[index].parentElement.style = "width: 50%;"
          showhide[index].parentElement.style = "display: inline;";
          break;
        case true:
          showhide[index].style = "display: none;";
          showhide[index].parentElement.style = "display: none;";
          break;
      }
      if (showhide == cam && eval(isChecked) && !x.matches) {
        oed[index].parentElement.style = "width: 80%";
      }
      if (showhide == oed && eval(isChecked) && !x.matches) {
        cam[index].parentElement.style = "width: 80%";
      }
      // if (showhide == oed && !eval(isChecked)  && !x.matches) {
      //     oed[index].parentElement.style = "width: 80%"
      // }
      // if (showhide == cam && !eval(isChecked)  && !x.matches) {
      //     cam[index].parentElement.style = "width: 80%"
      // }

      if (showhide == oed && !eval(isChecked) && !x.matches) {
        cam[index].parentElement.style = "width: 50%";
      }
      if (showhide == cam && !eval(isChecked) && !x.matches) {
        oed[index].parentElement.style = "width: 50%";
      }
      if (showhide == oed && eval(isChecked) == false && x.matches) {
        cam[index].parentElement.style = "width: 100%";
      }
      if (showhide == cam && eval(isChecked) == false && x.matches) {
        oed[index].parentElement.style = "width: 100%";
      }
    }
    if (letterIsChecked == true || notesIsChecked == true) {
      var line = document.getElementsByTagName("hr");
      for (let index = 0; index < line.length; index++) {
        line[index].style = "display: block;";
      }
    }
    if (letterIsChecked == false && notesIsChecked == false) {
      var line = document.getElementsByTagName("hr");
      for (let index = 0; index < line.length; index++) {
        line[index].style = "display: block;";
      }
    }
  }
}
PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "oederiana-en") {
  infoTxt= "Translated from German."
//   SetContent(chapter, ContentEnglish);
}
if (path == "oederiana-de") {
  infoTxt=" Deutsch Original."
//   SetContent(chapter, ContentGerman);
}
if (path == "oederiana-dk") {
  infoTxt="Oversat fra tysk."
//   SetContent(chapter, ContentDanish);
}
document.getElementById("info").innerHTML=infoTxt;
SetFlora();