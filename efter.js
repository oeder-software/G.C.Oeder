let bedenkenContentDanish = [
  "Efterretning om et Verk, som paa Kongelig Befaling skal udgives, FLORA DANICA kaldet, tilligemed en Prøve- Plade af Multebaærs Planten (Rubus Chamæmorus.)",
  "Første hæfters planter",
  "Kobbertryk af Rubus Chamæmorus.",
];
let bedenkenContentEnglish = [
  "An Account of a Work, which by Royal Command is to be published, entituled FLORA DANICA, together with a Specimen Plate of the Cloudberry Plant (Rubus Chamæmorus.)",
  "Plants of the first issue",
  "Copper engraving of Rubus Chamæmorus",
];
let bedenkenContentGerman = [
  "Nachricht von einem Werke, welches auf Königlichen Befehl herausgegeben werden soll, FLORA DANICA genannt, nebst einer Probe-Tafel der Moltebeeren-Pflanze (Rubus Chamæmorus.)",
  "Pflanzen des ersten Heftes",
  "Kupferstich von Rubus Chamæmorus",
];

let chapter = ["#chap0", "#chap1", "#chap2"];

let img = "./img/efterretning.png";
let link = "https://www.kb.dk/e-mat/dod/130021446964-color.pdf";
SetLinkAndImgToFrontpage(link, img);
PrependBrBeforeChap(chapter);

// SetImgAndenken(andenkenImg, andenkenImgAlt);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "efterretning-en") {
  SetContent(contentenglish);
  SetAlifeContent(chapter, bedenkenContentEnglish);
}
if (path == "efterretning-de") {
  SetContent(contentgerman);
  SetAlifeContent(chapter, bedenkenContentGerman);
}
if (path == "efterretning-dk") {
  SetContent(contentdanish);
  SetAlifeContent(chapter, bedenkenContentDanish);
}
