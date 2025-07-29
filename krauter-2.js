let bedenkenContentDanish = [
  "Niende Afsnit: Udkast til metoder fremstillet i skrifter.§§ 145–164",
  "Tiende Afsnit: Udkast til flere endnu ikke gennemførte vilkårlige metoder.§§ 165–171",
  "Ellevte Afsnit: Forklaring af § 146.Kendetegn ved sådanne naturlige klasser og familier af urter—delvist allerede anerkendte, delvist formodede—som forekommer i Nordeuropa.§§ 172–208",
  "Tolvte Afsnit: Kortfattet videnskabshistorie og betragtninger over dens nuværende tilstand.§§ 209–239",
  "Trettende Afsnit: Meddelelse om botaniske skrifter.§§ 240–242",
  "Første Bilag: Alfabetisk fortegnelse over fagudtryk.",
  "Andet Bilag: Forklaring af terminologi ved hjælp af figurer, på 14 kobberstik.",
  "Bemærkning vedrørende § 96",
  "Kobberstik",
];
let bedenkenContentEnglish = [
  "Ninth Section: Drafts of the methods presented in writings.§§ 145–164",
  "Tenth Section: Drafts of several still unexecuted arbitrary methods.§§ 165–171",
  "Eleventh Section: Explanation of § 146.Characters of such natural classes and families of herbs—some already recognized, others presumed—that occur in Northern Europe.§§ 172–208",
  "Twelfth Section: Concise history of the science and reflections on its current state.§§ 209–239",
  "Thirteenth Section: Notice of botanical writings.§§ 240–242",
  "First Appendix: Alphabetical index of technical terms.",
  "Second Appendix: Explanation of terminology through illustrations, on 14 copper plates. Note regarding § 96.",
  "Copperplates.",
];

let bedenkenContentGerman = [
  "Neunter Abschnit. Entwürfe der in Schriften vorgetragenen Methoden. § . 145-164.",
  "Zehnter Abschnit. Entwürfe zu mehreren noch nicht ausgeführten willkührlichen Methoden. §. 165-171 .",
  "Eilfter Abschnit. Erläuterung des 146ten §. Charactere von solchen , theils bereits erkannten , theils muthmaßlichen natürlichen Classen und Familien von Kräutern , die im nördlichen Europa vorkommen. §. 172-208.",
  "Zwölfter Abschnit. Kurzgefaßte Geschichte der Wissenschaft , und Betrachtungen über ihren gegenwärtigen Zustand . §. 209-239.",
  "Dreyzehnter Abschnit. Anzeige botanischer Schriften. §. 240-242.",
  "Erster Anhang. Alphabetisches Verzeichniß der Kunstwörter.",
  "Zweyter Anhang. Erläuterung der Terminologie durch Figuren , auf 14. Kupfertafeln.",
  "Erinnerung wegen §. 96.",
  "Kupfertafeln.",
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
  "#chap9",
];
PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "krauter-2-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
}
if (path == "krauter-2-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
}
if (path == "krauter-2-dk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, bedenkenContentDanish);
}
let img = "./img/krauter2.png";
let link =
  "https://www.google.dk/books/edition/Einleitung_zu_der_Kr%C3%A4uterkenntni%C3%9F/QfxbAAAAcAAJ?hl=da&gbpv=1";
SetLinkAndImgToFrontpage(link, img);
