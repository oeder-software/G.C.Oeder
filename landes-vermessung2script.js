let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/landes-vermessung2.png";
let link = "https://ds.ub.uni-bielefeld.de/viewer/image/2085009_002/488/";
SetLinkAndImgToFrontpage(link, img);
SetFlora();

  if (path == "landes-vermessung2-en") {
  infoTxt= "Translated from German."
}
if (path == "landes-vermessung2-de") {
  infoTxt=" Deutsch Original."
}
if (path == "landes-vermessung2-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;
