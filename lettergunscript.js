let chapter = ["#chap1", "#chap2", "#chap3", "#chap4", "#chap5", "#chap6"];
let letterBernContentDanish = [
  "1762 27. Marts Kbhvn.",
  "1763 5. Marts Kjøbenhavn.",
  "1768 5. Marts, Kjøbenhavn.",
  "1768 9. April, Kiøbenh.",
  "1768 3. Dec., Kjøbenhavn.",
  "1769 8. Jul., Kjbhvn.",
];
let letterBernContentEnglish = [
  "27. marts 1763 Copenhagen",
  "5. marts 1763 Copenhagen",
  "5. Marts 1768 Copenehagen",
  "1768, 9 April, Copenhagen",
  "1768, December 3, Copenhagen",
  "1769, July 8, Copenhagen",
];
let letterBernContentGerman = [
  "27. März 1763, Kopenhagen",
  "5. März 1763, Kopenhagen",
  "5. marts 1768, Kopenhagen",
  "1768, 9. April, Kopenhagen",
  "1768, 3. Dezember, Kopenhagen  ",
  "1769, 8. Juli, Kopenhagen",
];
let img = "./img/gunnerus1.png";
let link = "https://www.ntnu.no/ojs/index.php/DKNVS_skrifter/article/view/1019";
SetLinkAndImgToFrontpage(link, img);

PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "lettergun-dk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, letterBernContentDanish);
}

if (path == "lettergun-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, letterBernContentEnglish);
}

if (path == "lettergun-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, letterBernContentGerman);
}
