let bedenkenContentDanish = [
  "Betænkning over spørgsmålet: Hvordan kan frihed og ejendom sikres for bondeklassen i de lande, hvor begge mangler?",
  "Indhold.",
  "Nærmere præcisering af min mening.",
  "Befolkning.",
  "Forholdet mellem landbrug og borgerligt erhverv",
  "Fabrikker.",
  "Udvidet total af nationalindkomsten.",
  "Forsvarsstand",
  "Mulighed for at opdele store godser uden at miste godsejernes privilegier og sikkerhed for fremtiden.",
  "Mulighed for Opdeling Uden Tab af Godsejernes Indkomst.",
  "Fremgangsmåde ved gennemførelsen af opsplitningen.",
  "Spørgsmålet om, hvad der er retfærdigt?",
  "Vanskeligheder, der skal overvejes ved gennemførelsen af forandringen i et helt land",
  "Eksempel som fyrsten kan give på sine domæner.",
  "Bestemmelse af hoveriarbejdet.",
  "Afgifter skal fastsættes in natura, ikke i penge.",
  "Betragtninger ved ændringer af de én gang oprettede skatteregistre over landejendomme og grunde til regulering af statens afgifter.",
];

let bedenkenContentEnglish = [
  "G. C. v. Oeders erste Rüge einer Zudringlichkeit geziert mit Noten eines Veteranen.",
  "Appell An das dänische Publicum von dem Herrn Stifts-Amtmann von Oeder in Oldenburg, mit Noten von einem Veteranen.",
  "Von einer in den Nordlanden zu errichtenden Stadt. Geschrieben im Junio 1763.",
  "Bemerkungen über die Gedanken von dem Militairwesen in Dännemark. übergeben on dem Verfasser der kein Soldat war, an einen damahls lebenden Minister in dem Jahr 1767.",
  "Memoire des preußischen Ministers an den König Christian VIl, übergeben im Jahr 1766 oder 1767.",
];
let bedenkenContentGerman = [
  "G. C. v. Oeders erste Rüge einer Zudringlichkeit geziert mit Noten eines Veteranen.",
  "Appell An das dänische Publicum von dem Herrn Stifts-Amtmann von Oeder in Oldenburg, mit Noten von einem Veteranen.",
  "Von einer in den Nordlanden zu errichtenden Stadt. Geschrieben im Junio 1763.",
  "Bemerkungen über die Gedanken von dem Militairwesen in Dännemark. übergeben on dem Verfasser der kein Soldat war, an einen damahls lebenden Minister in dem Jahr 1767.",
  "Memoire des preußischen Ministers an den König Christian VIl, übergeben im Jahr 1766 oder 1767.",
];

let chapter = ["#chap7", "#chap49", "#chap89", "#chap141", "#chap225"];
// let Chapter = ["chap7", "chap49", "chap89", "chap141", "chap225"];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
var buttontext = [];
// if (path == "oederianaen") {
//   SetContent(contentenglish);
//   SetAlifeContent(bedenkenContentChapter, bedenkenContentEnglish);
// }
if (path == "oederianade") {
  buttontext = [
    "Briefe zeigen",
    "Noten zeigen",
    "Briefe verstecken",
    "Noten verstecken",
  ];

  document.getElementById("oederbut").innerText = "";
  // document.getElementById("oletter").innerText = "breve";
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
}
if (path == "oederianaen") {
  buttontext = ["Show Letters", "Show Notes", "Hide Letters", "Hide Notes"];

  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
}
if (path == "oederianadk") {
  buttontext = ["Vis breve", "Vis noter", "Skjul breve", "Skjul noter"];
  document.getElementById("oederbut").innerText = "";

  SetContent(contentdanish);
  SetAlifeContent(chapter, bedenkenContentDanish);
}

// var letterIsChecked = false;
// var notesIsChecked = false;
// var oed;
// var cam;
// function oederiana(showItem) {
//   cam = document.getElementsByClassName("notes");
//   oed = document.getElementsByClassName("letters");
//   var a = document.getElementsByTagName("hr");

//   // var a = document.getElementsByTagName("hr")

//   if (showItem == "letters") {
//     switch (letterIsChecked) {
//       case false:
//         letterIsChecked = true;
//         document.getElementById("oletter").innerText = buttontext[0];
//         document.getElementById("oletter").style =
//           "background-color: steelblue";
//         break;
//       case true:
//         letterIsChecked = false;
//         document.getElementById("oletter").innerText = buttontext[2];
//         document.getElementById("oletter").style = "background-color:darkblue";
//         break;
//     }
//     if (notesIsChecked == true) {
//       notesIsChecked = false;
//       document.getElementById("cnotes").innerText = buttontext[1];
//       document.getElementById("cnotes").style = "background-color:darkblue";
//       toggle("notesIsChecked", cam);
//     }
//     toggle("letterIsChecked", oed);
//   }
//   if (showItem == "notes") {
//     switch (notesIsChecked) {
//       case false:
//         notesIsChecked = true;
//         document.getElementById("cnotes").innerText = buttontext[1];
//         document.getElementById("cnotes").style = "background-color: steelblue";
//         break;
//       case true:
//         notesIsChecked = false;
//         document.getElementById("cnotes").innerText = buttontext[3];
//         document.getElementById("cnotes").style = "background-color:darkblue";
//         break;
//     }
//     if (letterIsChecked == true) {
//       letterIsChecked = false;
//       document.getElementById("oletter").innerText = buttontext[2];
//       document.getElementById("oletter").style = "background-color:darkblue";
//       toggle("letterIsChecked", oed);
//     }
//     toggle("notesIsChecked", cam);
//   }
//   function toggle(isChecked, showhide) {
//     var x = window.matchMedia("(max-width: 800px)");
//     for (let index = 0; index < showhide.length; index++) {
//       switch (eval(isChecked)) {
//         case false:
//           showhide[index].style = "display: block;";
//           // showhide[index].parentElement.style = "width: 50%;"
//           showhide[index].parentElement.style = "display: inline;";
//           break;
//         case true:
//           showhide[index].style = "display: none;";
//           showhide[index].parentElement.style = "display: none;";
//           break;
//       }
//       if (showhide == cam && eval(isChecked) && !x.matches) {
//         oed[index].parentElement.style = "width: 80%";
//       }
//       if (showhide == oed && eval(isChecked) && !x.matches) {
//         cam[index].parentElement.style = "width: 80%";
//       }
//       // if (showhide == oed && !eval(isChecked)  && !x.matches) {
//       //     oed[index].parentElement.style = "width: 80%"
//       // }
//       // if (showhide == cam && !eval(isChecked)  && !x.matches) {
//       //     cam[index].parentElement.style = "width: 80%"
//       // }

//       if (showhide == oed && !eval(isChecked) && !x.matches) {
//         cam[index].parentElement.style = "width: 50%";
//       }
//       if (showhide == cam && !eval(isChecked) && !x.matches) {
//         oed[index].parentElement.style = "width: 50%";
//       }
//       if (showhide == oed && eval(isChecked) == false && x.matches) {
//         cam[index].parentElement.style = "width: 100%";
//       }
//       if (showhide == cam && eval(isChecked) == false && x.matches) {
//         oed[index].parentElement.style = "width: 100%";
//       }
//     }
//     if (letterIsChecked == true || notesIsChecked == true) {
//       var line = document.getElementsByTagName("hr");
//       for (let index = 0; index < line.length; index++) {
//         line[index].style = "display: none;";
//       }
//     }
//     if (letterIsChecked == false && notesIsChecked == false) {
//       var line = document.getElementsByTagName("hr");
//       for (let index = 0; index < line.length; index++) {
//         line[index].style = "display: block;";
//       }
//     }
//   }
// }

// window.onscroll = function () {
//   let count = 0;
//   for (let index = 0; index < chapter.length; index++) {
//     document.getElementById(index).style.backgroundColor = "rgb(241, 235, 209)";
//     document.getElementById(index).style.color = "black";
//     document.getElementById(index + "m").style.backgroundColor =
//       "rgb(241, 235, 209)";
//     document.getElementById(index + "m").style.color = "black";
//   }
//   for (let index = chapter.length - 1; index > -1; index--) {
//     var chapString = chapter[index];
//     chapString = chapString.slice(1);
//     var chapterToHighlight = document.getElementById(chapString);
//     if (chapterToHighlight.getBoundingClientRect().top < 20 && count < 1) {
//       document.getElementById(index).style.backgroundColor = "steelblue";
//       document.getElementById(index).style.color = "white";
//       document.getElementById(index + "m").style.backgroundColor = "steelblue";
//       document.getElementById(index + "m").style.color = "white";

//       count++;
//     }
//     if (chapterToHighlight.getBoundingClientRect().top > 20) {
//       document.getElementById(index).style.backgroundColor =
//         "rgb(241, 235, 209)";
//       document.getElementById(index).style.color = "black";
//       document.getElementById(index + "m").style.backgroundColor =
//         "rgb(241, 235, 209)";
//       document.getElementById(index + "m").style.color = "black";
//     }
//   }
// };
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
          "background-color: steelblue";
        document.getElementById("oletterm").innerText = buttontext[0];
        document.getElementById("oletterm").style =
          "background-color: steelblue";

        break;
      case true:
        letterIsChecked = false;
        document.getElementById("oletter").innerText = buttontext[2];
        document.getElementById("oletter").style = "background-color:darkblue";
        document.getElementById("oletterm").innerText = buttontext[2];
        document.getElementById("oletterm").style = "background-color:darkblue";

        break;
    }
    if (notesIsChecked == true) {
      notesIsChecked = false;
      document.getElementById("cnotes").innerText = buttontext[3];
      document.getElementById("cnotes").style = "background-color:darkblue";
      document.getElementById("cnotesm").innerText = buttontext[3];
      document.getElementById("cnotesm").style = "background-color:darkblue";

      toggle("notesIsChecked", cam);
    }
    toggle("letterIsChecked", oed);
  }
  if (showItem == "notes") {
    switch (notesIsChecked) {
      case false:
        notesIsChecked = true;
        document.getElementById("cnotes").innerText = buttontext[1];
        document.getElementById("cnotes").style = "background-color: steelblue";
        document.getElementById("cnotesm").innerText = buttontext[1];
        document.getElementById("cnotesm").style =
          "background-color: steelblue";

        break;
      case true:
        notesIsChecked = false;
        document.getElementById("cnotes").innerText = buttontext[3];
        document.getElementById("cnotes").style = "background-color:darkblue";
        document.getElementById("cnotesm").innerText = buttontext[3];
        document.getElementById("cnotesm").style = "background-color:darkblue";

        break;
    }
    if (letterIsChecked == true) {
      letterIsChecked = false;
      document.getElementById("oletter").innerText = buttontext[0];
      document.getElementById("oletter").style = "background-color:darkblue";
      document.getElementById("oletterm").innerText = buttontext[0];
      document.getElementById("oletterm").style = "background-color:darkblue";

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
        line[index].style = "display: none;";
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
