'use strict';
export{};

let map: object = {
}
if (Object.keys(map).length === 0 && map.constructor === Object){
    console.log("Map is empty!")
} else {
    console.log("Map has elements!")
}

map["97"] = 'a',map["98"] = 'b',map["99"] = 'c',map["65"] = 'A',
map["66"] = 'B',map["67"] = 'C';
console.log(Object.keys(map))
for (let key in map) {
    console.log(map[key]);
}
map["68"] = 'D';
console.log(Object.keys(map).length+ "db elem van az objektumban!");
console.log(map["99"]);
delete map["97"];

if (map[100]){
    console.log("There is a 100 key!")
} else {
    console.log("There isn't a 100 key!")
}

for (let key in map) {
    delete map[key];
}