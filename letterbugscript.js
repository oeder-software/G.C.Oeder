document.getElementById("sidebarcontent").style = "cursor: pointer;";

document.getElementById("img2").setAttribute("src", "/img/ryberg.jpg");
document.getElementById("img3").setAttribute("src", "/img/moltke1.png");

document.getElementById("img4").setAttribute("src", "/img/Wessel.jpg");
document.getElementById("img5").setAttribute("src", "/img/jupiter.jpg");

document.getElementById("bio2").setAttribute("height", "fit-content");
document.getElementById("bio3").setAttribute("height", "fit-content");
document.getElementById("bio4").setAttribute("height", "fit-content");
document.getElementById("bio5").setAttribute("height", "fit-content");

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterbugdk") {
  var a = document.createElement("p");
  a.innerText = "Indhold";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Til start";
  a.href = "#frameindex";
  document.getElementById("content").appendChild(a);

  a = document.createElement("br");
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 9 januar 1782";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 13 november 1782";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 28 januar 1783";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 5 oktober 1783";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 25 jan 1784";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 20 april 1784";
  a.href = "#chap6";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 2 januar 1785";
  a.href = "#chap7";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 18 februar 1785";
  a.href = "#chap8";
  document.getElementById("content").appendChild(a);

  /* ----------------------------------------------------------------------
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
  a.innerText = "Den 9 januar 1782";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 13 november 1782";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 28 januar 1783";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 5 oktober 1783";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 25 jan 1784";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 20 april 1784";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 2 januar 1785";
  a.href = "#chap7";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 18 februar 1785";
  a.href = "#chap8";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  document.getElementById("bio2").setAttribute("data", "/bio/DK-ryberg.txt");
  document.getElementById("bio3").setAttribute("data", "/bio/DK-Moltke.txt");
  document.getElementById("bio4").setAttribute("data", "/bio/DK-Wessel.txt");
  document.getElementById("bio5").setAttribute("data", "/bio/DK-jupiter.txt");
}

if (path == "letterbugen") {
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
  a.innerText = "January 9 1782";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "November 13 1782";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 28 1783";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "October 5 1783";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 25 1784";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 20 1784";
  a.href = "#chap6";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 2 1785";
  a.href = "#chap7";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "February 18 1785";
  a.href = "#chap8";
  document.getElementById("content").appendChild(a);

  /* ----------------------------------------------------------------------------
   */
  var a = document.createElement("p");
  a.innerText = "Content";
  a.style = "cursor: none; font-size: 20px";
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Page start";
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 9 1782";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "November 13 1782";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 28 1783";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "October 5 1783";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 25 1784";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 20 1784";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "January 2 1785";
  a.href = "#chap7";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "February 18 1785";
  a.href = "#chap8";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  document.getElementById("bio2").setAttribute("data", "/bio/EN-ryberg.txt");
  document.getElementById("bio3").setAttribute("data", "/bio/EN-Moltke.txt");
  document.getElementById("bio4").setAttribute("data", "/bio/EN-Wessel.txt");
  document.getElementById("bio5").setAttribute("data", "/bio/EN-jupiter.txt");
}

if (path == "letterbugde") {
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
  a.innerText = "Mai 20 1755";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Januar 9 1782";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "November 13 1782";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Januar 28 1783";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Oktober 5 1783";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 20 1784";
  a.href = "#chap6";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Januar 2 1785";
  a.href = "#chap7";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Februar 18 1785";
  a.href = "#chap8";
  document.getElementById("content").appendChild(a);

  /*     -------------------------------------------------------------
   */
  var a = document.createElement("p");
  a.innerText = "Inhaltsverzeichnis";
  a.setAttribute("onclick", "closeSidebar()");
  a.style = "cursor: none; font-size: 20px";

  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Zu Anfang";
  a.href = "#dex";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("br");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 20 1755";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Januar 9 1782";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "November 13 1782";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Januar 28 1783";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Oktober 5 1783";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "April 20 1784";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Januar 2 1785";
  a.href = "#chap7";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Februar 18 1785";
  a.href = "#chap8";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  document.getElementById("bio2").setAttribute("data", "/bio/DE-ryberg.txt");
  document.getElementById("bio3").setAttribute("data", "/bio/DE-Moltke.txt");
  document.getElementById("bio4").setAttribute("data", "/bio/DE-Wessel.txt");
  document.getElementById("bio5").setAttribute("data", "/bio/DE-jupiter.txt");
}
