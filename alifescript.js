let ContentDanish = [
	"Ad snoede veje til et mål",
	"Sammenhængen mellem plantevækst og landbrug",
	" Betænkning over det spørgsmaal: Hvorledes Frihed og Eiendom kunde forskaffes Bondestanden i de Lande, hvor den fattes begge Dele.",
	"Betydningen af folkemængdens forøgelse",
	" Om udstykning af hovedgårde",
	"Tillæg til Betænkning",
	"Virkningerne af Oeders skrifter",
	"Årene 1769 - 1773",
	"Oldenburg - et fristed",
	"Mennesket Georg Christian Oeder",
	"Litteratur",
	"Efterskrift om en gravskrift",
];
let ContentEnglish = [
	"Through winding paths to a goal",
	"The Relationship Between Plant Growth and Agriculture",
	"Consideration of the Question: How Freedom and Property Could Be Secured for the Peasantry in the Lands Where They Lack Both.",
	"The significance of population increase",
	" On the subdivision of manor farms",
	"Supplement to the Report",
	"The Effects of Oeder's Writings",
	"The Years 1769 - 1773",
	"Oldenburg - A Sanctuary",
	"The Man Georg Christian Oeder",
	"Literature",
	"Afterword about an Epitaph",
];
let ContentGerman = [
	"Über gewundene Wege zu einem Ziel",
	"Die Verbindung zwischen Pflanzenwachstum und Landwirtschaft",
	"Bedenken über die frage: Wie Freiheit und Eigentum der Bauernschaft in den Ländern verschafft werden könnten, in denen beides fehlt.",
	"Die Bedeutung der Bevölkerungszunahme",
	"Über die Aufteilung von Hauptgütern",
	"Anhang zu Bedenken",
	"Die Auswirkungen von Oeders Schriften",
	"Die Jahre 1769 - 1773",
	"Oldenburg - ein Zufluchtsort",
	"Der Mensch Georg Christian Oeder",
	"Literatur",
	"Nachschrift zu einer Grabinschrift",
];

let chapter = [
	"#chap2",
	"#chap3",
	"#chap15",
	"#chap4",
	"#chap5",
	"#chap6",
	"#chap8",
	"#chap9",
	"#chap10",
	"#chap11",
	"#chap13",
	"#chap14",
];
let alifeImg = [
	"wiedewelt1.png",
	"oeder1.jpg",
	"jhebernstorff.png",
	"moltke1.png",
	"lodde.jpg",
	"betaenkning.jpg",
	"zuslag.png",
	"Schack-Rathlou.jpg",
	"struensee1.png",
	"juliane.jpg",
	"apbernstorff.gif",
	"Halem11.jpg",
	"Complex.jpg",
	"revetlow1.png",
	"Ludwig.jpg",
	"caroline.jpg",
	"multebaer.gif",
];
let alifeImgAlt = [
	"Johannes Wiedewelt",
	"Georg Christian Oeder",
	"Johan Hartvig Ernst",
	"Adam Gottlob Moltke",
	"Barthold Johan Lodde",
	"Betænkning over spørgmålet hvorledes man kan giver bondestanden frihed og ejdomsret i de lande hvor begge mangler.",
	"Tillæg til : Betænkning over det spørgsmaal",
	"Hvorledes Frihed og Eiendom kunde forskaffes Bondestanden i de Lande, hvor den fattes begge Dele",
	"Joachim Otto Schack-Rathlou",
	"Johann Friedrich Struensee",
	"Juliane Marie",
	"Andreas Peter Bernstorff",
	"Gerhard Anton von Halem",
	"Caspar Wessel - Complex Plane",
	"Christian Ditlev Reventlow",
	"Hertug Peter Friedrich Ludwig af Oldenburg",
	"Caroline Mathilde",
	"Rubus Chamaemorus Linn. Multebær",
];
let alifeBio = [
	"wiedewelt",
	"oeder",
	"Bernstorff",
	"Moltke",
	"lodde",
	"betaenkning",
	"zuslag",
	"schack",
	"struensee",
	"juliane",
	"apbernstorff",
	"Halem",
	"Wessel",
	"Reventlow",
	"Ludwig",
	"caroline",
	"multebaer",
];
PrependBrBeforeChap(chapter);

document
	.getElementById("img6href")
	.setAttribute(
		"href",
		"https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=georg+christian+oeder+bedenken+%C3%BCber+die+frage&pg=PA1"
	);
document.getElementById("img6href").setAttribute("target", "_blank");
document.getElementById("img6href").style = "cursor: pointer";
document.getElementById("img6").setAttribute("class", "asideLinkimgHover")

document
	.getElementById("img7href")
	.setAttribute(
		"href",
		"https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=georg+christian+oeder+bedenken+%C3%BCber+die+frage&pg=PA75"
	);
document.getElementById("img7href").setAttribute("target", "_blank");
document.getElementById("img7href").style = "cursor: pointer";
document.getElementById("img7").setAttribute("class", "asideLinkimgHover")

document
	.getElementById("img13href")
	.setAttribute("href", "https://faculty.etsu.edu/gardnerr/5510/notes/I-3.pdf");
document.getElementById("img13href").setAttribute("target", "_blank");
document.getElementById("img13href").style = "cursor: pointer";
document.getElementById("img13").setAttribute("class", "asideLinkimgHover")

SetBioImage(alifeImg, alifeImgAlt);

PrependBrBeforeChap(chapter);

// let img = "./img/covers/letterlin.png";
// let link =
// 	"https://www.alvin-portal.org/alvin/resultList.jsf?dswid=3548&af=%5B%22PER_PID%3Aalvin%5C%5C-person%5C%5C%3A57297%22%5D&p=1&fs=true&searchType=EXTENDED&sortString=relevance_sort_desc&noOfRows=10&query=oeder&aq=%5B%5B%7B%22A_FQ%22%3A%22oeder%22%7D%5D%5D&aqe=%5B%5D";
// SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "alife-dk") {
	SetBio(alifeBio, "DK");
	SetContent(chapter, ContentDanish);
	  infoTxt="Dansk original."

}

if (path == "alife-en") {
	SetBio(alifeBio, "EN");
	SetContent(chapter, ContentEnglish);
	  infoTxt= "Translated from Danish."

}

if (path == "alife-de") {
	SetBio(alifeBio, "DE");
	SetContent(chapter, ContentGerman);
	  infoTxt=" Übersetzts von Dänish."

}

// function SetLetterBugBio(bio, language) {
// 	for (let index = 0; index < bio.length; index++) {
// 		document
// 			.getElementById("bio" + (index + 1))
// 			.setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
// 	}
// }
// function SetLetterBugImg(img, alt) {
// 	for (let index = 0; index < img.length; index++) {
// 		document
// 			.getElementById("img" + (index + 1))
// 			.setAttribute("src", "./img/" + img[index]);
// 		document
// 			.getElementById("img" + (index + 1))
// 			.setAttribute("alt", alt[index]);
// 	}
// }

SetFlora();

document.getElementById("info").innerHTML=infoTxt;
