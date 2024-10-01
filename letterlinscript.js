document.getElementById("img1").setAttribute("src", "./img/haller.jpg");
document.getElementById("img1").setAttribute("alt", "Albrecht von Haller");

document.getElementById("img2").setAttribute("src", "./img/nordstjerne.jpg");
document.getElementById("img2").setAttribute("alt", "Pehr Forsskål");

document.getElementById("img3").setAttribute("src", "./img/forsskaal.jpg");
document.getElementById("img3").setAttribute("alt", "./img/forsskaal.jpg");

document.getElementById("img4").setAttribute("src", "./img/byzans.jpg");
document.getElementById("img4").setAttribute("alt", "Byzans (Byzantion) ");

document.getElementById("img5").setAttribute("src", "./img/miller.jpg");
document.getElementById("img5").setAttribute("alt", "Phillip Miller");

document.getElementById("img6").setAttribute("src", "./img/species.jpg");
document.getElementById("img6").setAttribute("alt", "Species Plantarum");

document.getElementById("img7").setAttribute("src", "./img/gorter.jpg");
document.getElementById("img7").setAttribute("alt", "David de Gorter");

document.getElementById("img8").setAttribute("src", "./img/spengler.jpg");
document.getElementById("img8").setAttribute("alt", "Lorenz Spengler");

document.getElementById("img9").setAttribute("src", "./img/bauhin.ppm");
document.getElementById("img9").setAttribute("alt", "Casper Bauhin");

document.getElementById("img10").setAttribute("src", "./img/cornus.jpg");
document.getElementById("img10").setAttribute("alt", "Cornus suecica");

document.getElementById("img11").setAttribute("src", "./img/fabricius.png");
document
  .getElementById("img11")
  .setAttribute("alt", "Johan Christian Fabricius ");

document.getElementById("img12").setAttribute("src", "./img/conflict.jpeg");
document
  .getElementById("img12href")
  .setAttribute(
    "href",
    "https://www.nparks.gov.sg/sbg/research/publications/gardens%27-bulletin-singapore/-/media/sbg/gardens-bulletin/gbs_71_s2_y2019/71_s2_07_y2019_v71s2_gbs_pg53.pdf"
  );
document.getElementById("img12href").setAttribute("target", "_blank");
document
  .getElementById("img12")
  .setAttribute("alt", "Linné zitiert Oeders Sedum alpinum IV Oed. dan. t. 23");

document.getElementById("img13").setAttribute("src", "./img/tournefort.jpg");
document
  .getElementById("img13")
  .setAttribute("alt", "Joseph Pitton de Tournefort");

document.getElementById("img14").setAttribute("src", "./img/merian.jpg");
document.getElementById("img14").setAttribute("alt", "Maria Sibylla Merian");

document.getElementById("img15").setAttribute("src", "./img/barrelier.jpg");
document.getElementById("img15").setAttribute("alt", "Jacques Barrelier");

document.getElementById("img16").setAttribute("src", "./img/vaillant.jpg");
document.getElementById("img16").setAttribute("alt", "Sébastien Vaillant");

document.getElementById("img17").setAttribute("src", "./img/murray.png");
document.getElementById("img17").setAttribute("alt", "Johan Andreas Murray");

document.getElementById("img18").setAttribute("src", "./img/niebuhr.jpg");
document.getElementById("img18").setAttribute("alt", "Carsten Niebuhr");

document.getElementById("img19").setAttribute("src", "./img/linnesystem.jpg");
document.getElementById("img19").setAttribute("alt", "Systema Naturæ");

//FIXME:
//TODO:
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterlindk") {
  var a = document.createElement("p");
  a.innerText = "Indhold";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Til toppen";
  a.href = "#dex";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 8. apr. 1752";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 20. jun. 1761";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 9. sep. 1761";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 21. sep. 1761";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 8. dec. 1762";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 3. jan. 1763";
  a.href = "#chap6";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 18. apr. 1764";
  a.href = "#chap7";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 13. apr. 1768";
  a.href = "#chap8";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 24. feb. 1770";
  a.href = "#chap9";
  document.getElementById("content").appendChild(a);

  /* -----------------------------------------------------------------------
   */

  var a = document.createElement("p");
  a.innerText = "Indhold";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Til start";
  a.href = "#frameindex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 8. apr. 1752";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 20. jun. 1761";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 9. sep. 1761";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 21. sep. 1761";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 8. dec. 1762";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 3. jan. 1763";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 18. apr. 1764";
  a.href = "#chap7";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 13. apr. 1768";
  a.href = "#chap8";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 24. feb. 1770";
  a.href = "#chap9";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  /* --------------------------------------------------------------------------
   */
  document.getElementById("bio1").setAttribute("data", "./bio/DK-haller.txt");
  document.getElementById("bio1").style.height = "120px";

  document
    .getElementById("bio2")
    .setAttribute("data", "./bio/DK-nordstjerne.txt");
  document.getElementById("bio2").style.height = "120px";

  document
    .getElementById("bio3")
    .setAttribute("data", "./bio/DK-forsskaal.txt");
  document.getElementById("bio3").style.height = "190px";

  document.getElementById("bio4").setAttribute("data", "./bio/DK-byzans.txt");

  document.getElementById("bio5").setAttribute("data", "./bio/DK-miller.txt");

  document.getElementById("bio6").setAttribute("data", "./bio/DK-species.txt");
  document.getElementById("bio6").style.height = "150px";

  document.getElementById("bio7").setAttribute("data", "./bio/DK-gorter.txt");
  document.getElementById("bio7").style.height = "230px";

  document.getElementById("bio8").setAttribute("data", "./bio/DK-spengler.txt");
  document.getElementById("bio8").style.height = "170px";
  document.getElementById("bio9").setAttribute("data", "./bio/DK-bauhin.txt");
  document.getElementById("bio9").style.height = "230px";
  document.getElementById("bio10").setAttribute("data", "./bio/DK-cornus.txt");
  document.getElementById("bio10").style.height = "100px";
  document
    .getElementById("bio11")
    .setAttribute("data", "/bio/DK-fabricius.txt");
  document.getElementById("bio11").style.height = "260px";
  document
    .getElementById("bio12")
    .setAttribute("data", "./bio/DK-conflict.txt");
  document.getElementById("bio12").style.height = "300px";
  document
    .getElementById("bio13")
    .setAttribute("data", "/bio/DK-tournefort.txt");
  document.getElementById("bio13").style.height = "200px";
  document.getElementById("bio14").setAttribute("data", "./bio/DK-merian.txt");
  document.getElementById("bio14").style.height = "150px";
  document
    .getElementById("bio15")
    .setAttribute("data", "/bio/DK-barrelier.txt");
  document.getElementById("bio15").style.height = "150px";
  document
    .getElementById("bio16")
    .setAttribute("data", "./bio/DK-vaillant.txt");
  document.getElementById("bio16").style.height = "150px";
  document.getElementById("bio17").setAttribute("data", "./bio/DK-murray.txt");
  document.getElementById("bio17").style.height = "250px";
  document.getElementById("bio18").setAttribute("data", "./bio/DK-niebuhr.txt");
  document.getElementById("bio18").style.height = "250px";
  document
    .getElementById("bio19")
    .setAttribute("data", "/bio/DK-linnesystem.txt");
  document.getElementById("bio19").style.height = "230px";
}

if (path == "letterlinen") {
  var a = document.createElement("p");
  a.innerText = "Content";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Page start";
  a.href = "#dex";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 8th 1752";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "June 10th 1761";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "September 9th 1761";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "September 21th 1761";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "December 8th 1762";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 3th 1763";
  a.href = "#chap6";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 18th 1764";
  a.href = "#chap7";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 13th 1768";
  a.href = "#chap8";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Febuary 24th 1770";
  a.href = "#chap9";
  document.getElementById("content").appendChild(a);

  /* --------------------------------------------------------------------------
   */
  var a = document.createElement("p");
  a.innerText = "Content";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Page start";
  a.href = "#frameindex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 8th 1752";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "June 10th 1761";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "September 9th 1761";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "September 21th 1761";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "December 8th 1762";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 3th 1763";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 18th 1764";
  a.href = "#chap7";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 13th 1768";
  a.href = "#chap8";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Febuary 24th 1770";
  a.href = "#chap9";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  /* --------------------------------------------------------------------------
   */

  document.getElementById("bio1").setAttribute("data", "./bio/en-haller.txt");
  document.getElementById("bio1").style.height = "200px";

  document
    .getElementById("bio2")
    .setAttribute("data", "./bio/EN-nordstjerne.txt");
  document.getElementById("bio2").style.height = "200px";

  document
    .getElementById("bio3")
    .setAttribute("data", "./bio/EN-forsskaal.txt");
  document.getElementById("bio3").style.height = "190px";

  document.getElementById("bio4").setAttribute("data", "./bio/EN-byzans.txt");

  document.getElementById("bio5").setAttribute("data", "./bio/EN-miller.txt");

  document.getElementById("bio6").setAttribute("data", "./bio/EN-species.txt");
  document.getElementById("bio6").style.height = "150px";

  document.getElementById("bio7").setAttribute("data", "./bio/EN-gorter.txt");
  document.getElementById("bio7").style.height = "230px";

  document.getElementById("bio8").setAttribute("data", "./bio/EN-spengler.txt");
  document.getElementById("bio8").style.height = "180px";
  document.getElementById("bio9").setAttribute("data", "./bio/EN-bauhin.txt");
  document.getElementById("bio9").style.height = "270px";
  document.getElementById("bio10").setAttribute("data", "./bio/EN-cornus.txt");
  document.getElementById("bio10").style.height = "100px";
  document
    .getElementById("bio11")
    .setAttribute("data", "./bio/EN-fabricius.txt");
  document.getElementById("bio11").style.height = "290px";
  document
    .getElementById("bio12")
    .setAttribute("data", "./bio/EN-conflict.txt");
  document.getElementById("bio12").style.height = "320px";
  document
    .getElementById("bio13")
    .setAttribute("data", "./bio/EN-tournefort.txt");
  document.getElementById("bio13").style.height = "200px";
  document.getElementById("bio14").setAttribute("data", "./bio/EN-merian.txt");
  document.getElementById("bio14").style.height = "150px";
  document
    .getElementById("bio15")
    .setAttribute("data", "/bio/EN-barrelier.txt");
  document.getElementById("bio15").style.height = "150px";
  document
    .getElementById("bio16")
    .setAttribute("data", "./bio/EN-vaillant.txt");
  document.getElementById("bio16").style.height = "150px";
  document.getElementById("bio17").setAttribute("data", "./bio/EN-murray.txt");
  document.getElementById("bio17").style.height = "250px";
  document.getElementById("bio18").setAttribute("data", "./bio/EN-niebuhr.txt");
  document.getElementById("bio18").style.height = "250px";
  document
    .getElementById("bio19")
    .setAttribute("data", "./bio/EN-linnesystem.txt");
  document.getElementById("bio19").style.height = "230px";
}

if (path == "letterlinde") {
  var a = document.createElement("p");
  a.innerText = "Inhaltsverzeichnis";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Zu Anfang";
  a.href = "#dex";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "8 april 1752";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "20 jun1 1761";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "9 september 1761";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "21 september 1761";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "8 december 1762";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = " 3 januar 1763";
  a.href = "#chap6";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "18 april 1764";
  a.href = "#chap7";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "13 april 1768";
  a.href = "#chap8";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "24 febuar 1770";
  a.href = "#chap9";
  document.getElementById("content").appendChild(a);

  /* --------------------------------------------------------------------------
   */
  var a = document.createElement("p");
  a.innerText = "Inhaltsverzeichnis";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Zu Anfang";
  a.href = "#frameindex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "8 april 1752";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "20 jun1 1761";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "9 september 1761";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "21 september 1761";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "8 december 1762";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = " 3 januar 1763";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "18 april 1764";
  a.href = "#chap7";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "13 april 1768";
  a.href = "#chap8";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "24 febuar 1770";
  a.href = "#chap9";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  /* --------------------------------------------------------------------------
   */

  document.getElementById("bio1").setAttribute("data", "./bio/de-haller.txt");
  document.getElementById("bio1").style.height = "200px";

  document
    .getElementById("bio2")
    .setAttribute("data", "./bio/de-nordstjerne.txt");
  document.getElementById("bio2").style.height = "200px";

  document
    .getElementById("bio3")
    .setAttribute("data", "./bio/de-forsskaal.txt");
  document.getElementById("bio3").style.height = "210px";

  document.getElementById("bio4").setAttribute("data", "./bio/de-byzans.txt");

  document.getElementById("bio5").setAttribute("data", "./bio/de-miller.txt");

  document.getElementById("bio6").setAttribute("data", "./bio/de-species.txt");
  document.getElementById("bio6").style.height = "180px";

  document.getElementById("bio7").setAttribute("data", "./bio/de-gorter.txt");
  document.getElementById("bio7").style.height = "270px";

  document.getElementById("bio8").setAttribute("data", "./bio/de-spengler.txt");
  document.getElementById("bio8").style.height = "180px";
  document.getElementById("bio9").setAttribute("data", "./bio/de-bauhin.txt");
  document.getElementById("bio9").style.height = "270px";
  document.getElementById("bio10").setAttribute("data", "./bio/de-cornus.txt");
  document.getElementById("bio10").style.height = "260px";
  document
    .getElementById("bio11")
    .setAttribute("data", "./bio/de-fabricius.txt");
  document.getElementById("bio11").style.height = "380px";
  document
    .getElementById("bio12")
    .setAttribute("data", "./bio/de-conflict.txt");
  document.getElementById("bio12").style.height = "320px";
  document
    .getElementById("bio13")
    .setAttribute("data", "./bio/de-tournefort.txt");
  document.getElementById("bio13").style.height = "310px";
  document.getElementById("bio14").setAttribute("data", "./bio/de-merian.txt");
  document.getElementById("bio14").style.height = "200px";
  document
    .getElementById("bio15")
    .setAttribute("data", "./bio/de-barrelier.txt");
  document.getElementById("bio15").style.height = "150px";
  document
    .getElementById("bio16")
    .setAttribute("data", "./bio/de-vaillant.txt");
  document.getElementById("bio16").style.height = "200px";
  document.getElementById("bio17").setAttribute("data", "./bio/de-murray.txt");
  document.getElementById("bio17").style.height = "250px";
  document.getElementById("bio18").setAttribute("data", "./bio/de-niebuhr.txt");
  document.getElementById("bio18").style.height = "250px";
  document
    .getElementById("bio19")
    .setAttribute("data", "./bio/de-linnesystem.txt");
  document.getElementById("bio19").style.height = "230px";
}
