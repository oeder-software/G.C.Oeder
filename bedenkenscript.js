let bedenkenContentDanish = [
  "Betænkning over spørgsmålet: Hvordan kan frihed og ejendom sikres for bondeklassen i de lande, hvor begge mangler?",
  "Indhold.",
  "Nærmere præcisering af min mening.",
  "Befolkning.",
  "Forholdet mellem landbrug og borgerligt erhverv",
  "Fabrikker.",
  "Udvidet total af nationalindkomsten.",
  "Forsvarsstand",
  "Mulighed for at opdele store godser uden at miste godsejernes privilegier og sikkerhed for fremtiden.",
  "Mulighed for Opdeling Uden Tab af Godsejernes Indkomst.",
  "Fremgangsmåde ved gennemførelsen af opsplitningen.",
  "Spørgsmålet om, hvad der er retfærdigt?",
  "Vanskeligheder, der skal overvejes ved gennemførelsen af forandringen i et helt land",
  "Eksempel som fyrsten kan give på sine domæner.",
  "Bestemmelse af hoveriarbejdet.",
  "Afgifter skal fastsættes in natura, ikke i penge.",
  "Betragtninger ved ændringer af de én gang oprettede skatteregistre over landejendomme og grunde til regulering af statens afgifter.",
];
let bedenkenContentEnglish = [
  "Considerations on the Question: How can freedom and property be secured for the peasantry in those countries where both are lacking?",
  "Content.",
  "Further clarification of my opinion. ",
  "Population.",
  "Relationship Between Agriculture and Civic Trade",
  "Factories.",
  "Expanded total of the national income.",
  "Defensive Stand",
  "Possibility of subdividing large estates without loss of the landowners' privileges and security for the future.",
  "Possibility of Division Without Loss to the Landowners' Income.",
  "Procedure for Implementing the Subdivision.",
  "The question of what is just?",
  "Difficulties to be Considered in the Implementation of the Change Across the Entire Country",
  "Example that the prince can set on his estates.",
  "Determination of feudal services.",
  "Taxes must be assessed in kind, not in money",
  "Considerations regarding changes to the tax registers of estates and properties, once established for the adjustment of sovereign dues.",
];
let bedenkenContentGerman = [
  "Bedenken über die Frage: Wie dem Bauernstande Freyheit und Eigenthum in den Ländern, wo ihm beydes fehlet, verschaffet werden könne?",
  "Inhalt.",
  "Nähere Bestimmung meiner Meynung. ",
  "Bevölkerung.",
  "Zusammenhang des Landwesens mit dem bürgerlichen Gewerbe.",
  "Fabriken",
  "Erweitertes Total des Nationalgewinnstes.",
  "Vertheidigungsstand.",
  "Möglichkeit der Zergliederung der Haupthöfe ohne Verlust der Gutsherren an Herrlichkeiten und Sicherheit fürs Künftige.",
  "Möglichkeit der Zergliederung, ohne Verlust der Gutsherren an Einnahme.",
  "Verfahren in Bewerkstelligung der Zergliederung.",
  "Die Frage, was Rechtens ist?",
  "Schwierigkeiten, die bey Ausführung der Veränderung in einem ganzen Lande bedacht werden müssen.",
  "Beyspiel welches der Fürst auf seinen Domainen geben kann.",
  "Bestimmung der Frohndienste.",
  "Abgaben müssen in natura, nicht in Gelde angeseßt werden.",
  "Bedenklichkeiten bey Veränderungen der einmal zu Berichtigung landesherrlicher Gefälle errichteten Steuerregister über Landgüter und Grundstücke.",
];

let chapter = [
  "#chap2",
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
];
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "bedenkenen") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
}
if (path == "bedenkende") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
}
if (path == "bedenkendk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, bedenkenContentDanish);
}
