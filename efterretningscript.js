let ContentDanish = [
];
let ContentEnglish = [
];

let ContentGerman = [
];

let chapter = [
];

let imgtoinsert = [ 
"efterretning 1",
"efterretning 2"    
];


var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
var maghide;
var magshow;
var magzoom;
var magseize;
var magform;
var magtoggle;
var closebut;
if (path == "efterretning-en") {
    // SetContent(chapter, ContentEnglish);
    infoTxt = "Translated from Danish.";
}
if (path == "efterretning-de") {
    // SetContent(chapter, ContentGerman);
    infoTxt = "Übersetzts von Dänish.";
}
if (path == "efterretning-dk") {
    // SetContent(chapter, ContentDanish);
    infoTxt = "Dansk original.";
}
let img = "./img/covers/krauter2.png";
let link =
    "https://www.google.dk/books/edition/Einleitung_zu_der_Kr%C3%A4uterkenntni%C3%9F/QfxbAAAAcAAJ?hl=da&gbpv=1";
SetLinkAndImgToFrontpage(link, img);

document.getElementById("info").innerHTML = infoTxt;
SetFlora();
SetImages(imgtoinsert, "efterretning");
