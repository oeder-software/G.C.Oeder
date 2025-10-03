let ContentDanish = [];
let ContentEnglish = [];

let ContentGerman = [];

let chapter = [];
let latinname = [
	"TAB I. Chamæmorus Norvagica. Cluf. Hift. 119. med et Udtog af Henric Højers Brev om denne Plantes Brug og Nedsyltning hos de Norske. Er den samme som Chamæmorus anglicana. Ej. 1. c. 118.<br>Chamærubus foliis Ribes. C. B. P. 480. Chamæmorus Norvagica. S. Paul. Fl. 339. n. 189. Barthol. med. dan. 106. Pontopp. H. N. N. I. 215. c. fig.<br>Chamæmorus Raj. Syn. III. 260. Hift. 654. <br>Rubus Chamamorus, foliis fimplicibus lobatis , caule unifloro. Linn. S. N.fl. lapp. 208. t. V.fl.fu. 449.",
	"TAB II. Pedicularis, lapponica , caule fimplici , foliis pinnatifidis ferratis , calycibus bifidis obtufis. Linn, S. N.fl. lapp. 242. t. IV. f. 1. fl. fvec. 1. 507. II. 534. ",
	"TAB III. Campanula ferpyllifolia. C. B. P. 93. prodr. 35. J. B. II. 816. Scheuchz. It. 131.454. <br>Nummularia Norvagica. Kylling. Act. Hafn. II. 346. obf. 130. f. C. <br>Nummularia ſylveftris repens flore albo. Pontopp. H. N. N. I. 193 . <br>Serpillifolia. Buxb. Aft. Petrop. II. 346. <br>Linnæa , auctore Gronovio. Linn. gen. 692. Hall. Helv. 608. <br>Linnæa borealis. Linn. S. N.fl. lapp. 250. t. 12. f. 4.fl. v. 562. Kalm. It. II. 263 . ",
	"TAB IV. Alfine alpina glabra. C. B. P. 251. Prodr. 118.3 . J. B. III. 360. <br>Silene , rupestris , floribus erectis , petalis emarginatis , calycibus teretibus , foliis lanceolatis. Linn. S. N. It. Weftg. 144. ",
	"TAB V. Chamæpericlymenum prutenicum. Cluf. pann. 88. &Ej. Ch. tenerius aliud ab HenricoHojero acceptum Hift. 60. Ch. tertium minus , TABernam. Hift. II. 583 . <br>Periclymenum humile Norvegicum. C. B. P. 302. Kyll. vir. 781.782. Pontopp. H. N. N. I. 194.<br> Chamæpericlymenum Raj. Syn. III. 261 . <br>Cornus pumila herbacea , chamæpericlymenum dicta. Dill. Elth. 108. t. 91 . <br>Cornus , fuecica , herbacea, ramis binis. Linn. S. N. fl. lapp. 65. t. 5. f. 3 . ",
	"TAB VI. Caryophyllus holoſteus alpinus latifolius. C. B. P. 210. Prodr. 104. <br>Alfines myofotis facie Lychnis alpina flore amplo niveo repens. Raj. Syn. III. 349. t. 15. f. 2. <br>Cerastium , alpinum , foliis ovato lanceolatis , caule diviſo, capfulis oblongis. Linn. S. N. ",
	"TAB VII. Alfine verna Androfaces capitulis. C. B. P. 251. 15. item 16. 17. Prodr. 118.5.6. <br>Androface montana flore minore. Buxb. Act. Petrop. II. 369. t. 23. f. 2 . Linn. S. N. fl. fu. 170. Androface coronopi foliis &c. Amm. rhut. n. 22. <br>Androface , feptentrionalis , foliis lanceolatis dentatis glabris , perianthiis angulatis , corolla brevioribus. ",
	"TAB VIII. Pyrola IIII. Chuf. pann. 508.509. Ej. IIII. minima Hift. CXVIIІ. <br>Pyrola rotundifolia minor. C. B. P. 191. minima alpina J. B. III. 536. <br>Pyrola minima. Aichſt. vern. VI. t. 12.f. 2. <br>Pyrola flore fingulari. Riv. pent. 139. <br>Pirola ſcapo unifloro. Hall. Helv. 420. Goett. 166. <br>Pyrola , uniflora , ſcapo unifloro. Linn. S. N.fl. lapp. 167. fl. fv. 364. ",
	"TAB IX.Chamæciſtus VII. Chus. Hift. 75. Ej. anonymos pann. 57. <br>Chamæciſtus ferpyllifolia floribus carneis. C. B. P. 466. <br>Chamærhododendros ferruginea ſupina, thymi folio , alpina. Bocc. mus. 64. t. 53. <br>Azalea , procumbens , ramis diffuſo procumbentibus. Linn. S. N.fl. lapp. 90. t. 6. f. 2. Hall.Helv. 416. ",
	"ТАВ Х. Andromeda, hypnoides , pedunculis folitariis terminalibus, corollis campanulatis , foliis confertis ſubulatis. Linn. S. N.fl. lapp. 165. t. 1.f. 3 .",
	"TAB. ΧΙ. Thalictrum montanum minimum præcox foliis ſplendentibus. Moris. Hift. III. 325. S. 9. t. 20.f. 14. <br>Thalictrum , alpinum , caule fimpliciſſimo ſubnudo , racemo fimplici terminali. Linn. S. N. ",
	"TAB. XII. <br>Sagina ramis erectis bifloris. Linn. fl. lapp. 158. <br>Moehringia ſcapis bifloris. Linn.fl.fv. I. 316. Amoen. Ac. II. 264. <br>Stellaria , biflora , foliis fubulatis , ſcapis ſubbifloris , petalis emarginatis , germinibus oblongis , calycibus ſtriatis. Linn. S. N. fl. fv. II. 395.",
	"TAB. XIII. Biſtorta alpina media &minor. C. B. P. 192. 4. 5. XIII. <br>Biſtorta montana minor, radice intorta inodora , flofculis in ſpicæ cacumine albis ſterilibus , inferna ſpicæ parte tuberculis proliferis turbinatis puniceis fœcunda. Amm. rhut. 243. <br>Biſtorta , foliis ad oram nervoſis , imis ovalibus , fuperioribus linearibus , ſemine gigartino. Hall. Helv. 179. opusc. bot. 234. Conf. Tournef. Inft. t. 291. G. H. J. Spica vivipara <br>Biſtorta officinalis. <br>Polygonum , viviparum , caule fimpliſſimo monoſtachyo , foliis lanceolatis. Linn. S. N. fl. lapp. 152. fl. fv. 340.",
	"TAB XIV. Acetoſa rotundifolia alpina. C. B. P. 114. Prodr. 55. <br>Acetoſa rotundifolia repens eboracenfis , folio in medio deliquium patiente. Moris. Hist. II. 583. S. 5. t. 36. f. antepenult. Plukn. t. 252.f. 2. Raj. Syn. III. 143. 14. <br>Acetoſa britannica rotundifolia frustu compreſſo, Blair. mist. obf. t. 67. <br>Lapatum acetofum , androgynum, folio orbiculari emarginato. Hall. Helv. 170. <br>Rumex, digynus , floribus hermaphroditis digynis. Linn. S. N.fl. fv. 317.",
	"TAB. XV. <br>Alga ad mare. Gefn. op. T. I. 120. T. I. f. VII. <br>Alga angustifolia vitriariorum. C. B. P. 364. <br>Fucus S. Alga marina graminea angustifolia feminifera ramofior. Raj. Syn. III. 52. n. 3. <br>Ruppia foliis linearibus obtufis. Moehring. Phil. Tr. n. 454. p. 217. <br>Zoſtera marina. Linn. S. N. It. Weftg. 166. t. 4.f. 2-5 .",
	"TAB. XVI. <br>Teucrium etſcherianum. Cluf.pann. 616. Sextum pumilum. Hift. 350. <br>Veronica quædam foliis glabris. Scheuchz. It. 342. &petræa Sempervirens , ib. 428. <br>Veronica minor alpina ferpylli folio. Pon. bald. t. 337. <br>Veronica alpina bugulæ facie calyce villofo. Hall. Comm. nor. 1732.300. Helv. 531. 10. t. 12.f. 2. Veronica , alpina , corymbo terminali , foliis oppofitis , calycibus hifpidis. Linn. S. N.fl. lapp. 7. t. 9.f. 4. ",
	"TAB. XVII. <br>Gentiana XI. Cluf. pann. 291. fugax quinta Hift. 315. 316. <br>Gentiana humillima, caule ramoſo , tubo floris longiffimo. Hall. Helv. 475. t. VII. <br>Gentiana , nivalis , corollis quinquefidis infundibuliformibus, ramis unifloris alternis. Linn. S. N. fl. lapp. 204.",
	"TAB XVIII:<br>Figuren med enkelte Blade.  <br>Lunaria racemoſa minor vel vulgaris. C. B. P. 354. Lunaria racemoſa &botrytis plerorumque antiquo- rum auctorum. Blakiv. t. 420. S. Paul. fl. 79. n. 67. Kyll. vir. 603. <br>Osmunda , lunaria, ſcapo caulino ſolitario , fronde pinnata folitaria. Linn. S. N. fp. pl. 1064. n. 2. Hall. Helv. 180. Figuren med sammensatte Blade. <br>den middelste  Lunaria racemoſa multifido folio. C. B. P. 354.3.4. Breyn. Cent. t. 95.  <br>den tredie til Siden  Lunaria racemoſa minor adianthi folio. Breyn. 1. c. t. 93.",
	"ΤΑΒ. ΧΙΧ. <br>Ranunculus montanus purpureus calyce villofo Felicis Platerii. F. B. III. 846. Scheuchz. It. 139. t. 20. f. 1. <br>Ranunculus caule multifloro , calyce floris albi villofo. Hall. Helv. 326. <br>Ranunculus primus. Martens Spizb. 43. t. 1. f. D. <br>Ranunculus ,glacialis , calycibus hirfutis , caule bifloro, foliis multifidis. Linn. S. N.fl. lapp. 233. t. 3.f. 1. ",
	"TAB. XX. <br>Plantula Cardamines æmula. Clus. pann. t. 458. &defc. 459. cum nomine Sinapi pumilum alpinum. <br>Cardamine pumila bellidis folio alpina. Raj. Syn. III. 300. <br>Cardamine, bellidifolia , foliis fimplicibus ovatis integerrimis , petiolis longis. Linn. S. N. fl. lapp. 260. t. 9. f. 2. ",
	"TAB. XXI.<br>Caryophyllus pumilus alpinus VII. Chuf. pann. 324. C.B.P. 206. 4. Dill, Elth. 206. t. 165.f. 206. Hall. Helv. 375. <br>Lychnis alpina pumila folio gramineo. <br>Silene acaulis. Linn. fl. lapp. 184. <br>Cucubalus , acaulis , Linn. S. N. ",
	"TAB. XXII. <br>Saxifraga , cernua , foliis caulinis palmaris petiolatis , caule fimpliciſſimo unifloro bulbifero. Linn. S, N.fl. lapp. 172. t. 2.f. 4.fl.fv. 373. ",
	"TAB. XXIII. <br>Sedulum alpinum quartum. Gefn. Schmied. Hift.fafc. 1. n. 36. t. VI. <br>Sedum montanum hirfutum , mucronato &dentato folio, flore albo guttato. Moris. Hift. III. 478. S. 12. t. 9.f. 13. <br>Sanicula myofotis floribus albicantibus fere umbellatis. Plukn. t. 58. f. 2. &. t. 222. f. 4. <br>Saxifraga foliorum hirfutorum latiore apice dentato , caule nudo ſpicato. Hall. Helv. 400. <br>Saxifraga, ſtellaris , foliis ferratis , caule nudo ramoſo, petalis acuminatis. Linn. S. N. ",
	"TAB. XXIV. <br>Sedum paluſtre II. Cluf. pann. 486. t. 487. Hift. LIX. <br>Sedum paluftre flore incarnato. Aichft. aft. XIII. t. 5.f. 2. <br>Sedum paluſtre ſubhirfutum purpureum. C. B. P. 285. 1 . <br>Sedum purpureum pratenſe. Raj. Syn. III. 270. 4. <br>Sedum foliis planioribus ellipticis , petiolis ſubhirſutis , in ſummo caule congeftis. Hall. Helv. 397.<br>Sedum , villofum , caule erecto , foliis planiufculis pedunculisque ſubpilofis. Linn. S. N. Sp. pl. 15.",
	"TAB. XXV. <br>Echium marinum. Raj. Syn. III. 288. 4. Sibbald, Scot, P. II. L. I. p. 55. t. 12. <br>Cynogloſſum procumbens glaucophyllum maritimum. Plukn. Alm. 126. t. 172. f. 3. <br>Cynogloſſum perenne maritimum procumbens. Dill. Etth. 75. t. 65. f. 75 . <br>Pulmonaria , maritima , calycibus abbreviatis , foliis ovatis , caule ramoſo procumbente. Linn. S. N.fp.pl. 5. ",
	"TAB. XXVI. <br>Pedicularis alpina folio Ceterach. Helv. fl. 39. t. 39. <br>Sceptrum Carolinum. Rudbeck. It. dedic. <br>Pedicularis , fceptrum carolinum , caule fimplici , floribus terno verticillatis , corollis claufis , calycibus crena- tis , capfulis regularibus. Linn. S. N.fl. lapp. 243. t. 4.f. 4. ",
	"TAB. XXVII. <br>Hieracii minoris ſpecie Broccenbergo peculiaris. Thal. herc. 57. <br>Hieracium pumilum II. Colum. Ecphr. II. 29. t. 30. <br>Hieracium villofum alpinum , flore magno fingulari. Raj. Syn. III. 169. t. 6. f. 2. <br>Hieracium caule unifloro , calyce & ellipticis foliis longo villo barbatis. Hall. Helv. 744.8. Hieracium , alpinum , foliis oblongis integris dentatis ſcapo nudo unifloro , calyce piloſo. Linn. S. N. ",
	"TAB. XXVIII. <br>Sedulum tertium. Gefn. Schmied. Hift. fafc. I. n. 35. t. XI. <br>Sempervivum minus dentatum. Mart. Spizb.43.t. F.f. A. <br>Saxifraga foliis oblongo rotundis dentatis , floribus compactis. Raj. Syn. III. 345. t. XVI. f. 1. Saxifraga , nivalis , foliis obovatis crenatis ſubſeſſilibus , caule nudo , floribus congeftis. Linn. S. N.fl. lapp. t. 2. f. 5. 6.",
	"TAB. XXIX. <br>Pulſatillæ ſpecies ex Valleſia. Gefn. op. T. 1. p. 122. t. XVI. f. CXXXVIII, IIII, <br>Pulſatilla lutea apii hortenſis folio. C. B. P. 177. <br>Anemone tubis caudatis , radicalibus foliis rariter pinnatis , pinnis latis incifis , caulinis anguftiffimis, Hall. Helv. 332. t. 6. <br>Anemone, vernalis , pedunculo involucrato , foliis pinnatis , flore erecto, Linn. S. N.",
	"ТАВ. XXX. <br>Pedicularis alpina folio Ceterach. C. B. P. Scheuchz. It. 426. ſpecies prior. <br>Pedicularis caule erecto non ramoſo , pinnis foliorum retroverfis imbricatis. Hall. Helv. 622. 6. t. 16. f. 3 . <br>Pedicularis , flammea, caule fimplici , foliis pinnatis retro imbricatis, Linn. S. N. fl. lapp. 244. t. 4. f. 2.",
	"ТАB. XXXI. <br>Leucas chamædrys alpina quibusdam. Gefn. op. T. I. t. 3. f. 20. <br>Chamædrys alpina cifti flore. Cluf. pann. 610. t. 611. Hift. 357. C. B. P. 248. 5. <br>Chamædrys montana durior. Lob. ic. 495 . <br>Caryophyllata alpina chamædryos folio. Moris. Hift. II. 432. S. 4. t. 26. f. 9. Scheuchz. It. 332. 511. Dryas, octopetala , foliis fimplicibus. Linn. S. N. Hall. Helv. 335. Raj. Syn. III. 253. ",
	"TAB. XXXII. <br>Fragariæ ſylveftri adfinis planta flore luteo. Sibbald. Scot. P. II. p. 25. med. t. 6.f. 1. <br>Pentaphylloides fruticofum minimum procumbens , flore luteo , foliis fericeis fragariæ ternis, Plukn, alm t. 212. f. 3. <br>Pentaphylloides pumila foliis ternis ad extremitates trifidis. Raj. Syn. III. 256. <br>Sibbaldia , procumbens, foliolis tridentatis. Linn. S. N. Hall. Helv. 341.",
	"TAB. XXXIII. <br>Uva Urfi, Chuf. Hift. 63. Lob. It. 366. Tournef. Inft. 599. t. 370. <br>Arbutus , uva urfi, caulibus procumbentibus , foliis integerrimis. Linn. S. N.fl. lapp. 162. t. 6. f. 3. fl.fu. 358. Hall. Helv. 415: 2. Goett. 164.",
	"TAB. XXXIV. <br>Sedulis alpinis cognata, Gefn. Schmied. Hift. Fafc. I. n. 32. Т. IX. <br>Sedum alpinum ericoides, C. B. P. 216. 16. 17. purpurafcens & coeruleum. Prodr. 132. Scheuchz. It. 140. t. 20. f. 2. 341.518 Raj. Syn. III. 353. Hall. Helv. 403. n. 11 . <br>Planta ſedo adfinis faxatili fimilis. Mart. Spizb. 46. t. F. f. C. <br>Saxifraga , oppofitifolia , foliis caulinis ovatis oppofitis imbricatis, fummis ciliatis, Linn, S. N.fl. lapp. 179. t. 2.f. I.",
	"TAB. XXXV. <br>Graminifolia aquatica Thlaſpeos capitulis rotundis , ſepto medio filiquam dirimente. Plukn, alm. 180. t. 188. f. 5 . <br>Subularia erecta junci foliis acutis mollibus. Raj. Syn. III. 307. <br>Alyſſum paluſtre folio junci. Buxb. Act. Petrop. II. 369. t. 23.f. I. <br>Subularia, aquatica. Linn. S. N. fl. v. 566.",
	"TAB. XXXVI. <br>Pfeudoaſphodelus pumilus foliis Iridis. Clif. pann. 262. Hift. 198. <br>Pfeudoaſphodelus alpinus. C. B. P. 29. Х. <br>Phalangium ſcoticum paluſtre minimum, iridis folio. Tournef. Inft. Raj. Syn. III. 375. <br>Afphodeliris Moehring. Hort. priv. <br>Anthericum , calyculatum , foliis enfiformibus , perianthiis trilobis , filamentis glabris. Linn. S. N.fl. lapp. t. 10. f. 3. fl. fv. 288. Gmel. Sib. I. 73. t. 18.f. 2.",
	"TAB. XXXVII.<br>Carduus mollior lapathi folio. Chef. Hift. CLI. XXXVII. <br>Carduo cirfium minus cambrobritannicum, floribus plurimis ſummo caule congeftis. Plukn, alm. 83. t. 154.f.3. <br>Cirfium foliis triangularibus lunate dentatis , fubtus tomentofis , capitulis inermibus, in ſpicam congeftis, Hall. Helv. 683. t. 22. <br>Cirsium inerme foliis ex ovato lanceolatis denticulatis lanugine candidis, Gmel. Sib. II. 67. t. 26. Serratula , alpina, calycibus fubhirfutis ovatis. Linn. S. N.fl. lapp. 291.fl. fv. 714.",
	"TAB. XXXVIII. <br>Erica Coris folio 6. Clus. Hist. 47.<br>Erica humilis cortice cinereo , arbuti flore. C.В.Р. 486. <br>Erica foliis linearibus ternis , floribus globofo oblongis laxe ſpicatis. Guettardflamp. 2. p. 110. Erica , cinerca , antheris bicornibus inclufis , corollis ovatis racemofis , foliis ternis glabris linearibus. Linu S. N. Loefl. It. 10. 137 . ",
	"TAB. XXXIX. <br>Anonymos. Gefn. op. T. I. p. 122. t. XIII. f. CXVII. <br>Gladiolus ſtagnalis Dortmanni, Chis. Cur. poft. 40. Raj. Syn. III. p. 287.<br>Leucoium paluſtre flore ſubcoeruleo. C. B. P. 202. <br>Lobelia , Dortmanna , foliis linearibus bilocularibus integerrimis , caule ſubnudo. Linn. S. N. fl. v. 783 . ",
	"TAB. XL. <br>Vitis-idaea altera (bucci foliis nec deciduis, bacciſque rubris.) Cluf. pann. 77. t. 79. <br>Vaccinia rubra. Dodon. Hist. 770. <br>Vitis idaea foliis fubrotundis non crenatis , baccis rubris. C. B. P. 470. Tournef. Inft. Raj. Hift. 1488. Kylling Virid. 1090. <br>Tyltebær. Pontopp. H. N. N. I. 214. c. fig. <br>Vaccinium , vitis idaea , racemis terminalibus nutantibus, foliis obovatis revolutis integerrimis fubtus punEtatis. Linn. S. N. fl. v. 334. Hall. Helv. 414. 1. Goett. 163. Rupp. Jen. Hall. 52. ",
	"TAB. XLI. <br>Papaver erraticum nudicaule flore flavo odorato. Dill. Elth. 302. t. 224.f. 291. <br>Papaver erraticum luteo flore , capite oblongo hifpido. Amm. rhut. 61 n. 81 . <br>Papaver , nudicaule, capfula hifpida, ſcapo unifloro hifpido , foliis fimplicibus pinnato finuatis. Linn. S. N.fp. pl. 4. Hall. Goet. 88.",
	"TAB. XLII . Aſphodelus luteus palustris. Dod. pemt. 208. Kyll. vir. 86. 4 <br>Gramen offifragum. Barthol. Act. Hafn. II. p. 126. obf. 43. c. fig. p. 232. IV. p. 99. S. Paul. Quadrip. 529-535 . Pontopp. H. N. N. I. 204-207. t. 9. <br>Narthecium Moehring. Eph. Nat. Cur. 1742. p. 384-400. t. 5.f. I. <br>Anthericum , offifragum , foliis enſiformibus , filamentis lanatis. Linn. S. N. ",
	"TAB. XLIII. <rb>Pediculariæ genus montanum ex Bokkemato monte, Gefn. op. T. I. t. 6.f. 51. <rb>Clinopodium alpinum. Pona bald. 343. J. B. III. 289. 6. 64. C. B. P. 225. 5. Plukn. t. 163. f. 5. Teucrium alpinum coma purpurocoerulea. C. B. P. 247. <rb>Euphrafia rubra Weſtmorlandica , foliis brevibus obtufis. Raj. Syn. III. 285. 3. <rb>Stæhelina, Hall. Helv. 624. <rb>Bartſia , alpina , foliis oppofitis cordatis obtuſe ſerratis. Linn. S. N.",
	"TAB. XLIV. <br>Muſcus capillaceus aphyllus , capitulo craſſo bivalvi. Buxb. Cent. 2. p. 8. t. 4. f. 2. Dill. misc. 477. Buxbaumia. Hall. Helv. 10. t. 68. f. 5 . <br>Buxbaumia aphylla. Linn. S. N. fl. fv. 1293. Amoen.ac. V. 78. t. 1. Schmiedel propria differtatione. ",
	"TAB. XLV. <br>Blaſia pufilla lichenis pyxidati facie. Mich. Gen. 14. t. 7. <br>Mnium lichenis facie. Dill. musc. 237. t. 31.f. 7. <br>Blafia pufilla. Linn. S. N. ",
	"TAB. XLVI. <br>Viola montana I. Clus. Hift. 309.<br>Viola alpina rotundifolia lutea. C. B. P. 199. Gefn. op. T. I. t. 8.f. 70. A. Plukn. t. 233. f. 7. <br>Viola flore luteo. Riv. pentap. t. 120. <br>Viola foliis reniformibus , caulibus foliofis floriferis. Hall. Helv. 502. <br>Viola , biflora , caule bifloro , foliis reniformibus ferratis. Linn. S. N. ",
	"TAB. XLVII. Diapenfia , lapponica , floribus pedunculatis. Linn. S. N.fl. lapp. 88. t. 1. f. I.",
	"TAB. XLVIII. Galium , trifidum , foliis quaternis linearibus , caule procumbente ſcabro , corollis trifidis. Linn. S. N. fp, pl. 4. p. 105. ",
	"TAB. XLIX, <br>Tormentilla alpina folio ſericeo. С. В. Р. 326. <br>Alchimilla alpina pentaphyllos. Raj. Syn. III. 157. <br>Alchemilla , alpina , foliis digitatis ferratis. Linn. S. N. Hall. Helv. 185. 2. ",
	"TAB. L. <br>Gentiana major flore purpureo, Chef. pann. 277. t. 278. Hift. 312. C. B. P. 187. <br>Gentiana foliis imis petiolatis ellipticis , floribus campaniformibus verticillatis. Hall. Helv. 478. 12. <br>Gentiana , purpurea , corollis quinquefidis campaniformibus verticillatis , calycibus ſubſpathaceis. Linn. S. N.",
	"TAB. LI. <br>Aſtragalus alpinus , foliis viciæ , ramoſus & procumbens , flore glomerato oblongo & coeruleo. Scheuchz, It. 509. f. 7. Hall. Helv. 598. 10. <br>Aftragalus , alpinus, fubcaulefcens procumbens, floribus pendulis racemofis , leguminibus utrinque acutis pilofis. Linn. S. N.fl. lapp. 267. t. 9.f. 1.",
	"ТAB. LII.<br>Veronica ſpicata minor, C. B. P. 247. <br>Veronica foliis obtufis , caule non ramofo, ſpica nuda terminato. Hall. Helv. 531. <br>Veronica , fpicata , ſpica terminali , foliis oppofitis crenatis obtufis , caule adfcendente fimpliciſſimo, Linn. S. N. ",
	"TAB. LIII. <br>Boletus eſculentus rugofus albicans , quaſi fuligine infectus. Tournef. Inft. 561. t. 329. f. A. <br>Boletus eſculentus rugofus. Mich. Gen. t. 85. f. 2. Hall. Helv. 24. п. 3 . <br>Fungus porofus in longitudinem metæ inſtar excrefcens. C. B. P. 370. <br>Phallus; capitulo faſtigiato , fubtus operculato , petiolo nudo. Gleditsch Fung. 59. 4. <br>Phallus , esculentus , pileo ovato ſtipite nudo rugofo. Linn. S. N. ",
	"TAB. LIV. <br>Vitis idræ adfinis polifolia montana. J. B. L. 527. <br>Erica humilis , roſmarini foliis , unedonis flore , capfula ciſtoide. Plukn. t. 175. f. 1. <br>Ledum paluſtre noſtras arbuti flore. Raj. Syn. III. 472. <br>Polifolia. Buxb. act. Petrop. II. 345. Cent. V. 28. t. 55. f. 1 . <br>Andromeda, polifolia , pedunculis aggregatis , corollis ovatis , foliis alternis lanceolatis revolutis. Linn. S. N.fl. lapp. t. 1. f. 3. Hall. Helv. 416. 1. Goett. 164. ",
	"TAB. LV. <br>Pyrola minor. Riv. pentap. t. 136. Raj. Syn. III. 363. <br>Pirola racemoſa ſtaminibus &piſtillo rectis. Hall, Helv. 420. Goett. 165. <br>Pyrola , minor , floribus racemofis diſperſis , ſtaminibus piſtillisque re&is. ",
	"TAB. LVI. Phyllon Dalechampii. Gefn. op. T. I. p. 122. t. XIII. f. CXII.<br>Sedum petræum montanum. Lob. adv. 163. ic. 381. Alpinum VI. Chuf. pann. 491. <br>Leucoium luteum aizoides montanum. Col. ecphr. II. 62. <br>Sedum alpinum hirfutum luteum. C. B. P. 284. <br>Alyſſon alpinum hirfutum luteum. Tournef. Inft. Scheuchz. It. 509. t. 12. f. 8. <br>Draba, alpina , ſcapo nudo fimplici, foliis lanceolatis integerrimis. Linn. S. N. Hall. Helv. 539. 3. ",
	"ТАВ. LVII. <br>Erica rarior Norvegica. Burfer. Linn. Amoen. ac. I. 332. <br>Erica folio abietis , flore arbuti. Buxb. Cent. IV.p. 26. f. 43. <br>Andromeda , coerulea , pedunculis aggregatis , corollis ovatis foliis ſparſis linearibus obtufis planis, Linn. S. N. fl. lapp. 164. t. 1. f. 5. , ",
	"TAB. LVIII. <br>Vicia montana minima flofculo purpureo. Burfer. Linn. Amoen. ac. I. 328. <br>Vicia montana omnium minima. Kyll. vir. 1069. <br>Vicia , lathyroides , leguminibus ſeſſilibus folitariis erectis glabris , foliolis ſenis , inferioribus obcordatis. Linn. S. N. fp. pl. 11. ",
	"TAB. LIX.<br>Sedum minus a rupe S. Vincentii. Raj. Syn. III. 270. LIX. <br>Sedum rupeſtre repens foliis compreſſis. Dill.Elth. 343. t. 256. f. 333. <br>Sedum , rupestre , foliis ſubulatis quinquefariam confertis bafi membranacea ſoluta , floribus cymoſis, Linn. S. N. fl. fv. 401. ",
	"TAB. LX. <br>Filix arborea. Tragi 537. Filix faxatilis corniculata. C. B. P. 358. Tournef. Inft. Rupp. Jen. Hall. 345. <br>Acroſtichon , feptentrionale , fronde nuda lineari laciniata. Linn. S. N. Hall. Helv. 134. Goett. 2. ",
];
let infodk = [
	"Landets Navn. Overalt i Norge Multebær , saavel som i Dannemark og Tydskland. <bR><bR> Steden. Allevegne i Norge i stor Mængde paa Fieldene og Field-Siderne , i Moser eller Myrer , som udtørres om Sommeren.",
	"Steden. Paa adskillige Steder til Fields i Norge , blant Gruus og Steen.",
	"Landets navn. I Norge Marisle , i det søndenfielske Nummedal Norrissle-Græs. Paa Sundmør Norretle-Græs. Ström. <br><br></br>Steden. Overalt i Norge paa mossede skyggefulde Steder",
	"Steden. Ved Christiania og Kongsberg paa vindaabne Høie og Bakker.",
	"Landers Navn. Almindeligen i Norge Skrubbær , som Clufius allerede vidste , men i Christianssands Stift Hønsebær , som og findes hos Kylling. <br><br>Steden. Allevegne i hele Norge , i Skove og Krat ; Samt i Dannemark paa Møen. Kylling.",
	"Steden. Meget rar, i Lundene ved Field Siderne , saasom Skremsfield ved Kongsberg, Opdal i det søndenfieldske Nummedal.",
	"Steden. Paa de vindaabne Hoie og Bakker ved Christiania , især paa Holmene ved Havnen.",
	"Landets navn. Paa Sandsverd ved Kongsberg, Øineblomster. <br><br>Steden. Paa adskillige Steder i tykke Skove , i Mængde ved Kongsberg og ved Støren i Trundhiems Stift paa Veten til Opdal.",
	"Landets Navn. I det søndenfielske Nummedal Søgnbrisk. <br><br>Steden. I stor Mængde paa næsten alle Fieldmarker i Norge, hvilke den i lang Strækning beklæder.",
	"Steden. Her og der paa Toppene af de norske Fielde , og paa sandige Steder mellem dem , saasom Eisfield i det søndenfieldske Nummedal, lige over for Gaarden Bravik. ",
	"<br>Steden. Paa adskillige Steder paa de norske Fielde , ved Kildevæld , Bækker og Sildre-Steder af Klipperne , saasom ved Præstesætter i Slidre Valders, ved Fieldstuen Kongsvold paa Dovres field . I Nordlandene endog paa vaade Enge ved Havkanten, som Søevigen paa Den Alsten i Helgeland.",
	"<br>Steden. Her og der , men kun i liden Mængde paa de norske Fielde , mellem det smaa Græs, saasom tæt ved Fogstuen paa Dovrefield.",
	"<br>Landers Navn. I Norge, i Walders Fieldrug , paa Lister Stor-Veigræs. Paa Sundmøer Perlegræs. Ström. <br>Steden. Overalt i Norge , paa skarpe tørre Udmarker.",
	"<br>Landets navn. Paa Sundmøer Biergſyre. Ström. <br>Steden. Almindelig paa de norske Fielde , ved Bækker og Kildevæld.",
	"<br>Landets navn. I Dannemark og Norge det almindelige og flere Søevæxter fælles Navn Tang, men paa Lister i Christiansands Stift det særdeles Navn Malløeg, paa Sundmøer Marhalm. Ström. <br>Steden. Den voxer paa Havets Bund , og i stor Mængde opkastes ved Strandbrædden , men i stille Viger og Havbugter udgiør den som en Eng ned i Søen, saasom i Blindeleye mellem Christiansand og Arendal , ved Grømstad , ved Udsteen-Kloster i Stavanger-Amt ; I Grönnesund mellem Samnefiord paa Møen , og Stubbekisbing paa Falster.",
	"<br>Steden. Her og der paa de norske Fielde , hvor meget Græs er , saasom paa Eisfield ved Bravick i Det søndenfieldske Nummedal ; samt ved Præstesætter i Slidre i Walders.",
	"<br>Steden. Paa adskillige Steder paa Udmarkene i de norske Fielde, saasom: paa Slidre i Walders , paa den høire Side af Præstegaarden , mangfoldig i Ranen i Nordlandene , især paa Bierget Grønfield i Sødre-Ranen , tilligemed Lycopodium Selaginoides og Osmunda lunaria.",
	"<br>Landets navn. Hos Kylling , Maane-Rude. <br>Steden. Her og der i Norge_paa tørre Udmarker i Fieldene , samt i Dannemark efter S. Paulis og Kyllings Beretning. Den Udart med sammensatte Blade har jeg fundet ved Slidre i Walders, iblant den Almindelige , som har enkelte Blade , hvilken er der i stor Mængde.",
	"<br>Landets Navn. I Norge hos Beboerne af Fieldstuen Maristue paa Fillefield , Reenſoleje. <br>Steden. I stor Mængde i Norge allevegne paa de høieste Toppe af Fieldene , tæt ved hvor den stedse varende Snee ligger, og er tilligemed den safranrøde Steenmosse næsten den sidste Indbygger i Den øvre Luft-Kreds. I størst Mængde paa Søndenfield ikke langt fra Præstesætter i Slidre samt paa Sulutinde den hoieste Fieldtop af Fillefield .",
	"<br>Steden. Rar, paa de norske Fielde ved smaa Bække , saasom ved Præstesetter i Slidre i Walders.",
	"Steden. Meget almindelig paa Aasen af de norske Fielde , hvor den udgior lange Strækninger ; I Nordlandene flytter den sig med andre Fieldvæfter ned paa Bakkerne ved Havet.",
	"Steden. Almindelig paa de norske Fielde ved smaa Bække og paa steenagtige fugtige Steder.",
	"Steden. Almindelig paa de norske Fielde, ved smaa Bække.",
	"Steden. Paa et eneste Sted i Norge, nemlig Præstesitter i Slidre i Walders tæt ved Sætterhusene, paa den vestlige Side, og der i Mængde.",
	"Steden. I stor Mængde paa det Eid af Tutterøen ved Trundhiem , som binder begge Dens Dele sammen; samt mellem Backland og Ladehammer ved samme By, og mellem Stenene i Fieren ved Stranden, som staar under Vand om Vinteren.",
	"Steden. Ved Røraas i Norge paa et tørvagtigt dyndet Sted.",
	"Steden. Almindelig paa de tørre Fieldmarker i Norge , i størst Mængde ved Røraas , og paa Aalfield ved Holtaalen.",
	"Steden. Her og der, men kun lidet , paa de norske Fielde , saasom Grindefield ved Vang i Walders, Eiskeller sammestæds ; samt paa Sillefield , paa den sydlige Side af Bierget næst ved Fieldstuen, og ved Gaarden Sors i Nordranen.",
	"<br>Landets navn. I Guldbrandsdalen i Norge , Giethivel. <br><br>Steden. Ved Froen i Guldbrandsdalen , paa de Øer, som ligge i Elven , samt i stor Mængde ved Sogstue paa Dovrefield.",
	"Steden. Paa Dovrefield i Norge , paa Veien mellem Tofte og Sogstuen.",
	"Steden. Rar , paa Fieldene Søndenfields i Norge, saasom : paa Dovrefield ved Kongsvold , i Begyndelsen af Vaarstigen , men i størst Mængde i Nordlandene , endog paa lave og Havet nærliggende Steder , saasom: paa Søerherrøe paa Helgeland , samt paa Brønøen ikke langt fra Præstegaarden",
	"Steden. Paa adskillige Steder paa de norske Fielde , saasom: Præstesætter paa Slidre i Walders.",
	"<br>Landets Navn. I Norge Meelbær. Pontopp. H. N. N. 1. 105. <br><br>Steden. I stor Mængde paa adskillige Steder i Norge , saasom, paa Dovrefield ved Sogstue, ved Slidre i Walders ikke langt fra Præstegaarden , paa en Holme i Elven , der ganske er bedækket af den.",
	"Steden. Paa adskillige Steder paa de norske Fielde , hængende ned af de Bierg-Kløfter , som immer ere vaade af det oven fra nedsildrende Vand , saasom: paa Sillefield , paa den sydlige Side af det Bierg , Fieldstuen ligger under; samt paa Dovrefield ved Sogstuen.",
	"Steden. Paa adskillige Steder i Norge , under Vandet paa Sandgrund i ferske Vande , saasom : Norderhoug paa Ringerike , i Vandet ved Kirken.",
	"Steden. Almindelig paa de norske Fielde , paa lave fugtige Steder , saasom: paa Vang i Walders neden ved Bierget Grindefield , og paa Bierget Graakalf mellem Trundhiem og Bynæsset.",
	"Steden. Her og der i Norge , i Lundene paa Field-Siderne ; i størst Mængde paa den østlige Side af Dalen ved Slidre Præstegaard i Walders.",
	"Steden. I stor Mængde ved Evindvig , i Bergens Stift , ved Steensund og Hunsøen , paa Klipper og tørre Bakker.",
	"Steden. Paa adskillige Steder i de ferske Vande i Norge, saasom i Storsøen paa Solløer i Strøms Præstekald , i Treungen i Hvidesøe Kald i Tellemarken , men i størst Mængde mellem Lyngdal og Undal i Christiansands Stift , paa sandige Steder ved Vandbrædden.",
	"<br>Landets navn. I Norge , samt i Dannemark gemeenlig Tyttebær. Hos Kylling kaldes de Krøsingbær , Krøslinger. <br><br>Steden. Meget almindelig over hele Norge, paa tørre og skarpe Skovmarker ; samt i Sielland, men rar. En Udart med hvide Bær findes i Lyngdal i Chriſtiansands Stift.",
	"Steden. Paa et eneste Sted og det endnu kun ganske faa paa Dovrefield ved Kongsvold, i Begyndelsen af Vaarstigen , i Brinkerne paa den høire Side af Veien; blomstrer i Begyndelsen af Julii-Maaned.",
	"<br>Landets navn. I Stavanger- og Lister- Amt Rommegræs , samt Liaagræs. Paa Sundmøer Val-Sax. Ström. Sturgræs. Pontopp. 1. c. <br><br>Steden. I hele Christiansands Stift paa fugtige Marker , i saadan Mængde , at , hvis den var saa skadelig , som Simon Pauli beretter , maatte alt Qvæget længe siden være der ødelagt ; Paa andre Steder i Norge findes den mindre almindelig , saasom paa Bierget Graakalf mellem Trundhiem og Bynæsset , i et Kiær paa den østlige Side af Bierget. Paa Sundsmør. Ström. I Jylland ved Wiborg. Kylling.",
	"Steden. Her og der paa de norske Bierge , ved smaa Bække, der om Sommeren udtørres , saasom : paa Eisfield i det søndenfieldske, Nummedal ; i Nordlandene paa tørvagtige Enge og Udmarker , tæt ved Havet , saasom : Søevigen paa Øen Alsten og dens Naboe -Øe, Sørherrøe.",
	"Steden. Nogle Gange har jeg fundet den , i Norge ved Næß i Hallingdalen , i Lunden under den Klippe , som hænger ud over Landsbyen paa den høire Side eller i Vester af den ; samt ved Lysager ved Christiania , paa den hoire Side af den lille Broe ved Værtshuset. paa de afskaarne Sider af Graven: paa begge Steder paa skyggefulde fugtige Steder; Den Unge med sin Hætte midt i September , den Vorne endda grøn i Maji Maaned.",
	"Steden. Neden ved Eckebierget ved Christiania , tæt ved Hospitalet, i en sort fugtig meelagtig Jord, af opløst Alunskiefer, mod Enden af September - Maaned.",
	"Steden. Her og der paa de norske Fielde , især paa Siderne af dem , paa skovagtige Marker, i størst Mængde paa Dovrefield paa Veien fra Sell ; paa Bierget de syv Søjire paa Øen Alsten , paa en Sætter Gaard Søevigen tilhørende.",
	"Steden. Her og der sparsommeligen ved Sogstuen paa Dovrefield , ellers ingensteds Søndenfields saavidt mig bekiendt , men i størst Mængde paa Bierget de syv Søstre paa Øen Alsten i Nordlandene , paa de vildeste Klipper , hvor der ligger lidt af den særdeles Jord , som er Fieldtoppene egen ; saa og i Mængde paa andre Bierge nordenfields i Norge mod Havet.",
	"Steden. Paa et eneste Sted paa Sillefield ved Maristuen , ikke langt fra Huset tæt ved den høire Side af Veien til Walders , paa sort , fugtig og stenet Jord.",
	"Steden. Almindelig paa de norske Fielde, paa tørre vindaabne Steder.",
	"<br>Landets navn. gemeenlig Enzian. Ellers hos Bønderne Søde , Skiærsøde , Sødrod. <br><br>Steden. I stor Mængde paa Fieldene i Hallingdalen , Tellemarken , samt paa Heckfield , paa Siderne af høie vindaabne Bakker, hvor der voxer lidt Græs. Den gule Enzian har jeg ingensteds fundet , men Rødderne af denne røde bruge baade Indbyggerne selv , samt sælge dem til Byerne, og ere de uden Tvil ligesaa gode som Rødderne af den Gule, hvilker Clusius ogsaa har erindret.",
	"Steden. Paa adskillige Steder i Norge, paa Enge og Marker ved Fieldsiderne , saasom Groen i Guldbrandsdalen , tæt ved Præstegaarden, paa Opdal i det søndenfielske Nummedal, især ved Gaarden Rolland; ved Leerdal i Bergens Stift, paa en Øe, som Elven giør , immer paa tør Grund.",
	"Steden. Paa de vindaabne Bakker paa Øerne ved Christiania.",
	"<br>Landets navn. I Dannemark og Norge Morkler. <br><br>Steden. Paa adskillige Steder søndenfields i Norge, i Fyrre og Grane- Skover , saasom Sandsvær ved Kongsberg , Bærum og Krogskoven ved Christiania , voxer helst i Braader : Steder , som der er brændt paa.",
	"Steden. Almindelig over hele Norge i tørvagtige Kiær af Skovmarker. I Sielland ved Kollekolle ganske lidet.",
	"Steden. I Skove og Krat paa og ved Siderne af de norske Fielde , i størst Mængde paa Opgangen af Bierget Grindefield , paa Vang i Walders.",
	"Steden. Ganske sparsommeligen paa de norske Fielde , saasom ved Sogstuen paa Dovrefield.",
	"Steden. Paa de fleste Fielde i Norge, saasom Eisfielder i det søndenfieldske Nummedal, paa Veien fra Guldbrandsdalen op paa Dovrefield , og ved Sogstuen paa samime Field .",
	"Steden. I stor Mængde om Foraaret paa de tørre og vindaabne Høie ved Kiøbenhavn",
	"Steden. Paa adskillige Steder i Christiansands Stift , især i stor Maængde paa Aaserald under Heckfield, paa Stener i Skovene ved Siderne af Fieldet.",
	"<br>Landets navn. I Søgne Sogn i Christiansands Stift , Sanct Oles Skiæg. <br><br>Steden. Paa adskillige Steder i Biergkløfterne over alt i Norge",
];
let imgtoinsert = [
	"minifd1",
	"minifd2",
	"minifd3",
	"minifd4",
	"minifd5",
	"minifd6",
	"minifd7",
	"minifd8",
	"minifd9",
	"minifd10",
	"minifd11",
	"minifd12",
	"minifd13",
	"minifd14",
	"minifd15",
	"minifd16",
	"minifd17",
	"minifd18",
	"minifd19",
	"minifd20",
	"minifd21",
	"minifd22",
	"minifd23",
	"minifd24",
	"minifd25",
	"minifd26",
	"minifd27",
	"minifd28",
	"minifd29",
	"minifd30",
	"minifd31",
	"minifd32",
	"minifd33",
	"minifd34",
	"minifd35",
	"minifd36",
	"minifd37",
	"minifd38",
	"minifd39",
	"minifd40",
	"minifd41",
	"minifd42",
	"minifd43",
	"minifd44",
	"minifd45",
	"minifd46",
	"minifd47",
	"minifd48",
	"minifd49",
	"minifd50",
	"minifd51",
	"minifd52",
	"minifd53",
	"minifd54",
	"minifd55",
	"minifd56",
	"minifd57",
	"minifd58",
	"minifd59",
	"minifd60",
];
let imgname = [
	"Chamæmorus Norvagica.",
	"Pedicularis, lapponica ",
	"Campanula ferpyllifolia.",
	"Alfine alpina glabra",
	"Chamæpericlymenum  prutenicum",
	"Caryophyllus holoſteus alpinus latifolius.",
	"Alfine verna Androfaces <br> capitulis.",
	"Pyrola IIII",
	"Chamæciſtus VII",
	"Andromeda",
	"Thalictrum ",
	"Sagina ramis erectis bifloris",
	"Biſtorta alpina media",
	"Acetoſa rotundifolia alpina",
	"Alga ad mare.",
	"Teucrium etſcherianum",
	"Gentiana XI.",
	"Lunaria racemoſa",
	"Ranunculus",
	"Plantula Cardamines æmula",
    //20
	"Caryophyllus pumilus alpinus",
	"Saxifraga , cernua , foliis caulinis palmaris petiolatis",
	"Sedulum alpinum quartum",
	"Sedum paluſtre",
	"Echium marinum",
	"Pedicularis alpina folio Ceterach",
	"Hieracii minoris ſpecie Broccenbergo peculiaris",
	"Sedulum tertium",
	"Pulſatillæ ſpecies ex Valleſia",
	"Pedicularis alpina folio Ceterach",
    //30
	"Leucas chamædrys alpina quibusdam",
	"Fragariæ ſylveftri adfinis planta flore luteo.",
	"Uva Urfi",
	"Sedulis alpinis cognata",
	"Graminifolia aquatica Thlaſpeos capitulis rotundis",
	"Pfeudoaſphodelus pumilus foliis Iridis",
	"Carduus mollior lapathi folio",
	"Erica Coris folio",
	"Gladiolus ſtagnalis Dortmanni",
	"Vitis-idaea altera",
    //40
	"Papaver erraticum nudicaule flore flavo odorato",
	"Aſphodelus luteus palustris",
	"Pediculariæ genus montanum ex Bokkemato monte",
	"Muſcus capillaceus aphyllus",
	"Blaſia pufilla lichenis pyxidati facie",
	"Viola montana",
	"Diapenfia , lapponica ",
	"Galium , trifidum ",
	"Tormentilla alpina folio ſericeo",
	"Gentiana major flore purpureo",
    //50
	"Aſtragalus alpinus",
	"Veronica ſpicata minor,",
	"Boletus eſculentus rugofus albicans ",
	"Vitis idræ adfinis polifolia montana",
	"Pyrola minor",
	"Phyllon Dalechampii.",
	"Erica rarior Norvegica",
	"Vicia montana minima flofculo purpureo",
	"Sedum minus a rupe S. Vincentii.",
	"Filix arborea",
];

// PrependBrBeforeChap(chapter);

var path = parent.location.pathname;
path = path.split("/").pop();
path = path.split(".").shift();
var maghide;
var magshow;
var magzoom;
var magseize;
var magform;
var magtoggle;
var closebut;
if (path == "flora-danica-en") {
	// SetContent(chapter, ContentEnglish);
	infoTxt = "Translated from German.";
}
if (path == "flora-danica-de") {
	// SetContent(chapter, ContentGerman);
	infoTxt = " Deutsch Original.";
}
if (path == "flora-danica-dk") {
	// SetContent(chapter, ContentDanish);
	infoTxt = "Dansk original.";
}
let img = "./img/covers/krauter2.png";
let link =
	"https://www.google.dk/books/edition/Einleitung_zu_der_Kr%C3%A4uterkenntni%C3%9F/QfxbAAAAcAAJ?hl=da&gbpv=1";
// SetLinkAndImgToFrontpage(link, img);

document.getElementById("info").innerHTML = infoTxt;
SetFlora();
SetImages(imgtoinsert, "fd/fd-mini");
document.getElementById("imgleft").remove();

function showTxtDescrip(img) {
	var indx = img.substring(6);
	var a = document.createElement("div");
	a.setAttribute("id", "txtcontainer");
	a.style =
		"align-items: end; display: inline-block; width: fit-content;; height: fit-content; padding-top: 10px;background-color: #d0b49f; position: sticky; ";
	document.getElementById("asideleftimg").prepend(a);
	var a = document.createElement("p");
	a.style = "padding: 5px;";
	a.innerHTML = latinname[indx - 1];
	document.getElementById("txtcontainer").append(a);
	var a = document.createElement("p");
	a.style = "padding: 5px;";

	a.innerHTML = infodk[indx - 1];
	document.getElementById("txtcontainer").append(a);
}

function removeTxtDescrip() {
	document.getElementById("txtcontainer").remove();
}
function setTxtDescrip(img) {
	var indx = img.substring(6);

	var a = document.createElement("div");
	a.setAttribute("id", "magtxt");
	document.getElementById("imgcontainerbuttons").prepend(a);
	var a = document.createElement("p");
	a.style = "padding: 5px;";
	a.innerHTML = latinname[indx - 1];
	document.getElementById("magtxt").append(a);
	var a = document.createElement("p");
	a.style = "padding: 5px;";
	a.innerHTML = infodk[indx - 1];
	document.getElementById("magtxt").append(a);
}
for (let i = 0; i < imgname.length; i++) {
	document.getElementById("tooltip" + i).innerHTML = imgname[i];
}
if (window.matchMedia("(max-width: 700px)").matches) {
}
