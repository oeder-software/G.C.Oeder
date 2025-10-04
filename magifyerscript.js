var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
path = path.slice(-2)
var maghide;
var magshow;
var magzoom;
var magseize;
var magform;
var magtoggle;
var closebut;
let magnifyingWordsEn = ["Hide magnifying glass", "Show magnifying glass", "Magnitude of zoom:", "Resize magnifying glass", "Change magnifying glass shape", "Toggel magnifying glass", "Close Copperplate"]
let magnifyingWordsDk = ["Skjul lup", "Vis lup", "Forstørrelsesgrad:", "Ændr størrelsen på lupen", "Skift lupens form", "Slå lup til/fra", "Luk Kobberstik"]
let magnifyingWordsDe = ["Lupe ausblenden", "Lupe einblenden", "Vergrößerungsstufe:", "Lupe Größe ändern", " Lupenform ändern", "Lupe an/aus", "Kupfertafel schlissen"]

if (path == "en") {
    maghide = magnifyingWordsEn[0];
    magshow = magnifyingWordsEn[1];
    magzoom = magnifyingWordsEn[2];
    magseize = magnifyingWordsEn[3];
    magform = magnifyingWordsEn[4];
    magtoggle = magnifyingWordsEn[5];
    closebut = magnifyingWordsEn[6]
}
if (path == "de") {
    maghide = magnifyingWordsDe[0];
    magshow = magnifyingWordsDe[1];
    magzoom = magnifyingWordsDe[2];
    magseize = magnifyingWordsDe[3];
    magform = magnifyingWordsDe[4];
    magtoggle = magnifyingWordsDe[5];
    closebut = magnifyingWordsDe[6]

}
if (path == "dk") {
    maghide = magnifyingWordsDk[0];
    magshow = magnifyingWordsDk[1];
    magzoom = magnifyingWordsDk[2];
    magseize = magnifyingWordsDk[3];
    magform = magnifyingWordsDk[4];
    magtoggle = magnifyingWordsDk[5];
    closebut = magnifyingWordsDk[6]

}

function SetImages(img, filefolder) {
    var a = document.createElement("div");
    a.setAttribute("class", "imagescontainer");
    a.setAttribute("id", "imagescontainer");
    document.getElementById("chapimg").append(a)
    for (let i = 0; i < img.length; i++) {
        // let linksDiv = document.createElement("div");
        // linksDiv.setAttribute("id", "card" + i);
        // linksDiv.setAttribute("class", "card");
        // document.getElementById("imagescontainer").appendChild(linksDiv);
        
        // var a = document.createElement("img");
        if (path == "flora-danica-dk" || path == "flora-danica-de" || path == "flora-danica-en") {
            let newfilefolder = filefolder.slice(0, -8);
            let newimg = img[i].substring(4);
                    let c = document.createElement("div");
        c.setAttribute("id", "cardcontainer" + i);
        c.setAttribute("class", "cardcontainer");
        document.getElementById("imagescontainer").appendChild(c);

        let linksDiv = document.createElement("div");
        linksDiv.setAttribute("id", "card" + i);
        linksDiv.setAttribute("class", "card");
        document.getElementById("cardcontainer" + i).appendChild(linksDiv);

        let b = document.createElement("div");
        b.setAttribute("id", "cardinfo" + i);
        b.setAttribute("class", "cardinfo");
        document.getElementById("cardcontainer" + i).appendChild(b);

        

            var a = document.createElement("img");
            a.setAttribute("src", "./img/" + filefolder + "/" + img[i] + ".jpg");
            a.style = "margin: 0px;"
            a.setAttribute("id", img[i]);
            // a.style="cursor: pointer;"
            a.setAttribute("onmouseover", "showTxtDescrip('" + img[i] + "')");
            a.setAttribute("onmouseout", "removeTxtDescrip('" + img[i] + "')");
            a.setAttribute("onclick", "OpenKrautImg('" + newimg + "','" + newfilefolder + "'); setTxtDescrip('"+img[i]+"')");
        a.setAttribute("class", "imgToMagnify");
        document.getElementById("card" + i).append(a)

            var tooltip = document.createElement("span");
            tooltip.setAttribute("class", "tooltiptxt");
            tooltip.setAttribute("id", "tooltip" + i);
            tooltip.innerHTML = "hello world"
            document.getElementById("card" + i).appendChild(tooltip)
        } else {
        let linksDiv = document.createElement("div");
        linksDiv.setAttribute("id", "card" + i);
        linksDiv.setAttribute("class", "card");
        document.getElementById("imagescontainer").appendChild(linksDiv);

                        var a = document.createElement("img");
            a.setAttribute("src", "./img/" + filefolder + "/" + img[i] + ".png");
            a.style = "margin: 10px;"
            a.setAttribute("id", img[i]);
            // a.style="cursor: pointer;"
            a.setAttribute("onmouseover", "showTxtDescrip('" + img[i] + "')");
            a.setAttribute("onmouseout", "removeTxtDescrip('" + img[i] + "')");
            a.setAttribute("onclick", "OpenKrautImg('" + img[i] + "','" + filefolder + "')");
        a.setAttribute("class", "imgToMagnify");
        document.getElementById("card" + i).append(a)

            // a.setAttribute("src", "./img/" + filefolder + "/" + img[i] + ".png");
            // a.setAttribute("onclick", "OpenKrautImg('" + img[i] + "','" + filefolder + "')");
        }
        // a.setAttribute("class", "imgToMagnify");
        // document.getElementById("card" + i).append(a)
    }
}

let seizevalue;
let zoomvalue = 0;
let x = window.matchMedia("(max-width: 1000px)");
if (window.matchMedia("(max-width: 1000px)").matches){
seizevalue =100;
zoomvalue = 2;
}else{

    seizevalue = 250;
}
let formvalue = 50;
function OpenKrautImg(img, filefolder) {

    document.getElementById("article").style.display = "none";
    document.getElementById("asiderightimg").style.display = "none";
    document.getElementById("asideleftimg").style.display = "none";

    var a = document.createElement("div");
    a.setAttribute("id", "imgcontainerbuttons")
    a.style = "align-items: end;  300px; display: flexpadding-top: 40px;background-color: #d0b49f; ";
    document.getElementById("main").append(a)
    
    var a = document.createElement("div");
    a.setAttribute("id", "buttoncontainer")
    a.style = "align-items: end;  width: 300px; padding-top: 40px;background-color: #d0b49f; ";
    document.getElementById("imgcontainerbuttons").append(a)

    var a = document.createElement("p");
    a.innerHTML = magtoggle;
    a.style = "margin-bottom: 10px;";
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("button");
    a.innerHTML = maghide;
    a.style = "width: 300px; "
    a.setAttribute("onclick", "remmagnify()");
    a.setAttribute("id", "magnifybutton")
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("p");
    a.innerHTML = magseize;
    a.style = "margin-top: 10px;";
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("input");
    a.setAttribute("id", "input-seize");
    a.setAttribute("class", "sliderclass")
    a.setAttribute("type", "range");
    a.setAttribute("min", "50");
    a.setAttribute("max", "500");
    a.setAttribute("value", seizevalue);
    a.style = "width: 300px; margin-top: 10px;";
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("p");
    a.innerHTML = magform;
    a.style = "margin-top: 10px;";
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("input");
    a.setAttribute("id", "input-form");
    a.setAttribute("class", "sliderclass")
    a.setAttribute("type", "range");
    a.setAttribute("min", "0");
    a.setAttribute("max", "50");
    a.setAttribute("value", "25");
    a.style = "width: 300px; margin-top: 10px;";
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("p");
    a.innerHTML = magzoom + zoomvalue;
    a.style = "margin-top: 10px;";
    a.setAttribute("id", "zoom")
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("input");
    a.setAttribute("id", "input-zoom");
    a.setAttribute("class", "sliderclass")
    a.setAttribute("type", "range");
    a.setAttribute("min", "2");
    a.setAttribute("max", "6");
    a.setAttribute("value", zoomvalue);
    a.style = "width: 300px; margin-top: 10px; margin-bottom: 10px";
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("div");
    a.setAttribute("id", "imgcontainer");
    a.style = "margin-right: auto; margin-left: auto; position: relative; display: inline-block; "
    document.getElementById("main").append(a)

    var a = document.createElement("button")
    a.setAttribute("id", "closebutton");
    a.style = "display: inline; margin-top: 20px;";
    a.innerHTML = closebut;
    a.setAttribute("onclick", "CloseKrautImg()");
    document.getElementById("buttoncontainer").append(a)

    var a = document.createElement("img")
    a.src = "./img/buttons/closebut.png";
    a.setAttribute("id", "closeimg");
    a.style = "margin-right: auto; margin-left: auto; width: 20px; float: right; backgrond-color: #c7a19b;"
    document.getElementById("closebutton").append(a)

    // var a = document.createElement("p");
    // a.setAttribute("id", "fdtxt");
    // document.getElementById("imgcontainerbuttons").append(a)

    var a = document.createElement("img")
    if (path == "flora-danica-dk" || path == "flora-danica-de" || path == "flora-danica-en") {
        a.src = "./img/" + filefolder + "/" + img + ".jpg";
    }

    else {
        a.src = "./img/" + filefolder + "/" + img + ".png";
    }
    a.setAttribute("id", "myimage");
    a.style = "margin-right: auto; margin-left: auto; padding-top: 40px; "
    document.getElementById("imgcontainer").append(a)

    const sliderval = document.getElementById("input-seize");
    sliderval.oninput = function () {
        document.getElementById("img-magnifier-glass").style.width = sliderval.value + "px";
        document.getElementById("img-magnifier-glass").style.height = sliderval.value + "px";
        seizevalue = sliderval.value;
    };
    const slidervalform = document.getElementById("input-form");
    slidervalform.oninput = function () {
        document.getElementById("img-magnifier-glass").style.borderRadius = slidervalform.value + "%";
        formvalue = slidervalform.value;
    };

    const slidervalzoom = document.getElementById("input-zoom");
    slidervalzoom.oninput = function () {
        document.getElementById("img-magnifier-glass").remove();
        document.getElementById("zoom").innerHTML = magzoom + slidervalzoom.value;
        document.getElementById("input-form").value = formvalue;
        document.getElementById("input-seize").value = seizevalue;
        zoomvalue = slidervalzoom.value;

        magnify("myimage", zoomvalue, formvalue, seizevalue);
    };
    magnify("myimage", zoomvalue, formvalue, seizevalue);
}
let counter = 0;
function remmagnify() {
    if (counter == 1) {
        document.getElementById("img-magnifier-glass").style.display = "inline-block";
        document.getElementById("magnifybutton").innerHTML = maghide;
        document.getElementById("magnifybutton").style.backgroundColor = "#e4d4c8";
        counter--;
    } else
        if (counter == 0) {
            document.getElementById("img-magnifier-glass").style.display = "none";
            counter++;
            document.getElementById("magnifybutton").innerHTML = magshow;
            document.getElementById("magnifybutton").style.backgroundColor = "#acbaad";
        }
}
function CloseKrautImg() {
    location.reload();
}
function magnify(imgID, zoom, formvalue, seizevalue) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    glass.setAttribute("id", "img-magnifier-glass");
    glass.style = "position: absolute; border: black; border-radius:" + formvalue + "%; cursor: none; width:" + seizevalue + "px; height: " + seizevalue + "px; border: 3px solid #523a28; z-index: 8;"
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    
    function moveMagnifier(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /*prevent the magnifier glass from being positioned outside the image:*/
        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x < w / zoom) { x = w / zoom; }
        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y < h / zoom) { y = h / zoom; }
        /*set the position of the magnifier glass:*/
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /*display what the magnifier glass "sees":*/
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}


if(window.matchMedia("(max-width: 700px)").matches){

}