let bedenkenContentDanish = [
  "Om titlen: Frihed og Ejendom.",
  " Spørgsmålet, som jeg vover at drøfte, er et sandt stridsspørgsmål.",
  "Jeg undlader bevidst de moralske argumenter.",
  "Spørgsmålet er af største vigtighed.",
  " Spørgsmålet berører alle dele af statsforvaltningen.",
  "Kategorierne af bondestanden.",
  "Nærmere Bestemmelse af Tilstanden i Hertugdømmerne Slesvig og Holsten.",
  "Nærmere Bestemmelse af Forfatningen i Danmark.",
  "Nogle bemærkninger om, hvad sammenligningen af situationen i hertugdømmerne og kongeriget giver anledning til.",
  "Udtrykkene plov i hertugdømmerne og ton hartkorn i Danmark er betegnelser for enheder.",
  "Med et opmærksomt blik rettet rundt omkring på de europæiske stater.",
  "Fordel ved den Ottende Niveaus.",
  " Befolkning.",
  "Bønderstanden er den mest talrige i alle stater. ",
  "Side 7. Graden af befolkningen bestemmes af forsyningen af føde.",
  "De nye gårde, der udspringer fra de delte godser, repræsenterer så mange pladser til nye familier.",
  "Blandt fæstegårdene er mange af betydelig størrelse og i stand til at blive opdelt.",
  "De endnu ikke opdyrkede områder bliver gradvist også udnyttet.",
  " Der bør oprettes flere boliger.",
  "Landbruget og det bymæssige erhverv er uadskillelige i deres drift.",
  "Bidrag fra regeringen.",
  "Forvandle fabrikker, gennem det livlige arbejde fra landbruget, til paradiser.",
  "Stater, hvor man først i nyere tid har iværksat fabrikker.",
  "Der er altid nogle fabrikker i hver stat.",
  "Et overskud af arbejdskraft fra bøndernes stand.",
  "At forfatningen af bondeklassen måtte stemme overens med dette store formål.",
];
let bedenkenContentEnglish = [
  "On the Title: Freedom and Property.",
  "The question, which I dare to discuss, is a true matter of controversy.",
  "I deliberately refrain from moral arguments.",
  "The question is of the greatest importance.",
  "The question touches on all parts of the state administration.",
  "The Categories of the Peasant Class.",
  "Further Specification of the Status in the Duchies of Schleswig and Holstein.",
  "Further Specification of the Constitution in Denmark.",
  "Some remarks on what the comparison of the situation in the duchies and the kingdom gives cause for.",
  "Explanation of the terms plow and ton of arable land.",
  "With an attentive gaze directed all around at the European states.",
  "Advantage of the Eighth Stage.",
  " Population.",
  "The peasant class is the most numerous in all states. ",
  "The degree of population is determined by the supply of food.",
  "The new farms arising from the divided estates represent as many places for new families.",
  "Among the manorial estates, many are of considerable size and capable of being divided.",
  "The yet unarable areas are gradually being attacked.",
  "More housing should be built.",
  "Agriculture and urban trade are inseparable in their operations.",
  "Contributions of the Government.",
  "Transforming Factories, Through the Lively Efforts of Agriculture, into Paradises.",
  "States Where Factories Were Only Recently Established.",
  "There Are Always Some Factories in Every State.",
  "An Excess of Labor from the Peasant Class.",
  "That the constitution of the peasantry may align with this great purpose.",
];
let bedenkenContentGerman = [
  "Auf dem Titel: Freyheit und Eigenthum.",
  "Die Frage, an deren Erörterung ich mich wage, ist eine wahre Streitfrage.",
  "Ich enthalte mich geflissentlich der moralischen Gründe.",
  "Die Frage ist von der größten Wichtigkeit.",
  "Die Frage schlägt in alle Theile Der Staatsverwaltung ein.",
  "Stuffen der Verfassung des Bauernstandes. ",
  "Nähere Bestimmung der Verfassung in den Herzogthümern Schleswig und Les Holstein.",
  "Nähere Bestimmung der Verfassung in Dänemark. ",
  "Einige Anmerkungen, wozu die Vergleichung Der Berfassung in den Herzogthümern und dem Königreiche Anlaß giebt.",
  "Erläuterung der Ausdrücke Pflug und Tonne Hartkorn.",
  "Bey einem aufmerksamen rings umher auf die europäische Staaten gewendeten Blicke.",
  " Vorzug der achten Stuffe.",
  "Bevölkerung.",
  "Der Bauernstand ist in allen Staaten der zahlreichste.",
  "Der Grad der Bevölkerung wird von dem Vorrathe der Nahrung bestimmt. ",
  "Die aus dem zergliederten Herrnlande entspringenden neuen Höfe sind so viel Pläße für neue Familien.",
  "Unter den Frohnhöfen sind viele von beträchtlicher Grösse und einer Teilung fähig.",
  "Die noch nicht urbaren Stellen werden allmälig auch angegriffen.",
  " Es sollten mehr Wohnungen, errichtet werden.",
  "Die Landwirthschaft und das bürgerliche Gewerbe sind in ihrem Betriebe unzertrennlich.",
  "Zuthun der Regierung.",
  "Fabriken verwandeln, durch den belebten Fleiß der Landwirthschaft selbst Einöden in Paradiese.",
  "Staaten, wo man erst in neuern Zeiten Fabriken unternommen hat.",
  "Es giebt ja wohl in jedem Staate immer einige Fabriken.",
  "Ein Ueberschuß von Händen aus dem Landmannstande.",
  "Daß die Verfassung des Bauerstandes mit dieser grossen Absicht übereinstimmen möge.",
];
let chapter = [
  "#chap3",
  "#chap4",
  "#chap5",
  "#chap6",
  "#chap7",
  "#chap8",
  "#chap9",
  "#chap10",
  "#chap11",
  "#chap12",
  "#chap13",
  "#chap14",
  "#chap15",
  "#chap16",
  "#chap17",
  "#chap18",
  "#chap19",
  "#chap20",
  "#chap21",
  "#chap22",
  "#chap23",
  "#chap24",
  "#chap25",
  "#chap26",
  "#chap27",
  "#chap28",
];
PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "bedenkenadditiondk") {
  SetALink(3, 68);
  SetContent(contentdanish);
  SetAlifeContent(chapter, bedenkenContentDanish);
}
if (path == "bedenkenadditionen") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
  SetALink(3, 68);
}
if (path == "bedenkenadditionde") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
  SetALink(3, 68);
}
let img = "./img/bedenkenzusats.png";
let link =
  "https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=&pg=PA75&printsec=frontcover";
SetLinkAndImgToFrontpage(link, img);

function SetALink(start, end) {
  for (let index = start; index < end; index++) {
    document
      .getElementById("a" + index)
      .setAttribute(
        "href",
        "https://www.google.dk/books/edition/Zus%C3%A4tze_zu_dem_Bedenken_%C3%BCber_die_Frage/2EalGGmOXRMC?hl=da&gbpv=1&dq=Zus%C3%A4tze+zu+dem+bedenken+%C3%BCber&pg=PA" +
          index
      );
    document.getElementById("a" + index).setAttribute("target", "_blank");
  }
}
