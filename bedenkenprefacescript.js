let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/bedenkenforside.png";
let link =
  "https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_wie_dem_Bauerns/LwBCAAAAcAAJ?hl=da&gbpv=1&dq=georg+christian+oeder&printsec=frontcover";
  SetLinkAndImgToFrontpage(link, img);

  if (path == "bedenkenpreface-en") {
  infoTxt= "Translated from German."
}
if (path == "bedenkenpreface-de") {
  infoTxt=" Deutsch Original."
}
if (path == "bedenkenpreface-dk") {
  infoTxt="Oversat fra tysk."
}
document.getElementById("info").innerHTML=infoTxt;

SetLinkAndImgToFrontpage(link, img);

SetFlora();
