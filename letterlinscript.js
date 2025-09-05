let letterBugImg = [
	"haller.jpg",
	"nordstjerne.jpg",
	"forsskaal.jpg",
	"byzans.jpg",
	"miller.jpg",
	"species.jpg",
	"gorter.jpg",
	"spengler.jpg",
	"bauhin.ppm",
	"cornus.jpg",
	"fabricius.png",
	"conflict.jpeg",
	"tournefort.jpg",
	"merian.jpg",
	"barrelier.jpg",
	"vaillant.jpg",
	"murray.png",
	"niebuhr.jpg",
	"linnesystem.jpg",
];
document
	.getElementById("img12href")
	.setAttribute(
		"href",
		"https://www.nparks.gov.sg/sbg/research/publications/gardens%27-bulletin-singapore/-/media/sbg/gardens-bulletin/gbs_71_s2_y2019/71_s2_07_y2019_v71s2_gbs_pg53.pdf"
	);
document.getElementById("img12href").setAttribute("target", "_blank");
document.getElementById("img12href").style="cursor: pointer;"
document
	.getElementById("img19href")
	.setAttribute(
		"href",
		"https://www.biodiversitylibrary.org/item/15373#page/12/mode/1up"
	);
document.getElementById("img19href").setAttribute("target", "_blank");
document.getElementById("img19href").style="cursor: pointer;"

let letterBugAlt = [
	"Albrecht von Haller",
	"Nordstjernen",
	"Pehr Forsskål",
	"Byzans (Byzantion",
	"Phillip Miller",
	"Species Plantarum",
	"David de Gorter",
	"Lorenz Spengler",
	"Casper Bauhin",
	"Cornus suecica",
	"Johan Christian Fabricius",
	"Linné zitiert Oeders Sedum alpinum IV Oed. dan. t. 23",
	"Joseph Pitton de Tournefort",
	"Maria Sibylla Merian",
	"Jacques Barrelier",
	"Sébastien Vaillant",
	"Johan Andreas Murray",
	"Carsten Niebuhr",
	"Systema Naturæ",
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
let letterBugContentDanish = [
	"Den 8. apr. 1752",
	"Den 20. jun. 1761",
	"Den 9. sep. 1761",
	"Den 21. sep. 1761",
	"Den 8. dec. 1762",
	"Den 3. jan. 1763",
	"Den 18. apr. 1764",
	"Den 13. apr. 1768",
	"Den 24. feb. 1770",
];
let letterBugContentEnglish = [
	" April 8 1752",
	" June 20 1761",
	" September 9 1761",
	" September 21 1761",
	" December 8 1762",
	" January 3  1763",
	" April 18  1764",
	" April 13 1768",
	" Febuary 24 1770",
];
let letterBugContentGerman = [
	" 8. apr. 1752",
	" 20. jun. 1761",
	" 9. sep. 1761",
	" 21. sep. 1761",
	" 8. dec. 1762",
	" 3. jan. 1763",
	" 18. apr. 1764",
	" 13. apr. 1768",
	" 24. feb. 1770",
];

SetBioImage(letterBugImg, letterBugAlt);

let letterBugBio = [
	"haller",
	"nordstjerne",
	"forsskaal",
	"byzans",
	"miller",
	"species",
	"gorter",
	"spengler",
	"bauhin",
	"cornus",
	"fabricius",
	"conflict",
	"tournefort",
	"merian",
	"barrelier",
	"vaillant",
	"murray",
	"niebuhr",
	"linnesystem",
];
PrependBrBeforeChap(chapter);

// document.getElementById("bio2").setAttribute("height", "fit-content");
// document.getElementById("bio3").setAttribute("height", "fit-content");
// document.getElementById("bio4").setAttribute("height", "fit-content");
// document.getElementById("bio5").setAttribute("height", "fit-content");
let img = "./img/covers/letterlin.png";
let link =
	"https://www.alvin-portal.org/alvin/resultList.jsf?dswid=3548&af=%5B%22PER_PID%3Aalvin%5C%5C-person%5C%5C%3A57297%22%5D&p=1&fs=true&searchType=EXTENDED&sortString=relevance_sort_desc&noOfRows=10&query=oeder&aq=%5B%5B%7B%22A_FQ%22%3A%22oeder%22%7D%5D%5D&aqe=%5B%5D";
SetLinkAndImgToFrontpage(link, img);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterlin-dk") {
	SetBio(letterBugBio, "DK");
	SetContent(chapter, letterBugContentDanish);
	  infoTxt="Oversat fra Latin."

}

if (path == "letterlin-en") {
	SetBio(letterBugBio, "EN");
	SetContent(chapter, letterBugContentEnglish);
	  infoTxt= "Translated from Latin."

}

if (path == "letterlin-de") {
	SetBio(letterBugBio, "DE");
	SetContent(chapter, letterBugContentGerman);
	  infoTxt=" Übersetzts von Latin."

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
