'use strict';
export{};

let list: string[] = [];
console.log(list.length);
list.push("William");
if (list.length === 0){
    console.log("The list is empty! :(")
} else {
    console.log("The list has " + list.length + " item(s) inside! :)")
}
list.push("John","Amanda");
console.log("The list has " + list.length + " item(s) inside! :)")
console.log("The 3rd item: " + list[2]);
for (let i: number = 0; i < list.length; i++){
    console.log(list[i]);
}
for (let i: number = 0; i < list.length; i++){
    console.log(i+1 + ". " + list[i]);
}
list.splice(1, 1);
for (let i: number = list.length-1; i >= 0; i--){
    console.log(list[i]);
}