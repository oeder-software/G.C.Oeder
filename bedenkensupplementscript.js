let ContentDanish = [
  "I. Nogle overvejelser om oprettelsen af den nationale milits i Danmark.",
  "II. Grunde til den i 1771 i Danmark udstedte forordning af den daværende General Landwesenkommission til fastlæggelse af Frohndienste..",
  "III. Eksempel på en ændring med godset Düttebüll i Hertugdømmet Slesvig ved hjælp af opdeling i parceller.",
  "IV. Allerunderdanigst forestilling vedrørende, i hvilket omfang den personlige frihed nu kunne gives til bondeklassen i Kongeriget Danmark.",
  "V. Nærmere Undersøgelse af det Forhold, der Råder mellem Godsejeren og Bonden, der Bor på Hans Gods i Danmark, samt Forslag.",
  "Forklaring af det første princip:",
  "Forklaring af det andet princip.",
  "Forklaring af det tredje princip.",
  "Resultater og Forslag.",
  "Første Forslag:",
  "Andet Forslag:",
  "Tredje Forslag:",
  "Fjerde Forslag:",
  "Femte Forslag:",
];
let ContentEnglish = [
  "I. Some considerations about the constitution of the National Militia in Denmark.",
  "II. Reasons for the Decree Issued in Denmark in 1771 by the General Landwesen Commission to Determine the Feudal Services.",
  "III. Example of a transformation involving the estate of Düttebüll in the Duchy of Schleswig by means of subdivision into parcels.",
  "IV. Most humble petition concerning the extent to which personal freedom could now be granted to the peasantry in the Kingdom of Denmark.",
  "V. Closer Examination of the Existing Relationship between the Landowner and the Farmer Residing on His Estate in Denmark and Proposals.",
  "Explanation of the first principle:",
  "Explanation of the Second Principle.",
  "Explanation of the third principle.",
  "Resultater og Forslag.",
  "First Proposal",
  "Second Proposal",
  "Third Proposal",
  "Fourth Proposal",
  "Fifth Proposal",
];
let ContentGerman = [
  "I. Einige Betrachtungen über die Verfassung der National Miliz in Dänemark.",
  "II. Gründe der im Jahre 1771 in Dänemark durch die damalige General Landwesenscommission bewürkten Verordnung, zu Bestimmung der Frohndienste.",
  "III. Beyspiel einer mit dem Gute Düttebüll im Herzogthume Schleswig geschehenen Weränderung mittelst Auflösung in Parcellen.",
  "IV.Allerunterthänigste Vorstellung,. betreffend, in wie weit dem Bauernstande im Königreiche Dänemark vorjeßo die personelle Freyheit zu schenken seyn mögte.",
  "V. Nähere Erörterung des in Dänemark zwischen dem Gutsherrn und dem auf seinem Gute wohnenden Bauern obwaltenden Verhältnisses und Vorschläge.",
  "Erläuterung des ersten Grundsaßes:",
  "Erläuterung des zweyten Grundsages:",
  "Erläuterung des dritten Grundsages:",
  "Resultate und Vorschläge.",
  "Erster Vorschlag.",
  "Zweyter Vorschlag. ",
  "Dritter Vorschlag. ",
  "Vierter Vorschlag.",
  "Fünfter Vorschlag.",
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
  "#chap12",
  "#chap13",
  "#chap14",
  "#chap15",
];


PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
let infoTxt= "";
if (path == "bedenkensupplement-en") {
  infoTxt= "Translated from German."
  SetContent(chapter, ContentEnglish);
}
if (path == "bedenkensupplement-de") {
  infoTxt=" Deutsch Original."
  SetContent(chapter, ContentGerman);
}
if (path == "bedenkensupplement-dk") {
  infoTxt="Oversat fra tysk."
  SetContent(chapter, ContentDanish);
}
let img = "./img/covers/bedenkensup.png";
let link =
  "https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=&pg=PA118&printsec=frontcover";
SetLinkAndImgToFrontpage(link, img);

document.getElementById("info").innerHTML=infoTxt;
SetFlora();