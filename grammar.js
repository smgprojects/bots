/**
 * @author Shawn
 */

var grammar = {

        title : ["A Report on the Archaeological Research at the #digSite# Site, #direction# #inwhatPlace#  <p> by #firstName# #lastName#"],

        firstSyl : "B C D F G H J K L M N P Qu R S T V W X Y Z St Fl Bl Pr Kr Ll Chr Sk Br Sth Ch Dhr Dr Sl Sc Sh Thl Thr Pl Fr Phr Phl Wh".split(" "),
        middleSyl : "an all ar art air aean af av ant app ab er en eor eon ent enth irt ian ion iont ill il ipp in is it ik ob ov orb oon ion uk uf un ull urk estr antr okl ackl".split(" "),
        lastSyl : "a ia ea u y en am is on an o io i el ios ax ox ix ex izz ius ian ean ekang anth".split(" "),

        weirdPlace : ["#firstSyl##middleSyl##lastSyl#", "#firstSyl##lastSyl#", "#firstSyl##lastSyl#-#firstSyl##lastSyl#"],

        firstName: ["Ella","Sarah","Frank","Trevor","Evan","Susan","Anton","Clarence","Art","Mina","Stephen","Sophie","George","Kelly","Arnold","Maurizio"],
        lastName: ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris"],

        fullName: ["#firstName# #lastName#"],
        inwhatPlace: ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Congo Democratic Republic","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","South Koread","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Palestinian State*","Panama","Papua New Guinea","Paraguay","Peru","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","St. Kitts & Nevis","St. Lucia","St. Vincent & The Grenadines","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Netherlands","The Philippines","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],
        direction:["North","South","East","West"],
        one10 : ["1","2","3","4","5","6","7","8","9","10"],
        two10 : ["2","3","4","5","6","7","8","9","10"],
        zeroto20 : ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
        relativeAmount : ["some","a wee bit of","major","a lot of","shitloads of"],
        valueJudgement : ["glorified looting","godawful, eh?","pointless","poorly done","soaked in bloodshed"],

        digOrg : ["Time Services", "Graham University", "Archaeology Awesome Inc", "East South East Archaeology", "South Harmon Institute of Technology Archaeology Unit", "Tiny Archae Field Schools Inc", "SilverBack Archaeology", "MGSE Archeology"],
        hiredPhrase : ["commissioned","hired","engaged","given a permit","contracted"],
        excavatePhrase : ["excavate","dig","survey","assess","perform a watching brief","do desktop survey","do stage III assessment","operate a field school"],
        underAuspices : ["Graham University","Watrall University","Kansa University","Pett University","The Digital Archaeology Institute"],

        whoDug : ["#mc# was #hiredPhrase# to #excavatePhrase# at #digSite#, working under the auspices of #underAuspices#. The #mc# team was lead by Dr. #projectLead#. Funding was generously provided by the #lastName# Foundation."],
        reasonWhy : ["new highway scheme", "hydro-electric dam", "housing scheme"],
        researchQuestion : ["#projectLead# had a #hankering# to #holiday#, so this excuse concerning a #excuse# was cooked up to cover it."],
        hankering : ["hankering","burning desire","compulsion","unpleasant desire","craving","hunger","lust","inclination"],
        holiday : ["sit on the beach","drink beer","hang out with students","have sex","launder money","stay in a nice hotel","torment lost souls","release eldritch forces into the world"],
        outThere : ["out there","buried","hidden","crying out for vengeance","a horrible thing","too awful for #firstName# to contemplate"],
        fingered : ["fingered","talked to","arrested","cautioned","ignored","framed"],
        number : ["six","two","three","four","five"],
        deity : ["Azathoth","Bastet","Cthugha","Cthulhu","Cthylla","Cxaxukluth","Cyäegha","Dagon","Ghatanothoa","Ghisguth","Gla'aki","Great Old One","Hastur"],
        spacetimeRift : ["rift","interdimensional portal","hellmouth","gaping pit of hell","wormhole","rip in the fabric of space time"],
        eaten : ["eaten","possessed by #deity#","dragged into the #spacetimeRift#","sucked into the abyss","driven into gibbering madness by #deity#","ran away from site to become an accountant"],
        archaeoWord : ["absolute dating","acheulean","acropolis","aerial photography","aerial reconnaisance","agora","alidade","alloy","alluvial deposit","amphora","ams","anthro","anthropology","antiquarian","archaeoastronomy","archaeology","archaeozoology","archaic","aristocracy","artifact","assemblage","association","BCE","BP","back dirt","balk","benchmark","biface tools","boat grave","bronze age","bulb of percussion","bulbar depression","CE","cache","canopic jar","carbon dating","cardinal directions","ceramics","chert","chipped stone tool","citadel","city-state","clan","classic period","classical age","classical archaeology","classical period","clovis point","collectors","colonial archaeology","column","conchoidal","conservation","context","contract archaeology","coprolite","core","corinthian column","cortex","cultural resource management","culture","cuneiform","datum point","debitage","dendrochronology","diffusion","doric column","ecofacts","egyptology","epigrapher","ethnography","excavation","experimental archaeology","fabric","feature","feminist archaeology","field notes","flake","flexed burial","flint","flotation","formation processes","geoarchaeology","glaze","global positioning system","grave goods","grid","ground reconaissance","ground-penetrating radar","half-life","harris matrix","hellenistic period","heiroglyphs","historical archaeology","hominid","hominin","household archaeology","hunter-gatherers","hypostyle","iconography","ideogram","in situ","inorganic","ionic column","iron age","knapping","levallois technique","law of superposition","linear a","linear b","lintel","lithic","locus","looter","material cutlure","matrix","medieval archaeology","mesolithic","microlith","midden","mousterian","neolithic","new world","nomads","obsidian","old world","oldowan","oligarchy","organic","osteology","paleobotany","paleolithic","paleontology","palynology","papyrus","pedology","petrology","pictogram","pithos","plane table","polis","prehistory","pressure flaking","primary context","profile","profile drawing","provenance","provenience","radiocarbon dating","radiometric dating","reconnaissance","relative dating","remote sensing","rescue archaeology","salvage archaeology","secondary context","sediments","seriation","settlement pattern","shaman","sherd","site","slip","soils","square","stela","stone age","stratigraphy","style","stylus","surface survey","tell","temper","terminus ante quem","terminus post quem","test pit","thermoluminescence","three age system","total station","transit","tree rings","trench","tufa","tumulus","type","typology","underwater archaeology","uniface tools","use-wear analysis","varves","ware","ziggurat","zone","cardiff giant","aliens","crystal skulls","denisovans","neanderthals","homo florienses","piltdown","hyperdiffusion","olmec","sailors","tara","pyramids","totalizing metanarrative","neoliberal"],
        oddWords : [ "rural","frugal","twin","santorum","detritus","entrepreneurial","pronounciation","moisture","peculiarly","crepuscular","ubiquitous","malarkey","bubbles","dude","torque","google","visualization","cliche","floccinaucinihilipipification","conundrums","doodlesack","volunteer","mississippilessly","calisthenics","serendipity","grommets","dilettante","macrosmatic","supercalifragilisticexpialidocious","flabergasted","sphygmomanometer","Kardashian","hubbub","prescription","caulking","wreath","expat","jentacular","schnapps","zdravstvuite","phlegm","specific","quproch","riboflavin","cubersome","garage","flummoxed","profiterole","ruler","dingleberry","egg","ombudsman","perpendicular","collate","abruptly","word","bitter","cellar","airworthy","stupendous","swathe"],

        ordinal : ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],
        journalCite :["#lastName#, #firstName#. (19#zeroto20#). <em>The #archaeoWord.capitalize# #oddWords.capitalize# in the #ordinal.capitalize# Century</em>. #inwhatPlace#: #weirdPlace#. pp#one10##one10##one10#.","#lastName#, #firstName#. (19#zeroto20#). <em>#archaeoWord.capitalize# #oddWords.capitalize#</em>. #inwhatPlace#: #weirdPlace#. pp#one10##one10##one10#.","#lastName#, #firstName#. (19#zeroto20#). <em>#ordinal.capitalize# #archaeoWord.capitalize#</em>. #inwhatPlace#: #weirdPlace#. pp#one10##one10##one10#."],

        introPara : ["<h1>#title#</h1><br><h2>Introduction</h2><p>#whoDug#"],
        reasonPara : ["The work became necessary because #excuse.a# will shortly be built in the region. (Actually, since no one will ever read this, #firstName# thinks it is because #researchQuestion#.) Thus, #digSite# was in immediate danger of being lost. <br><br> The team was composed of #two10# student volunteers. (But the truth is #outThere#. How many lives were ruined? What ever happened to #firstName#? Please, if you read this, talk to #lastName#! The police only ever #fingered# #lastName#.)"],
        previousResearchpara : ["#relativeAmount.capitalize# archaeology was conducted by #lastName# in 19#zeroto20#, but it was #valueJudgement#. The site archive is held in #weirdPlace#, #inwhatPlace#."],
        extentPara : ["<br><br> #number.capitalize# trenches were opened. Only the location of the last trench is shown on the plan, because somehow the phrase ' #archaeoWord# the #archaeoWord# o great #deity# of #archaeoWord# ' (said in jest by #firstName#, the bastard), called #deity# into this temporal sphere, who opened a #spacetimeRift# and the normal 3 dimensions no longer obtained. Try finding that with a total station. #firstName# was #eaten#, we think. <br><br><br><br>References<br><br>#journalCite#<br><br>#journalCite#<br><br>#journalCite#<br><br>"],

        report : ["#introPara# #reasonPara# #previousResearchpara# #extentPara#"],

        origin : ["#[digSite:#weirdPlace#][mc:#digOrg#][projectLead:#fullName#][excuse:#reasonWhy#]report#"]

}
