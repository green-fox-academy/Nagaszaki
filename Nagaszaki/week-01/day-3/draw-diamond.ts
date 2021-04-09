'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for(var i=1; i<=lineCount; i++){
    let stars:string = "";
    for(var k=1; k<=( lineCount-i ); k++){
        stars+=" ";
    }
    for(var j=1; j<=i; j++){
        stars+="* ";
    }
    console.log(stars);
}