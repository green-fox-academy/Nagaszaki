  'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for(let i:number = 0;i < lineCount; i++){
    let stars:string = "";
    if(i==0 || i==lineCount-1){
        for(let j:number = 0 ; j < lineCount; j++){
            stars+='%';
        }
    } else {
        for(let j:number = 0 ; j < lineCount; j++){
            if(j==0 || j==lineCount-1){
                stars+="%";
            } else {
                stars+=' ';
            }
        }
    }
    console.log(stars);
}