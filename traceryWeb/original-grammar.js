/**
 * @author Shawn
 */

var grammar = {

        firstSyl : "B C D F G H J K L M N P Qu R S T V W X Y Z St Fl Bl Pr Kr Ll Chr Sk Br Sth Ch Dhr Dr Sl Sc Sh Thl Thr Pl Fr Phr Phl Wh".split(" "),
        middleSyl : "an all ar art air aean af av ant app ab er en eor eon ent enth irt ian ion iont ill il ipp in is it ik ob ov orb oon ion uk uf un ull urk estr antr okl ackl".split(" "),
        lastSyl : "a ia ea u y en am is on an o io i el ios ax ox ix ex izz ius ian ean ekang anth".split(" "),

        butchName : ["Chesty", "Manley", "Brock", "Stone", "Brick", "Butch", "Bruce", "Steel", "Saber", "Tex", "Rock", "Drake", "Ace", "Knute", "Wolf", "Thorax", "Brad", "Abs", "Burt", "Slate", "Bret", "Duke"],

        alienName : ["#firstSyl##middleSyl##lastSyl#", "#firstSyl##lastSyl#", "#firstSyl##lastSyl#-#firstSyl##lastSyl#"],

        sexy : ["muscled", "sexy", "dark", "well-dressed", "masculine", "dramatic", "dramatically lit", "boyish", "burly", "handsome", "erotic", "many-bossomed", "supple", "nude"],
        occupation : ["lumberjack", "firefighter", "scientist", "spy", "wizard", "radio broadcaster", "smuggler", "mechanic", "astronaut", "adventurer", "pirate", "cowboy", "vampire", "detective", "soldier", "marine", "doctor", "ninja", "waitress", "burlesque dancer", "ballerina", "opera singer", "gogo dancer", "rollerskater"],

        physicsParticle : ["quark", "photon", "lepton", "muon"],
        scienceVerb : ["evaporate", "decay", "phase-shift", "teleport", "destabilize", "sublimate"],
        scienceBlargleStart : ["holo", "hyper", "transmuto", "digi", "nano", "electro", "transma", "magna"],

        communicationDevice : ["#physicsParticle#-transmitter", "#scienceBlargleStart#phone", "#scienceBlargleStart#pager", "#scienceBlargleStart#beeper", "#scienceBlargleStart#view", "#scienceBlargleStart#scope", "#scienceBlargleStart#cam"],

        shortTime : ["in a sec", "right now", "two clicks", "a moment's time", "the blink of an eye", "no time at all", "the time it takes a single unstable #physicsParticle# to #scienceVerb#", "#firstSyl##middleSyl#sday"],
        conversationally : ["expressively", "noncommitally", "with relief", "dispassionately"],
        mcResponded : ["'That was unexpected,' #mc# said.", "#mc# shrugged #conversationally#", "#mc# sighed #conversationally#"],

        transitPlain : ["bus", "plane", "jet", "tram", "rail", "tube", "beam"],
        transitMod : ["nonstop", "express", "commuter", "prismatic", "red-eye", "pneumatic", "crosstown"],
        transportSystem : ["#scienceBlargleStart##transitPlain#", "#transitMod# #scienceBlargleStart# #transitPlain#"],
        travelPlot : ["#mc# punched '#mcDestinationSystem#' into the #communicationDevice#. There was still one ticket left on the #transportSystem#, but he'd have to take a #transportSystem# the rest of the way to Planet #mcDestination#.'"],

        vipTitle : ["Vice President", "Mr.", "Detective", "Senator", "Chairman", "Princess", "Lord", "Lady", "Professor", "Grand Inquisistor", "High Priest", "President"],
        boss : ["#vipTitle# #alienName#"],

        artFormBasic : ["novel", "sculpture", "film", "painting", "poem", "play"],
        artForm : ["prisma#artFormBasic#", "holo#artFormBasic#", "photo#artFormBasic#", "hyper#artFormBasic#"],
        artDemand : ["'Your #mcArt# is late, #mc#', shrieked #mcBoss# over the #communicationDevice#.", "'I need that #mcArt# by #shortTime#' yelled #mcBoss#.", "'Where's the #mcArt#, #mc#? You promised it'd be finished by last #firstSyl##middleSyl#sday,' #mcBoss#'s voice came through the #communicationDevice#."],
        artQuest : ["The only thing that could really, I mean really, inspire a #mcArt# would be the famously #sexy# #occupation.s# of Planet #mcDestination# and for that, he'd have to go to the #mcDestinationSystem# system. #travelPlot#"],
        artPlot : ["#artDemand#  'Yeah, I'll have it done in #shortTime#', #mc# promised, hanging up the #communicationDevice#. #mcResponded#.#[mcDestination:#alienName#][mcDestinationSystem:#alienName#]artQuest#"],

        plot : ["#[mcArt:#artForm#][mcBoss:#boss#]artPlot#"],

        origin : ["#[mc:#butchName#]plot#"]



}
