/**
 * @author Shawn
 * ignore this file, this was just me futzing
 */

var grammar = {

        firstSyl : "B C D F G H J K L M N P Qu R S T V W X Y Z St Fl Bl Pr Kr Ll Chr Sk Br Sth Ch Dhr Dr Sl Sc Sh Thl Thr Pl Fr Phr Phl Wh".split(" "),
        middleSyl : "an all ar art air aean af av ant app ab er en eor eon ent enth irt ian ion iont ill il ipp in is it ik ob ov orb oon ion uk uf un ull urk estr antr okl ackl".split(" "),
        lastSyl : "a ia ea u y en am is on an o io i el ios ax ox ix ex izz ius ian ean ekang anth".split(" "),

        weirdPlace : ["#firstSyl##middleSyl##lastSyl#", "#firstSyl##lastSyl#", "#firstSyl##lastSyl#-#firstSyl##lastSyl#"],

        firstName: ["Ella","Sarah","Frank","Trevor","Evan","Susan","Anton","Clarence","Art","Mina","Stephen","Sophie","George","Kelly","Arnold","Maurizio"],
        lastName: ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris"],

        fullName: ["#firstName# #lastName#"],
        inwhatPlace: ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Congo Democratic Republic","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","South Koread","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Palestinian State*","Panama","Papua New Guinea","Paraguay","Peru","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","St. Kitts & Nevis","St. Lucia","St. Vincent & The Grenadines","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Netherlands","The Philippines","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],
        direction:["North","South","East","West"],
  
        introdata : ["<h1>#title#</h1><br>"], 
        title : ["#colour# #people# Gold","#hero# and The Treasure of #weirdPlace#"],
        colour : ["Red","Green","Yellow","Blue","Azure","Topaz","Carnelian"],
        people : ["Mayan","Roman","Greek","Spartan","Brigantine","Atlantean","Aztec","Prester John's","Etruscan","Pompeian"],
        year : ["234", "1432", "AD 79", "400 BC", "705 BC", "1066", "410", "1867"],
        fullStory : ["#introdata# <h3> In Homage to Clive Cussler </h3> <br> Prologue <br><br> #direction# #inwhatPlace# #year# #prologue# #chapter1#"],
        
origin : ["#[storyLocale:#weirdPlace#][hero:#fullName#]fullstory#"]  
}
