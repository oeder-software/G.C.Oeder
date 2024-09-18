document.getElementById("sidebarcontent").style = "cursor: pointer;";

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "letterchedk") {
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
  a.innerText = "Den 20 maj 1755";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 21 maj 1755";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 22 maj 1755";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 25 maj 1755";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 27 maj 1755";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 21 juni 1755";
  a.href = "#chap6";
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
  a.innerText = "Den 20 maj 1755";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 21 maj 1755";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 22 maj 1755";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 25 maj 1755";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 27 maj 1755";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Den 21 juni 1755";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  let image = ["./img/laurvig.jpg"];
  function SetImage(list) {
    for (let index = 0; index < list.length; index++) {
      const element = image[index];

      console.log("img" + (index + 1));
      document.getElementById("img" + (index + 1)).setAttribute("src", element);
    }
  }
  SetImage(image);

  /* document.getElementById("img1").setAttribute("src", "/img/laurvig.jpg");
   */
  document.getElementById("bio1").setAttribute("data", "/bio/DK-laurvig.txt");
}
if (path == "lettercheen") {
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
  a.innerText = "May 20 1755";
  a.href = "#chap1";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 21 1755";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 22 1755";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 25 1755";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 27 1755";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "June 21 1755";
  a.href = "#chap6";
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
  a.innerText = "May 20 1755";
  a.href = "#chap1";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 21 1755";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 22 1755";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 25 1755";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "May 27 1755";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "June 21 1755";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  document.getElementById("img1").setAttribute("src", "./img/laurvig.jpg");
  document.getElementById("bio1").setAttribute("data", "./bio/EN-laurvig.txt");
}

if (path == "letterchede") {
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
  a.innerText = "Mai 21 1755";
  a.href = "#chap2";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 22 1755";
  a.href = "#chap3";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 25 1755";
  a.href = "#chap4";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 27 1755";
  a.href = "#chap5";
  document.getElementById("content").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Juni 21 1755";
  a.href = "#chap6";
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
  a.innerText = "Mai 21 1755";
  a.href = "#chap2";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 22 1755";
  a.href = "#chap3";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 25 1755";
  a.href = "#chap4";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Mai 27 1755";
  a.href = "#chap5";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  a = document.createElement("a");
  a.innerText = "Juni 21 1755";
  a.href = "#chap6";
  a.setAttribute("onclick", "closeSidebar()");
  document.getElementById("sidebarcontent").appendChild(a);

  document.getElementById("img1").setAttribute("src", "./img/laurvig.jpg");
  document.getElementById("bio1").setAttribute("data", "./bio/DE-laurvig.txt");
}
