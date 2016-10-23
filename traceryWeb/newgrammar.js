/**
 * @author Shawn
 */

var grammar = {

        digOrg : ["Time Services", "Graham University", "Archaeology Awesome Inc", "East South East Archaeology", "South Harmon Institute of Technology Archaeology Unit", "Tiny Archae Field Schools Inc", "SilverBack Archaeology", "MGSE Archeology"],

        hiredPhrase : ["commissioned","hired","engaged","given a permit","contracted"],

        excavatePhrase : ["excavate","dig","survey","assess","perform a watching brief","do desktop survey","do stage III assessment","operate a field school"],

        underAuspices : ["Graham University","Watrall University","Kansa University","Pett University","The Digital Archaeology Institute"],

        introduction : ["#mc# was #hiredPhrase# to #excavatePhrase# under the auspices of #underauspices#."],

        origin : ["#[mc:#digOrg#]introduction#"]

}
