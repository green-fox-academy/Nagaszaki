'use strict';
export{};

// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let splitter: string[] = quote.split(" "),half1: string[] = [], half2: string[] = [];
half1 = splitter.splice(0,splitter.indexOf("It")+1);
half2 = splitter.splice(splitter.indexOf("you"));
half1.push("always takes longer than ");
quote = half1.join(" ") + half2.join(" ");
console.log(quote);