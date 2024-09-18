function onclick( frameRef ) {
    return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument
    }
    var header = onclick( document.getElementById('frameindex') );
    if(document.title == "forside" || document.title == "Home" || document.title == "vorderseite"){
   header.getElementById("bdy").style="background-image:  url(./img/logo.png), url(./img/oederlogohvid200.jpg);";
    }
    if(document.title == "letterchede" || document.title == "letterchedk" || document.title == "lettercheen"){
        header.getElementById("bdy").style="background-image:  url(./img/logo.png), url(./img/leontodon.png);";
        header.getElementById("headerh2").innerText="Charlotte Hedevig Ericius"
        document.getElementById("headerh2").innerText="Charlotte Hedevig Ericius"

    }
    if(document.title == "letterbugdk" || document.title == "letterbugde" || document.title == "letterbugen"){
        header.getElementById("bdy").style="background-image:  url(./img/logo.png), url(./img/Bugge.jpg);";
        header.getElementById("headerh2").innerText="Thomas Bugge"
    }
    if(document.title == "letterlindk" || document.title == "letterlinde" || document.title == "letterlinen"){
        header.getElementById("bdy").style="background-image:  url(./img/logo.png), url(./img/linne.jpg);";
        header.getElementById("headerh2").innerText="Carl Von Linné"
    }

    if( document.title == "familynicodk"){
        header.getElementById("bdy").style="background-image:  url(./img/logo.png), url(./img/multebær.jpg);";
        header.getElementById("headerh2").innerText="Efterkommere af Nicolai Gotfried Oeder"
    }
    if(document.title == "familynicoen"){
        header.getElementById("bdy").style="background-image:  url(./img/logo.png), url(./img/multebær.jpg);";
        header.getElementById("headerh2").innerText="Decendants of Nicolai Gotfried Oeder"
    }

    if(document.title == "familynicode"){
        header.getElementById("bdy") 
        header.getElementById("headerh2").innerText="Nachkommen von Nicolai Gotfried Oeder"
    }
