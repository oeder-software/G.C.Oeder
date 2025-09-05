let ContentDanish = [
  "Første Klasse, nemlig Livrenterne, som straks bliver forfaldne. § 42–46 i Anordningen.",
  "Anden Klasse af livrenter på to personers liv, §. 47–51.",
  "Tredje klasse af opsatte livrenter, §. 52–57.",
  "Fjerde klasse af de stigende livrenter, §. 58–62.",
  "Femte klasse: De ophørende livrenter. § 63–66.",
  "Sjette klasse – afhængige pensionister generelt (§ 67–78)",
  "Syvende Klasse, især Enkepensioner §. 78-90.",
  "Ottende klasse, nemlig: Forældreløses klasse, § 91–98",
  "Niende klasse: Opsparingsklassen, §. 94–98",
  "Tiende Klasse – Begravelsesklassen, §§ 99–114.",
];
let ContentEnglish = [
  "First Class, namely the life annuities which become due immediately. § 42–46 of the Ordinance.",
  "Second class of life annuities based on the lives of two persons, §. 47–51.",
  "Third class of deferred life annuities, §. 52–57.",
  "Fourth class of the increasing life annuities, §. 58–62.",
  "Fifth Class: The Terminating Life Annuities. § 63–66.",
  "Sixth Class – Dependent Pensioners in General (§ 67–78)",
  "Seventh Class, Widows’ Fund in particular §. 78-90.",
  "Eighth Class, namely: Orphans' Class (§ 91–98)",
  "Ninth Class: The Savings Class, §. 94–98",
  "Tenth Class – The Funeral Class, §§ 99–114.",
];
let ContentGerman = [
  "Erste Classe, nämlich der LeibRenten, welche sogleich fällig werden. §. 42-46 der Anordnung.",
  "Zwote Classe der LeibRenten auf das Leben zwoer Personen, §. 47-51.",
  "Dritte Klasse der aufgeschobenen LeibRenten, S. 52-57.",
  "Vierte Klasse der wachsenden LeibRenten, § 58-62.",
  "Funfte Klasse, der aufhörenden LeibRenten. § 63-66.",
  "Sechste Klasse, abhängender Pensionisten überhaupt, §. 67-78.",
  "Siebende Klasse, oder WittwenKasse insbesondere, §. 78-90.",
  "Achte Klasse, nämlich WaisenKlasse, §. 91-98.",
  "Neunte Klasse die ErparungsKlasse, §. 94-98.",
  "Zehnde Klasse, die BeerdigungsKlasse, §. 99-114.",
];

let chapter = [
  "#chap2",
  "#chap3",
  "#chap4",
  "#chap5",
  "#chap6",
  "#chap7",
  "#chap8",
  "#chap9",
  "#chap10",
  "#chap11",
];
PrependBrBeforeChap(chapter);

let img = "./img/covers/stats-5-hamburg.png";
let link =
  "https://www.digitale-sammlungen.de/en/view/bsb10616669?q=oeder&page=382";
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "hamburg-en") {
//   SetContent(contentenglish);
  SetContent(chapter, ContentEnglish);
  infoTxt= "Translated from German."
}
if (path == "hamburg-de") {
    infoTxt=" Deutsch Original."
//   SetContent(contentgerman);
  SetContent(chapter, ContentGerman);
}
if (path == "hamburg-dk") {
    // SetContent(contentdanish);
    SetContent(chapter, ContentDanish);
    infoTxt="Oversat fra tysk."
}

SetLinkAndImgToFrontpage(link, img);
document.getElementById("info").innerHTML=infoTxt;
SetFlora();

