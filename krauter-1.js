let bedenkenContentDanish = [
  "Første afsnit. Naturen af videnskaben,§ 1-15.",

  "Andet afsnit. Generelle betragtninger over planteriget,§ 16-28.",

  "Tredje afsnit. Mere detaljeret undersøgelse af planternes dele og de forhold, under hvilke de vokser.Terminologi.§ 29-96.",

  "Fjerde afsnit. Nærmere undersøgelse af de botaniske karakterer.§ 97-107.",

  "Femte afsnit. Begreber om art og samling af arter,§ 108-116.",

  "Sjette afsnit. Om metoder generelt,§ 117-126.",

  "Syvende afsnit. Om metoder ved opdeling og metoder ved sammenføjning i særdeleshed.§ 127-136.",

  "Ottende afsnit. Egenskaber ved en brugbar fortegnelse over urter;Nomenklatur og øvrige hjælpemidler til kendskab om urter.§ 137-144.",
];
let bedenkenContentEnglish = [
  "First section. The nature of science, § 1-15.",
  "Second section. General considerations of the plant kingdom, § 16-28.",
  "Third section. More detailed examination of the parts of plants and the conditions under which they grow. Terminology. § 29-96.",
  "Fourth section. Closer examination of botanical characters. § 97-107.",
  "Fifth section. Concepts of species and collection of species, § 108-116.",
  "Sixth section. On methods in general, § 117-126.",
  "Seventh section. On methods by division and methods by combination in particular. § 127-136.",
  "Eighth section. Characteristics of a useful catalog of herbs; Nomenclature and other aids to the knowledge of herbs. § 137-144.",
];
let bedenkenContentGerman = [
  "Erster Abschnit. Wesen der Wissenschaft, § . 1-15.",
  "Zweyter “ Allgemeine Betrachtungen des Pflanzenreiches §. 16-28.",
  "Dritter “ Umständlichere Betrachtung der Theile der Gewächse und der Umstände unter denen Sie wachsen. Terminologie. §. 29-96 .",
  "Vierter “ Nähere Betrachtung der botanisschen Charactere. §. 97-107.",
  "Fünfter “ Begriffe von Art und Sammlung von Arten. §. 108-116 .",
  " Sechster. “ Von Methoden überhaupt , §. 117-126 ,",
  "Siebender Abschnitt. Von den Methoden durch Abtheilung und von den Methoden durch Zusammenfügung insbesondre. §. 127-136.",
  " Achter “ Eigenschaften eines brauchbaren Verzeichnisses von Kräutern; Nomenclatur ; und übrige Hülfsmittel zur Kenntniß der Kräuter. §. 137-144.",
];

let chapter = [
  "#chap1",
  "#chap2",
  "#chap3",
  "#chap4",
  "#chap5",
  "#chap6",
  "#chap7",
  "#chap8",
];
PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "krauter-1-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
}
if (path == "krauter-1-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
}
if (path == "krauter-1-dk") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentDanish);
}
let img = "./img/krauter1.png";
let link = " https://www.google.dk/books/edition/_/kqnNHkbuHnAC?hl=da&gbpv=1";
SetLinkAndImgToFrontpage(link, img);
