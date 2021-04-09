'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %

for(let i:number = 0;i < 8; i++){
    let stars:string = "";
    if(i%2==1){
        for(let j:number = 0 ; j < 8; j++){
            if(j%2==1){
                stars+='%';
            } else {
                stars+=' ';
            }
        }
    } else {
        for(let j:number = 0 ; j < 8; j++){
            if(j%2==1){
                stars+=' ';
            } else {
                stars+='%';
            }
        }
    }
    console.log(stars);
}