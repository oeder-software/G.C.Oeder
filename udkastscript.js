let chapter = [
];
let letterBugContentDanish = [
];
let letterBugContentEnglish = [
];
let letterBugContentGerman = [
];

let img = "./img/covers/udkast.png";
let link =
"https://tidsskrift.dk/kuaarbog/article/view/83488/119990";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "udkast-dk") {
    infoTxt="Dansk original."
}

if (path == "udkast-en") {
    infoTxt= "Translated from Danish."
}

if (path == "udkast-de") {
    infoTxt=" Übersetzts von Dänish. ";
}

SetFlora();

document.getElementById("info").innerHTML=infoTxt;
