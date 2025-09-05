let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/landes-vermessung1.png";
let link = "https://ds.ub.uni-bielefeld.de/viewer/image/2085009_001/464/";
SetLinkAndImgToFrontpage(link, img);
SetFlora();

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "landes-vermessung1-en") {
  infoTxt= "Translated from German."
}
if (path == "landes-vermessung1-de") {
  infoTxt=" Deutsch Original."
}
if (path == "landes-vermessung1-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
