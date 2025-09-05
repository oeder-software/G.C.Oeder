let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

  if (path == "kritters-en") {
  infoTxt= "Translated from German."
}
if (path == "kritters-de") {
  infoTxt=" Deutsch Original."
}
if (path == "kritters-dk") {
  infoTxt="Oversat fra tysk."
}
SetFlora();

let img = "./img/covers/kritters.png";
let link = "https://www.google.dk/books/edition/G%C3%B6ttingisches_Magazin_der_Wissenschafte/8HRlAAAAcAAJ?hl=da&gbpv=1&dq=%22g%C3%B6ttingischen+magazin%22&pg=PA483&printsec=frontcover";
SetLinkAndImgToFrontpage(link, img);
document.getElementById("info").innerHTML=infoTxt;
