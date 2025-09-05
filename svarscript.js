let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let chapter = [];
let img = "./img/covers/svar.png";
let link =
  "https://www.google.dk/books/edition/Svar_paa_Recensionen_i_den_almindelige_d/PF1bQKh_-I0C?hl=da&gbpv=1";
SetLinkAndImgToFrontpage(link, img);
// SetLetterCheContent(chapter, content);
SetFlora();

  if (path == "svar-en") {
  infoTxt= "Translated from German."
}
if (path == "svar-de") {
  infoTxt=" Deutsch Original."
}
if (path == "svar-dk") {
  infoTxt="Oversat fra tysk."
}

document.getElementById("info").innerHTML=infoTxt;
