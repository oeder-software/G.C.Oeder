document.getElementById("software").innerText="Oeder Software Dev"
document.getElementById("bug").setAttribute("href", "http://oeder-software.github.io/dev" )


if(document.title == "forside" || document.title == "letterchedk"|| document.title == "letterbugdk"|| document.title == "letterlindk" || document.title =="familynicodk" ){
    document.getElementById("lang").innerText="Vælg sprog"

    document.getElementById("home").innerText="Hjem"
    document.getElementById("home").setAttribute("href", "indexdkny.html")

    document.getElementById("drop2").innerText="Slægtstræ"
    document.getElementById("family").innerText="Slægten Oeder"
    document.getElementById("family").setAttribute("href", "familynicodk.html")
    document.getElementById("gco").innerText="Georg C. Oeder"

    document.getElementById("drop").innerText="Breve"
    document.getElementById("che").innerText="Fra Chalotte Hedevig Ericius"
    document.getElementById("che").setAttribute("href", "letterchedk.html")

    document.getElementById("lin").innerText="Til Carl von Linné"
    document.getElementById("lin").setAttribute("href", "letterlindk.html")

    document.getElementById("bug").innerText="Til Thomas Bugge"
    document.getElementById("bug").setAttribute("href", "letterbugdk.html")

    document.getElementById("drop1").innerText="Manuskripter"
    document.getElementById("alife").innerText="Et liv - med flere end en indsats"
    document.getElementById("andenken").innerText="Til minde om Oeder"
  }

    if(document.title == "Home" || document.title == "lettercheen"|| document.title == "letterbugen" || document.title == "letterlin" || document.title =="familynicoen"){
      document.getElementById("lang").innerText="Choose language"

      document.getElementById("home").innerText="Home"
      document.getElementById("home").setAttribute("href", "indexenny.html")
  
      document.getElementById("drop2").innerText="Family Tree"
      document.getElementById("family").innerText="Oeder family"
      document.getElementById("family").setAttribute("href", "familynicoen.html")
      document.getElementById("gco").innerText="Georg C. Oeder"
  
      document.getElementById("drop").innerText="Letters"
      document.getElementById("che").innerText="From Chalotte Hedevig Ericius"
      document.getElementById("che").setAttribute("href", "lettercheen.html")
  
      document.getElementById("lin").innerText="To Carl von Linné"
      document.getElementById("lin").setAttribute("href", "letterlin.html")
  
      document.getElementById("bug").innerText="To Thomas Bugge"
      document.getElementById("bug").setAttribute("href", "letterbugen.html")
      
      document.getElementById("drop1").innerText="Manuscripts"
      document.getElementById("alife").innerText="A life - with more than one effort."
      document.getElementById("andenken").innerText="In memory of Oeder."
    }  


    if(document.title == "vorderseite" || document.title == "letterchede" || document.title == "letterbugde" || document.title =="familynicode"){
      document.getElementById("lang").innerText="Sprache whälen"

      document.getElementById("home").innerText="Vorderseite"
      document.getElementById("home").setAttribute("href", "indexdeny.html")
  
      document.getElementById("drop2").innerText="Stammbaum"
      document.getElementById("family").innerText="Familie Oeder"
      document.getElementById("family").setAttribute("href", "familynicode.html")
      document.getElementById("gco").innerText="Georg C. Oeder"
  
      document.getElementById("drop").innerText="Briefe"
      document.getElementById("che").innerText="Von Chalotte Hedevig Ericius"
      document.getElementById("che").setAttribute("href", "letterchede.html")
  
      document.getElementById("lin").innerText="An Carl von Linné"
      document.getElementById("lin").setAttribute("href", "letterlin.html")
  
      document.getElementById("bug").innerText="An Thomas Bugge"
      document.getElementById("bug").setAttribute("href", "letterbugde.html")
      
      document.getElementById("drop1").innerText="Manuskripte"
      document.getElementById("alife").innerText="Ein Leben - mit mehr als ein einsatz."
      document.getElementById("andenken").innerText="Andenken an Oeder."
    }  

    if(document.title == "vorderseite" || document.title == "Home"|| document.title == "forside"){
      document.getElementById("home").style="background-color:steelblue;"
    }
    if(document.title == "letterchedk" || document.title == "lettercheen"|| document.title == "letterchede"){
      document.getElementById("drop").style="background-color:steelblue;"
      document.getElementById("che").style="background-color:steelblue;"

    }
    if(document.title == "letterbugdk" || document.title == "letterbugen"|| document.title == "letterbugde"){
      document.getElementById("drop").style="background-color:steelblue;"
      document.getElementById("bug").style="background-color:steelblue;"

    }
  
  if(document.title == "letterlindk" || document.title == "letterlinen"|| document.title == "letterlinde"){
    document.getElementById("drop").style="background-color:steelblue;"
    document.getElementById("bug").style="background-color:steelblue;"

  }

    if(document.title == "familynicodk" || document.title == "familynicoen"|| document.title == "familynicode"){
      document.getElementById("drop2").style="background-color:steelblue;"
      document.getElementById("family").style="background-color:steelblue;"

    }
    if(document.title == "slægtstrænico" || document.title == "slægtstrænico"|| document.title == "slægtstrænico"){
      document.getElementById("drop2").style="background-color:steelblue;"
      document.getElementById("family").style="background-color:steelblue;"

    }


    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
      document.getElementById("myDropdown1").classList.toggle("show");
      document.getElementById("myDropdown2").classList.toggle("show");
    }
    window.onclick = function(e) {
      if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
        if (!e.target.matches('.dropbtn1')) {
      var myDropdown1 = document.getElementById("myDropdown1");
        if (myDropdown1.classList.contains('show')) {
          myDropdown1.classList.remove('show');
        }
      }
      if (!e.target.matches('.dropbtn2')) {
      var myDropdown2 = document.getElementById("myDropdown2");
        if (myDropdown2.classList.contains('show')) {
          myDropdown2.classList.remove('show');
        }
      }
    }
  

    