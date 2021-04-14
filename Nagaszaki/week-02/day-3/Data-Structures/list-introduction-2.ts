'use strict';
export{};

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'],
 listB: string[] = [...listA];
 /*   Type Script 2016+
 if (listA.includes("Durian")){
     console.log("Tartalmazza Duriant!");
 } else {
    console.log("Nem tartalmazza Duriant!");
 }

 */
let partof: boolean = false;
for (let i:number = 0; i< listA.length; i++){
    if (listA[i] === "Durian"){
        partof = true;
    }
}
if (partof){
    console.log("Tartalmazza Duriant!");
 } else {
    console.log("Nem tartalmazza Duriant!");
}

delete listB[listB.indexOf("Durian")];

listA.splice(5, 0, "Kiwifruit");

if (listA.length > listB.length){
    console.log("A lista a nagyobb!");
} else {
    console.log("B lista a nagyobb!");
}

console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));
listB.push("Passion Fruit", "Pomelo");
console.log(listA[2]);