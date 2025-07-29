let bedenkenContentDanish = [
  "Inauguralafhandling om afledning og tilbagestrømning ved åreåbning.",
  "Til den højtberømte og højtlærde forfatter af disputatsen sender præsidenten [sine hilsner].",
  "Georg Wilhelm Oeder til Georg Christian Oeder, den bedste bror, æret med de højeste æresbevisninger af den ærede medicinske orden i Göttingen i 1749.",
  "ALBERT VON HALLER, nuværende dekan for det medicinske fakultet, annoncerer den højtlærde og ædle mand GEORG CHRISTIAN OEDERs medicinske disputatstil den 11. oktober 1749 og tilføjer observationer om de hyppigere galdesten.",
];
let bedenkenContentEnglish = [
  "Inaugural Dissertation on Derivation and Reflux by Means of Venesection.",
  "To the most illustrious and most learned author of the dissertation the president [sends his greetings].",
  "Georg Wilhelm Oeder to Georg Christian Oeder, the best brother, honored with the highest honors by the esteemed medical order at Göttingen in 1749.",
  "ALBERT VON HALLER, currently Dean of the Faculty of Medicine, announces the inaugural medical dissertation of the most learned and noble gentleman GEORG CHRISTIAN OEDERfor the 11th of October 1749 and addsobservations on the more frequent gallstones.",
];

let bedenkenContentGerman = [
  "Inaugural-Dissertation über die Ableitung und den Rückfluss durch den Aderlass.",
  "Dem hochberühmten und höchst gelehrten Autor der Dissertation widmet der Vorsitzende [seine Grüße].",
  "Georg Wilhelm Oeder an Georg Christian Oeder, den besten Bruder, geehrt mit den höchsten Ehren vom angesehenen Medizinischen Orden in Göttingen im Jahr 1749.",
  "ALBERT VON HALLER, derzeit Dekan der medizinischen Fakultät, kündigt die Inauguraldissertation des höchst gelehrten und edlen Herrn GEORG CHRISTIAN OEDER im Fach Medizin für den 11. Oktober 1749 anund fügt Beobachtungen über die häufigeren Gallensteine hinzu.",
];

let chapter = ["#chap1", "#chap39", "#bro", "#chap40"];
PrependBrBeforeChap(chapter);

let img = "./img/Dissertation.png";
let link =
  "https://www.google.dk/books/edition/De_derivatione_et_reculsione_per_venae_s/rm9QAAAAcAAJ?gbpv=1";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "dissertation-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
}
if (path == "dissertation-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
}
if (path == "dissertation-dk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, bedenkenContentDanish);
}
