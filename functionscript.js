function SetBioImage(list) {
	for (let index = 0; index < list.length; index++) {
		const element = list[index];

		document.getElementById("img" + (index + 1)).setAttribute("src", "./img/persons/" + list[index]);
	document.getElementById("img" + (index + 1)).setAttribute("loading", "lazy");
	}
}

function SetBio(bio, language) {
	for (let index = 0; index < bio.length; index++) {
fetch("./bio/" + language + "-" + bio[index] + ".txt").then((res) => res.text()).then((text) => {
// var a = document.createElement("pre");
// a.setAttribute("id", "pre" + index);
// a.style="width: 200px;"
// a.innerHTML=text;
// 	document.getElementById("bio" + (index + 1)).append(a);

document.getElementById("bio" + (index + 1)).innerHTML = text;

   })
	// 	document
	// 		.getElementById("bio" + (index + 1))
	// 		.setAttribute("data", "./bio/" + language + "-" + bio[index] + ".txt");
	}
}
