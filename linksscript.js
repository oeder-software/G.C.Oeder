let LetterLink;
let bioLink;
let artLink;
let manuLink;
let referencesLink;
let chapter = [];
let bedenkenContentDanish = [];
let bedenkenContentEnglish = [];
let bedenkenContentGerman = [];

let referencesDe = [
	"J. A. Kritters. <br> Probe 1. <br><br> Siehe Erinnerungen betreffend Hrn. Kritters Aufsätze.",
	"J. A. Kritters. <br> Probe 2. <br><br> Siehe Erinnerungen betreffend Hrn. Kritters Aufsätze.",
  "J. Möser. <br> Patriotische Phantasien. <br><br>Siehe Osnabrückische und Oldenburgische Bevölkerung.",
  "Conferenceraad Fleischers Begierde an ein unparteiisches und dänisch denkendes Publikum.<br><br> Siehe Oederiana." 
  ,"P. A. Heiberg. Die Virtuosen, Komödie in einem Akt<br><br> Siehe Oederiana"
];
let referencesDk = [
	"J. A. Kritters. <br> Undersøgelse 1. <br><br> Se Erindringer vedr. Hr. Kritters afhandling.",
	"J. A. Kritters. <br> Undersøgelse 2. <br><br> Se Erindringer vedr. Hr. Kritters afhandling.",
  "J. Möser. <br> Patriotiske fantasier. <br><br> Se Osnabrücks og Oldenburgs befolkning. ",
  "Conferenceraad Fleischers Begiering til et upartisk og dansk tænkende publikum.<br><br> Se Oederiana.",
  "P. A. Heiberg. Virtuosen, Komedie i én Akt<br><br> Se Oederiana"
];
let referencesEn = [
	"J. A. Kritters. <br> Investigation 1. <br><br> See Remembrances regarding Mr. Kritters’ essays.",
	"J. A. Kritters. <br> Investigation 2. <br><br> See Remembrances regarding Mr. Kritters’ essays.",
  "J. Möser. <br> Patriotic Fantasies.<br><br> See Population of Osnabrück and Oldenburg.",
  "Conference Councillor Fleischer’s Desire to an Impartial and Danish-minded Public<br><br> See Oederiana.",
  "P. A. Heiberg. The Virtuosos, Comedy in One Act<br><br> See Oederiana"
];

let referencesFlag = ["de", "de", "de", "dk", "dk"];
let referencesImages = ["refkrit1", "refkrit2", "refosna", "refupartisk", "refvirtuose"];
let referencesHyperLinks = [
	"https://www.google.dk/books/edition/_/6HRlAAAAcAAJ?hl=da&gbpv=1&pg=PA19&printsec=frontcover",
	"https://www.google.dk/books/edition/_/6nRlAAAAcAAJ?hl=da&gbpv=1&dq=&pg=PA289&printsec=frontcover",
"https://www.digitale-sammlungen.de/en/view/bsb10725570?page=257]",
"https://www.google.dk/books/edition/_/VlFiAAAAcAAJ?hl=da&gbpv=1&dq=&pg=PA41&printsec=frontcover",
"https://tekster.kb.dk/text/adl-texts-heibergpa01val-shoot-workid75010"
]
let lettersDe = [
	"Von Charlotte Hedevig Ericius.",
	"An Carl von Linné.",
	"An J. H. Bernstorff.",
	"An Peter Frederik Suhm.",
	"An Johan Ernst Gunnerus.<br><br> 1897 Heft 3, S. 49-54. <br> 1898 Heft 4, S. 7-9. <br>1900, Heft 4, S. 36-42, 51-54, 64-65",
	"Peter Friedrich Ludwig , Herzog von Oldenburg.",
];
let lettersDk = [
	"Fra Charlotte Hedevig Ericius.",
	"Til Carl von Linné.",
	"Til J. H. Bernstorff.",
	"Til Peter Frederik Suhm.",
	"Til Johan Ernst Gunnerus.<br><br> 1897 Heft 3, S. 49-54.<br> 1898 Heft 4, S. 7-9.<br> 1900, Heft 4, S. 36-42, 51-54, 64-65",
	"Til Peter Friedrich Ludwig , Herzog von Oldenburg.",
];
let lettersEn = [
	"From Charlotte Hedevig Ericius.",
	"To Carl von Linné.",
	"To J. H. Bernstorff.",
	"To Peter Frederik Suhm.",
	"To Johan Ernst Gunnerus.<br><br> 1897 Heft 3, S. 49-54. <br>1898 Heft 4, S. 7-9. <br>1900, Heft 4, S. 36-42, 51-54, 64-65",
	"To Peter Friedrich Ludwig , Herzog von Oldenburg.",
];

let letterFlag = ["de", "vatican", "de", "dk", "dk", "de"];
let letterImages = [
	"letterche",
	"letterlin",
	"letterbern",
	"lettersuhm",
	"gunnerus3",
	"175",
];
let letterHypertLinks = [
	"https://digital.slub-dresden.de/werkansicht/dlf/124154/35?tx_dlf_navigation%5Bcontroller%5D=Navigation&cHash=2b7eef6229ba85ff2b6ec7ffb9f4c277",
	"https://www.alvin-portal.org/alvin/resultList.jsf?aq=%5B%5B%7B%22A_FQ%22%3A%22oeder%22%7D%5D%5D&p=1&sortString=relevance_sort_desc&aqe=%5B%5D&af=%5B%22PER_PID%3Aalvin%5C%5C-person%5C%5C%3A57297%22%5D&searchType=EXTENDED&query=oeder&noOfRows=10&fs=true&dswid=7827",
	"https://slaegtsbibliotek.dk/924457.pdf#page=593",
	"https://www.kb.dk/e-mat/dod/130000926249-color.pdf#page=426",
	// "https://www.kb.dk/e-mat/dod/130000926249-bw.pdf#page=428",
	"https://www.ntnu.no/ojs/index.php/DKNVS_skrifter/article/view/1019",
	"https://slaegtsbibliotek.dk/2023/935997.pdf#page=41",
];

let bioDe = [
	" Ein Leben - mit mehr als einem Einsatz Von Ernst Willumsen.",
	"Andenken an Oeder von Gerhard Anton von Halem. Übersetz von Ernst Willumsen.",
	"Andenken an Oeder von Gerhard Anton von Halem.",
	"Georg Christian von Oeders Oldenburger Zeit. Zur Erinnerung an seinen Todestag vor 175 Jahren. von Carl Haase",
];
let bioDk = [
	" Georg Christian Oeder Et liv - med flere end en indsats. Af Ernst Willumsen.",
	"Til minde om Oeder af Gerhard Anton von Halem. Altona 1793. Oversat af Ernst Willumsen.",
	"Til minde om Oeder af Gerhard Anton von Halem.",
	"Georg Christian von Oeders oldenborgske tid. Til minde om hans dødsdag for 175 år siden. Af Carl Haase",
];
let bioEn = [
	" Georg Christian Oeder A Life - with More Than One Endeavor. By Ernst Willumsen.",
	"In Memory of Oeder by Gerhard Anton von Halem. Altona 1793. Translated by Ernst Willumsen.",
	"In Memory of Oeder by Gerhard Anton von Halem.",
	"Georg Christian von Oeder’s Oldenburg Period. In memory of the 175th anniversary of his death. By Carl Haase",
];

let bioFlag = ["dk", "dk", "de", "de"];
let bioImages = ["flora13", "flora3", "andenken", "175"];
let bioHyperLinks = [
	"https://soeg.kb.dk/discovery/fulldisplay?context=L&vid=45KBDK_KGL:KGL&search_scope=MyInst_and_CI&tab=Everything&docid=alma99122802535505763",
	"https://soeg.kb.dk/discovery/fulldisplay?context=L&vid=45KBDK_KGL:KGL&search_scope=MyInst_and_CI&tab=Everything&docid=alma99122802535505763",
	"https://www.google.dk/books/edition/_/uNc5bdas04UC?hl=da&gbpv=1",
	"https://slaegtsbibliotek.dk/2023/935997.pdf",
];
let manuDe = [
	"Vorrede zu Bedenken über die Frage: Wie dem Bauernstande Freyheit und Eigenthum in den Ländern, wo ihm beydes fehlet, verschaffet werden könne ?",
	" Bedenken über die Frage: Wie dem Bauernstande Freyheit und Eigenthum in den Ländern, wo ihm beydes fehlet, verschaffet werden könne ?",
	"Zusätze zu Bedenken über die Frage: Wie dem Bauernstande Freyheit und Eigenthum in den Ländern, wo ihm beydes fehlet, verschaffet werden könne ?",
	"Zulage zu Bedenken über die Frage: Wie dem Bauernstande Freyheit und Eigenthum in den Ländern, wo ihm beydes fehlet, verschaffet werden könne ?",
	"Oederiana.",
	"Einleitung zu der Kräuterkenntniß.Erster Theil.",
	"Einleitung zu der Kräuterkenntniß.Erster Theil.",
	"Einleitung zu der Kräuterkenntniß. Zweyter Theil, Mit Kupfern.",
	" Nachricht von einem Werke, welches auf Königlichen Befehl herausgegeben werden soll, FLORA DANICA genannt, nebst einer Probe-Tafel der Moltebeeren-Pflanze (Rubus Chamæmorus.)",
	"Inaugural-Dissertation über die Ableitung und den Rückfluss durch den Aderlass.",
	"Antwort auf die Rezension, eingedruckt in der Allgemeinen Dänischen Literatur-Zeitschrift vierter Band, zweites Stück des Jahres 1784, über die Kupferstiche zur Flora Danica 15. Heft, von Seite 281–296. Kopenhagen.Gedruckt bei Christian Friderik Holm,1786.",
	"Rüge einer Zudringlichkeit. Sehen Sie Oederiana.",
	"Verschiedenes betreffend Georg Christian Oeder, Doktor der Medizin, seine Disputation „De Irritabilitate“, gehalten am 16. Februar 1752.<br><br> Handschrift.",
];
let manuDk = [
	"Forord til Overvejelser over spørgsmålet: Hvordan kan frihed og ejendom sikres for bondeklassen i de lande, hvor begge mangler?",
	"Overvejelser over spørgsmålet: Hvordan kan frihed og ejendom sikres for bondeklassen i de lande, hvor begge mangler?",
	"Tillæg til Overvejelser over spørgsmålet: Hvordan kan frihed og ejendom sikres for bondeklassen i de lande, hvor begge mangler?",
	"Tilføjelser til Overvejelser over spørgsmålet: Hvordan kan frihed og ejendom sikres for bondeklassen i de lande, hvor begge mangler?",
	"Oederiana.",
	"Indledning til Plante-Læren, Del 1.",
	"Indledning til Plante-Læren, Del 1.",
	"Indledning til Plante-Læren, Del 2. Med kobberstik.",
	" Efterretning om et Verk, som paa Kongelig Befaling skal udgives, FLORA DANICA kaldet, tilligemed en Prøve- Plade af Multebaærs Planten (Rubus Chamæmorus.)",
	"Inauguralafhandling om afledning og tilbagestrømning ved åreåbning.",
	"Svar paa Recensionen , indrykket i den almindelige danske Litteratur-Journal fierde Bind andet Stykke for Aar 1784, over Kobberstykker til Flora Danica 15de Hefte a Pag. 281-296 .",
	"Irettesættelse af en indtrængen. Se Oederiana.",
	"Adskilligt ang. Georgii Christiani Oederi Doctor i Medicinen Hans Disputatz de Irritabilitate holden paa Kiøbenhavns Universitet den 16de Februarii 1752. <br> <br> Håndskrift",
];

let manuEn = [
	"Preface to the Considerations on the Question: How can freedom and property be secured for the peasantry in those countries where both are lacking?",
	"Considerations on the Question: How can freedom and property be secured for the peasantry in those countries where both are lacking?",
	"Addition to the Considerations on the Question: How can freedom and property be secured for the peasantry in those countries where both are lacking?",
	"Supplement to the Considerations on the Question: How can freedom and property be secured for the peasantry in those countries where both are lacking?",
	"Oederiana.",
	"Introduction to the Knowledge of Herbs. Part 1.",
	"Introduction to the Knowledge of Herbs. Part 1.",
	"Introduction to the Knowledge of Herbs. Part 2. With Copper Engravings.",
	"An Account of a Work, which by Royal Command is to be published, entituled FLORA DANICA, together with a Specimen Plate of the Cloudberry Plant (Rubus Chamæmorus.)",
	"Inaugural Dissertation on Derivation and Reflux by Means of Venesection.",
	"Reply to the review, inserted in the General Danish Literary Journal fourth volume, second issue for the year 1784, concerning the copper engravings for Flora Danica 15th fascicle, from page 281–296. Copenhagen.",
	"rebuke of an intrusion. See Oederiana.",
	"Various matters concerning Georg Christian Oeder, Doctor of Medicine, his dissertation “De Irritabilitate”, held at the University of Copenhagen on February 16, 1752. <br><br> Manuscript.",
];

let manuFlag = [
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"dk",
	"de",
	"dk",
	"vatican",
	"dk",
	"de",
	"dk",
];
let manuImages = [
	"bedenkenforside",
	"bedenkenforside",
	"bedenkenzusats",
	"bedenkensup",
	"oederiana",
	"krauter1",
	"krauter-1-dk",
	"krauter2",
	"efterretning",
	"Dissertation",
	"svar",
	"ruge",
	"irrabilitate2",
];
let manuHyperLinks = [
	"https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_wie_dem_Bauerns/LwBCAAAAcAAJ?hl=da&gbpv=1&dq=georg+christian+oeder&printsec=frontcover",
	"https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=&pg=PA75&printsec=frontcover",
	"https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=&pg=PA118&printsec=frontcover",
	"https://www.google.dk/books/edition/Bedenken_%C3%BCber_die_Frage_Wie_dem_bauerns/-gluJmCBKOMC?hl=da&gbpv=1&dq=&pg=PA118&printsec=frontcover",
	"https://www.kb.dk/e-mat/dod/130019453090.pdf#page=8",
	"https://www.google.dk/books/edition/_/kqnNHkbuHnAC?hl=da&gbpv=1",
	"https://www.kb.dk/e-mat/dod/130020872900.pdf",
	"https://www.google.dk/books/edition/Einleitung_zu_der_Kr%C3%A4uterkenntni%C3%9F/QfxbAAAAcAAJ?hl=da&gbpv=1",
	"https://www.kb.dk/e-mat/dod/130021446964-color.pdf#page=4",
	"https://www.google.dk/books/edition/De_derivatione_et_reculsione_per_venae_s/rm9QAAAAcAAJ?gbpv=1",
	"https://www.google.dk/books/edition/Svar_paa_Recensionen_i_den_almindelige_d/PF1bQKh_-I0C?hl=da&gbpv=1",
	"https://dibiki.ub.uni-kiel.de/viewer/fullscreen/PPN100615888X/5/",
	"https://marcus.uib.no/instance/manuscript/ubb-ms-0116.html",
	"",
	"",
	"",
	"",
	"",
];

let artDe = [
	"Ueber Banco, Courant, und Munze.",
	"Ueber PapirGeld.",
	"Gedanken über das PapirGeld",
	'Auszug aus der "Anordnung der in Hamburg errichteten Allgemeinen Versorgungsanstalt. Zwote Auflage, mit vermerten und verbesserten Tabellen. Hamburg, 1779, 30 Seiten, und 30 Blätter Tabellen.',
	"Nachrichten vom Handel der Stadt und des Stiftes Drontheim in Norwegen.",
	"Methode zu Bestimmung des Areals der Länder.",
	"Ueber die Bremiiche WittwenCasse.",
	"Aufsätze, betreffend die im Jahre 1769 in den Königlichen Dänischen Staaten in Europa vorgenommene Volkszählung",
	"Von einer in den Nordlanden zu errichtenden Stadt. Geschrieben im Junio 1763. Sehen Sie Oederiana.",
	" Appell an das dänische Publicum von dem Herrn Stifts-Amtmann von Oeder in Oldenburg. Sehen Sie Oederiana.",
	"1. Etwas von WittwenKassen",
	"Betreffend Oeders Abhandlung De irritabilitate.",
	"2. Ein Mehreres von Witwenkassen.",
	"Theorie zu Witwenkassen und Versorgungsanstalten überhaupt",
	"3. Zusatz zu dem Aufsatz von Wittwenkassen im April des D.M.",
	"4. Noch eine Erfahrung zu Prüfung der Witwenkassen.",
	"1. Georg Christian Oeder über die Inokulation der Hornviehseuche.",
	"1.1 Auszug aus Herrn Prof. Tode Geschichte der Einimpfung der Hornviehseuche.",
	"2. G. C. Oeders Bemerkungen über die Geschichte der Einimpfung auf Aunøe.",
	"3. Oeders Abhandlungen über die Inokulation",
	"4. Meine izige Gedanken über die Inokulation der Hornviehseuche.",
	"Aufsatz, eingereicht im Jahre 1772 in Kopenhagen an diejenige Commission, welche ausdrücklich zur Untersuchung der seit dem October 1770 in und mit den Collegiis vorgefallenen Veränderungen angeordnet war. ",
	"Nachricht von hiesiger Landes-Vermessung.",
	"Fortsetzung der Nachricht von hiesiger Landes-Vermessung.",
	"Osnabrückische und Oldenburgische Bevõlkerung.",
	"BERICHT VON MEINER AUSLANDISCHEN REISE IM JAHR 1754-55. ALLERUNTERTHANIGST ABGELEGT, UND VON SCHLESWIG EINGESANDT, DEN 2 APRIL 1755.",
	"Erinnerungen, veranlast durch Hrn. Kritters Aufsätze im Göttingischen Magazin. 3ten Jahrgangs 1sten Stüks S. 19 und 2ten Stücks S. 289. 2c.",
	"Verordnung wegen Erweiterung der Wittwen- und WaisenCasse auf LeibRenten.",
];
let artDk = [
	"Om Banco, Courant og Mønt.",
	"Om Papirpenge.",
	"Tanker over PapirPenge.",
	'Uddrag af "Anordningen for den i Hamburg oprettede Almindelige Forsørgelsesanstalt."',
	"Efterretninger om Handelen i Byen og Stiftet Drontheim i Norge.",
	"Metode til Bestemmelse af Landenes Areal.",
	"Om den Bremiske Enkekasse.",
	"Afhandlinger, vedrørende den i året 1769 foretagne Folketælling i de Kongelige Danske Stater i Europa; af Herr Stiftsamtmand von Oeder i Oldenburg.",
	"Om en by, der skal etableres i Nordlanden Skrevet i juni 1763 og Med noter fra 1791. Se Oederiana.",
	" Appel til det danske publikum af Herr Stiftsamtmand von Oeder i Oldenburg. Se Oederiana.",
	"1. Noget om enkekasser",
	"Angående Oeder’s afhandling De irritabilitate.",
	"2. Noget Mere om Enkekasser.",
	"3. Teori om enkekasser og forsørgelsesanstalter i almindelighed,",
	"4. Tillæg til artiklen om enkerkasser i april måned i dette år i D. M.",
	"Endnu en Erfaring til Prøvelse af Enkekasserne.",
	"1. Georg Christian Oeder om Inokulationen af hornkvægpesten.",
	"1.1 Uddrag af professor Todes historie om indpodningen af kvægpesten.",
	"2. G. C. Oeders Bemærkninger over Historien om Indpodningen paa Aunøe.",
	"3. Oeders afhandlinger om inokulation",
	"4. Mine nuværende tanker om inokulationen mod hornkvægets pest.",
	"Afhandling, indleveret i året 1772 i København til den Kommission, som udtrykkeligt var nedsat til undersøgelse af de forandringer, der siden oktober 1770 var indtruffet i og med kollegierne. ",
	"Beretning om den hersteds Landmåling.",
	"Fortsættelse af meddelelsen om den lokale landopmåling.",
	"Osnabrücks og Oldenburgs befolkning.",
	"Beretning om min udenlandske rejse i året 1754-55. Allerydmygst indsendt og afsendt fra Slesvig, den 2. april 1755.",
	"Erindringer, foranledigede ved Hr. Kritters Afhandlinger i det Göttingiske Magazin, 3die Aargangs 1ste Stykke S. 19 og 2det Stykke S. 289. 2c.",
	"Forordning angående Udvidelsen af Enke- og Barnekassen til Livrenter.",
];
let artEn = [
	"On Banco, Courant, and Coinage.",
	"On Paper Money.",
	"Reflections on Paper Money.",
	'Excerpt from the "Ordinance of the General Relief Institution established in Hamburg. Second Edition, with enlarged and improved Tables. Hamburg, 1779, 30 pages and 30 sheets of tables.',
	"Accounts of the Commerce of the Town and Diocese of Drontheim in Norway.",
	"Method for the Determination of the Area of the Lands.",
	"On the Bremen Widow's Fund, by Mr. Stiftsamtmann Oeder",
	"Essays concerning the census conducted in the year 1769 within the Royal Danish States in Europe; by Mr. Stiftamtmand von Oeder at Oldenburg.",
	"On a City to be Established in the Northern Lands Written in June 1763. See Oederiana.",
	"Appeal to the Danish Public by Herr Stifts-Amtmann von Oeder in Oldenburg. See Oederiana.",
	"1. Something about Widow Funds",
	"Concerning Oeder’s treatise De irritabilitate.",
	"2. Further Considerations on Widow’s Funds.",
	"Theory of Widow Funds and Relief Institutions in General",
	"3. Supplement to the article on widow’s funds from April of this year in D. M.",
	"4. Another Observation for the Examination of Widow’s Funds.",
	"1. Georg Christian Oeder on the Inoculation of the Cattle Plague.",
	"1.1 Excerpt from Prof. Tode's History of the Inoculation of the Cattle Plague.",
	"2. G. C. Oeder’s Remarkson the History of the Inoculationon Aunø.",
	"3. Oeder’s Treatises on Inoculation",
	"4. My present thoughts on the inoculation against the cattle plague.",
	"Treatise, submitted in the year 1772 in Copenhagen to the commission which had been expressly appointed to investigate the changes that had occurred in and with the colleges since October 1770.",
	"Report on the local Land Survey.",
	"Continuation of the report on the local land survey.",
	"Population of Osnabrück and Oldenburg.",
	"Report of My Foreign Journey in the Year 1754-55. Most Humble Submission, and Sent from Schleswig, on the 2nd of April 1755.",
	"Remembrances, occasioned by Mr. Kritter’s essays in the Göttingen Magazine, 3rd year, 1st piece p. 19, and 2nd piece p. 289. 2c.",
	"Ordinance concerning the Extension of the Widows’ and Orphans’ Fund to Life Annuities.",
];

let artFlag = [
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"dk",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
	"de",
];
let artHyperLinks = [
	"https://www.digitale-sammlungen.de/en/view/bsb10725586?page=327",
	"https://www.digitale-sammlungen.de/en/view/bsb10616678?q=oeder&page=379",
	"https://www.digitale-sammlungen.de/en/view/bsb10725589?q=oeder&page=307",
	"https://www.digitale-sammlungen.de/en/view/bsb10616669?q=oeder&page=382",
	"https://www.digitale-sammlungen.de/en/view/bsb10614675?page=132,133&q=oeder",
	"https://www.digitale-sammlungen.de/en/view/bsb10614673?q=%28Deutsches+Museum%29&page=225",
	"https://www.digitale-sammlungen.de/de/view/bsb10033642?q=oeder&page=180",
	"https://www.digitale-sammlungen.de/en/view/bsb10451859?q=oeder&page=15",
	"https://gdz.sub.uni-goettingen.de/id/PPN720564182?tify=%7B%22pages%22%3A%5B73%5D%2C%22pan%22%3A%7B%22x%22%3A0.536%2C%22y%22%3A0.705%7D%2C%22view%22%3A%22toc%22%2C%22zoom%22%3A0.5%7D",
	"https://www.digitale-sammlungen.de/en/view/bsb10616676?q=oeder&page=347",
	"https://www.digitale-sammlungen.de/en/view/bsb10614671?page=36",
	"https://www.kb.dk/e-mat/dod/130020350971.pdf#page=345",
	"https://www.digitale-sammlungen.de/en/view/bsb10614676?q=oeder&page=363",
	"https://www.digitale-sammlungen.de/en/view/bsb10614677?q=%28Deutsches+Museum.+1776%29&page=106,107",
	"https://www.digitale-sammlungen.de/en/view/bsb10614677?q=%28Deutsches+Museum.+1776%29&page=137,138",
	"https://www.digitale-sammlungen.de/en/view/bsb10614678?q=inhalt&page=261",
	"https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum.+1776%29&page=431",
	"https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum.+1776%29&page=433",
	"https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum%29&page=446",
	"https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum%29&page=529",
	"https://www.digitale-sammlungen.de/en/view/bsb10614670?q=%28Deutsches+Museum%29&page=539",
	"https://www.digitale-sammlungen.de/en/view/bsb10451860?q=oeder&page=9",
	"https://ds.ub.uni-bielefeld.de/viewer/image/2085009_001/464/",
	"https://ds.ub.uni-bielefeld.de/viewer/image/2085009_002/488/",
	"https://www.digitale-sammlungen.de/en/view/bsb10614671?q=%28Deutsches+Museum%29&page=89",
	"https://archive.org/details/centaurus_1950-1951_1/page/242/mode/2up",
	"https://www.google.dk/books/edition/G%C3%B6ttingisches_Magazin_der_Wissenschafte/8HRlAAAAcAAJ?hl=da&gbpv=1&dq=%22g%C3%B6ttingischen+magazin%22&pg=PA483&printsec=frontcover",
	"https://www.digitale-sammlungen.de/en/view/bsb10616669?q=oeder&page=44",
];
let artImages = [
	"stats-47-munzen",
	"stats-uberpapir",
	"stats-57-gedank",
	"stats-5-hamburg",
	"trondheim",
	"opmaaling",
	"bremen",
	"1769",
	"nordland",
	"appel",
	"witwencasse-etwas",
	"irrabilitate1",
	"witwencasse-mehreres",
	"witwencasse-teori",
	"witwencasse-teori",
	"witwencasse-erfahrung",
	"inokulation-1",
	"inokulation-1",
	"inokulation-1",
	"inokulation-1",
	"inokulation-1",
	"commission",
	"landes-vermessung1",
	"landes-vermessung2",
	"witwencasse-etwas",
	"botanical",
	"kritters",
	"stats-5-hamburg",
];
var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();

if (path == "links-de") {
	letterLink = lettersDe;
	bioLink = bioDe;
	manuLink = manuDe;
	artLink = artDe;
	referencesLink = referencesDe;
}

if (path == "links-dk") {
	letterLink = lettersDk;
	bioLink = bioDk;
	manuLink = manuDk;
	artLink = artDk;
	referencesLink = referencesDk;
}
if (path == "links-en") {
	letterLink = lettersEn;
	bioLink = bioEn;
	manuLink = manuEn;
	artLink = artEn;
	referencesLink = referencesEn;
}

// let categorynumber = 0;
MakeCards("bio", bioLink, bioFlag, bioImages, bioHyperLinks);
MakeCards("letter", letterLink, letterFlag, letterImages, letterHypertLinks);
MakeCards("manu", manuLink, manuFlag, manuImages, manuHyperLinks);
MakeCards("art", artLink, artFlag, artImages, artHyperLinks);
MakeCards(
	"ref",
	referencesLink,
	referencesFlag,
	referencesImages,
	referencesHyperLinks
);

function MakeCards(category, links, flag, Img, hyperLinks) {
	// let linkscontainer = document.createElement("div");
	// linkscontainer.id=category;
	// linkscontainer.class="card-container";
	// document.getElementById("article").appendChild(linkscontainer);

	//     let cardcat = document.createElement("div");
	// cardcat.id="card-cat";
	// cardcat.class="card-cat";
	// document.getElementById(category).appendChild(cardcat);

	//     let cardelement = document.createElement("div");
	// cardelement.class="cat" + categorynumber;
	// categorynumber++;
	// document.getElementById("card-cat").appendChild(cardelement);

	for (let i = 0; i < links.length; i++) {
		let linksDiv = document.createElement("div");
		linksDiv.setAttribute("id", category + "card" + i);
		linksDiv.setAttribute("class", "card");
		document.getElementById(category).appendChild(linksDiv);

		let linksa = document.createElement("a");
		linksa.setAttribute("id", category + "href" + i);
		linksa.setAttribute("href", hyperLinks[i]);
		linksa.setAttribute("target", "_blank");
		document.getElementById(category + "card" + i).appendChild(linksa);

		let linksflagImg = document.createElement("img");
		linksflagImg.setAttribute("class", "flag");
		linksflagImg.setAttribute("src", "./img/buttons/" + flag[i] + ".png");
		document.getElementById(category + "href" + i).append(linksflagImg);

		let linksImg = document.createElement("img");
		linksImg.setAttribute("class", "card-img");
		linksImg.setAttribute("src", "./img/covers/" + Img[i] + ".png");
		// linksImg.setAttribute("src", "./img/covers/"  + "175.png");

		document.getElementById(category + "href" + i).append(linksImg);

		let linksP = document.createElement("p");
		linksP.setAttribute("id", category + "p" + "i");
		linksP.innerHTML = links[i];
		document.getElementById(category + "href" + i).append(linksP);
	}
}

// SetLetterCheContent(chapter, content);
SetFlora();
// function SetLinkAndImgToFrontpage(link, img) {
//   document.getElementById("link").setAttribute("href", link);
//   document.getElementById("imgind").setAttribute("src", img);
// }
let catDe = ["Biographie", "Manuskripte", "Artiklen", "Briefe", "Referenzen"];
let catEn = ["Biography", "Manuscripts", "Articles", "Letters", "References"];
let catDk = ["Biografi", "Manuskripter", "Artikler", "Breve", "Referencer"];
SetCatgory("links-en", catEn);
SetCatgory("links-dk", catDk);
SetCatgory("links-de", catDe);

function SetCatgory(page, catLang) {
	if (path == page) {
		for (let i = 0; i < catLang.length; i++) {
			document.getElementById("cat" + i).innerText = catLang[i];
		}
	}
}
