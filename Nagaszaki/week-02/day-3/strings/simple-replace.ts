'use strict';
export{};

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let splitter: string[] = example.split(" ");
splitter[splitter.indexOf("dishwasher")] = "galaxy";
example = splitter.join(" ");
console.log(example);

export = example;