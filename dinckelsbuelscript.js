let ContentDanish = [    "Kort.",
	"Kapitel I. Udførlig Drøftelse af de almindelige i det Trykte Værk opkastede Sætninger, samt Undersøgelse af de Dinckelsbüliske Privilegier.",
	"Kapitel II. Fra Burggrafthum i Nürnberg, og det dermed forbundne Kejserlige Landret.",
	"Kapitel III. Vedrørende den påståede bymark.",
	"Kapitel. IV. Om den af byen Dinkelsbühl anmassede territoriale myndighed over dens undergivne (Hintersassen) og deres gårde.",
	"Kapitel. V. Om Limburg og Wildburgstetten.",
	"Kapitel. VI. Om det højfyrstelige brandenburgske Geleit til, omkring og også gennem Dinkelsbühl, samt om den såkaldte “markstribe” (Markstreifen).",
	"Bilag. Til den grundige belysning. Kort forberetning.",
	"Bilag A. - Z.",
    "Bilag A.a. - Z.z.",
    "Bilag A.a.a. - Z.z.z."
];
let ContentEnglish = [ "Map.",
	"Chapter. I. Deliberation upon the general Propositions set forth in the Printed Work, together with an Examination of the Privileges of Dinckelsbül.",
	"Chapter. II. Concerning the Burggrafthum of Nuremberg, and the Imperial Court thereby connected.",
	"Chapter. III. Die angebliche Stadt - Markung betresfend.",
	"Chapter. IV. On the territorial authority presumptuously claimed by the city of Dinkelsbühl over its dependants (Hintersassen) and their farmsteads.",
	"Chapter. V. Concerning Limburg and Wildburgstetten.",
	"Chapter. VI. On the High-Princely Brandenburg escort (Geleit) to, around, and also through Dinkelsbühl, and on the so-called “border strip” (Markstreifen).",
	"Appendices. For the thorough elucidation. Short preliminary report.",
	"Appendices A. - Z.",
    "Appendices A.a. - Z. z.",
    "Appendices A.a.a. - X.x.x."];
let ContentGerman = [
    "Karte.",
	"Cap. I. Erörterung der allgemeinen in dem Impresso aufgestellten Satze, samt Untersuchung der Dinckelsbülischen Privilegie.",
	"Cap. II.Vom Burggrafthum zu Nürnberg, und dem damit verknüpsten Kayserl. Landgerichte.",
	"Cap. III. Die angebliche Stadt - Markung betresfend.",
	"Cap. IV. Der Stadt Dinkelsbül anmaßliche Territorial-Gerechtigkeit, über ihre Hintersassen und deren Hof-Güter, betreffend.",
	"Cap. V. Limburg und Wildburgstetten betreffend.",
	"Cap. VI. Von Hochfürstl. Brandenburgischen Glait um und an auch durch Dinkelsbül, und dem s. g. Markstreifen.",
	"Beylagen. Zu den gründlichen Beleuchtung. Kurzer Vorbericht.",
	"Beylage A. - Z.",
    "Beylage A.a. - Z. z.",
    "Beylage A.a.a. - X.x.x."
];

let chapter = [
	"#map",
    "#chap1",
	"#chap2",
	"#chap3",
	"#chap4",
	"#chap5",
	"#chap6",
	"#chap7",
	"#chap8",
    "#chap9",
    "#chap10",
];
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
if (path == "dinckelsbuel-en") {
//   SetContent(contentenglish);
  SetContent(chapter, ContentEnglish);
}
if (path == "dinckelsbuel-de") {
//   SetContent(contentgerman);
  SetContent(chapter, ContentGerman);
}
if (path == "dinckelsbuel-dk") {
//   SetContent(contentdanish);
  SetContent(chapter, ContentDanish);
}

if (path == "dinckelsbuel-en") {
	infoTxt = "Translated from German.";
}
if (path == "dinckelsbuel-de") {
	infoTxt = "Deutsch original.";
}
if (path == "dinckelsbuel-dk") {
	infoTxt = "Oversat fra tysk.";
}
document.getElementById("info").innerHTML = infoTxt;
let img = "./img/covers/dinckelsbuel.png";
let link = "https://www.digitale-sammlungen.de/en/view/bsb10323235?page=,1";
SetLinkAndImgToFrontpage(link, img);
SetFlora();
