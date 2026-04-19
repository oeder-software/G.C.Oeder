let chapter = [
];
let letterBugContentDanish = [
];
let letterBugContentEnglish = [
];
let letterBugContentGerman = [
];

let img = "./img/covers/xxxiii.png";
let link =
"https://www.digitale-sammlungen.de/en/view/bsb11099101?q=oeder&page=386";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "xxxiii-dk") {
    infoTxt="Oversat fra tysk."
}

if (path == "xxxiii-en") {
    infoTxt= "Translated from German."
}

if (path == "xxxiii-de") {
    infoTxt=" Deutsch Original.";
}

SetFlora();

document.getElementById("info").innerHTML=infoTxt;
