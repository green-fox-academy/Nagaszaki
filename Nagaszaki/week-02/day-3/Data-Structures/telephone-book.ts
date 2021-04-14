'use strict';
export{};

let map: object = {
    "William A. Lathan" : "405-709-1865",
    "John K. Miller" :	"402-247-8568",
    "Hortensia E. Foster" : "606-481-6467",
    "Amanda D. Newland" : "319-243-5613",
    "Brooke P. Askew" : "307-687-2982"
}

console.log("John K. Miller's phone number:", map["John K. Miller"]);

for (let key in map){
    if (map[key] === "307-687-2982"){
        console.log("307-687-2982 is " + key + "'s number");
    }
}

if (map["Chris E. Myers"]){
    console.log("We do!")
} else {
    console.log("We dont!")
}