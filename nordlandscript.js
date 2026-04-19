let letterBugImg = [
    "oederiana.png",
];
let letterBugAlt = [
    "Nordland",
];
let chapter = [
];
let letterBugContentDanish = [
];
let letterBugContentEnglish = [
];
let letterBugContentGerman = [
];

SetBioImage(letterBugImg, letterBugAlt);

let letterBugBio = [
    "nordland",
];
PrependBrBeforeChap(chapter);

// document.getElementById("bio2").setAttribute("height", "fit-content");
// document.getElementById("bio3").setAttribute("height", "fit-content");
// document.getElementById("bio4").setAttribute("height", "fit-content");
// document.getElementById("bio5").setAttribute("height", "fit-content");
let img = "./img/covers/nordland.png";
let link =
"https://gdz.sub.uni-goettingen.de/id/PPN720564182?tify=%7B%22pages%22%3A%5B73%5D%2C%22pan%22%3A%7B%22x%22%3A0.464%2C%22y%22%3A0.96%7D%2C%22view%22%3A%22toc%22%2C%22zoom%22%3A0.638%7D";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
let oederianaLink = "oederiana-en.html"
if (path == "nordland-dk") {
    SetBio(letterBugBio, "DK");
    infoTxt="Oversat fra tysk."
        oederianaLink = "oederiana-dk.html#chap89";

}

if (path == "nordland-en") {
    SetBio(letterBugBio, "EN");
    infoTxt= "Translated from German."
      oederianaLink = "oederiana-en.html#chap89";
  
}

if (path == "nordland-de") {
    SetBio(letterBugBio, "DE");
    infoTxt=" Deutsch Original.";
    oederianaLink = "oederiana-de.html#chap89";
    
}
document
    .getElementById("img1href")
    .setAttribute(
        "href",
        oederianaLink
    );
document.getElementById("img1href").setAttribute("target", "_blank");
document.getElementById("img1href").style="cursor: pointer;"
document.getElementById("img1").setAttribute("class", "asideLinkimgHover")

SetFlora();

document.getElementById("info").innerHTML=infoTxt;
