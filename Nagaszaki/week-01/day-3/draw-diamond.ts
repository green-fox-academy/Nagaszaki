'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


for(var i=1; i<=lineCount; i++){
    let stars:string = "";
    if(i<=lineCount/2){
        for(var k=1; k<=( lineCount-i ); k++){
            stars+=" ";
        }
        for(var j=1; j<=i; j++){
            stars+="* ";
        }
    } else {
        for(var k=lineCount; k>=( lineCount-(i-2) ); k--){
            stars+=" ";
        }
        for(var j=lineCount; j>=i; j--){
            stars+="* ";
        }
    }
    console.log(stars);
}