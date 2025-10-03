let ContentDanish = [];
let ContentEnglish = [];
let ContentGerman = [];

let chapter = [];
let familynicoImg = ["vaaben3.png"];
let familynicoBio = ["familynico"];
let familynicoAlt = ["Oeders vaaben"]
SetBioImage(familynicoImg, familynicoAlt);
document
	.getElementById("img1href")
	.setAttribute(
  "href","https://heraldikonline.dk/RostockKort/18.%20Firedelt%20med%20centerfelt/18%20Firedelt%20med%20centerfelt%2C%20symmetrisk-0089.jpg"
	);
document.getElementById("img1href").setAttribute("target", "_blank");
document.getElementById("img1href").style="cursor: pointer;"
document.getElementById("img1").setAttribute("class", "asideLinkimgHover")

SetFlora();
if (path == "familynico-dk" || path == "familyoeder-dk") {
	SetBio(familynicoBio, "DK");
}

if (path == "familynico-en" || path == "familyoeder-en") {
	SetBio(familynicoBio, "EN");
}

if (path == "familynico-de" || path == "familyoeder-de") {
	SetBio(familynicoBio, "DE");
}
let doc = "";
if (path == "familynico-dk" || path == "familynico-de" || path == "familynico-en" ) {
	
	let mq = window.matchMedia("(max-width: 800px)");
	if (mq.matches) {
		doc = "./txt/familytreedk.txt"
	}
	else{
		doc = "./txt/familytreedkxxx.txt"
	}
}else{
	doc = "./txt/familytreeoeder.txt"
}
fetch(doc).then((res) => res.text()).then((text) => {
	document.getElementById("familyobj").innerHTML = text;
})
