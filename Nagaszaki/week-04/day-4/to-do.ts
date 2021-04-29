'use strict'

import { formatWithOptions } from "node:util";

const fs = require ('fs');

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function greeter(){
  console.log("Command Line Todo application"+
  "\n============================="+
  "\nOptions:"+
  "\n  1   Lists all the tasks"+
  "\n  2   Adds a new task"+
  "\n  3   Removes an task"+
  "\n  4   Completes an task"+
  "\n Any other number quits the program");
}

function firstOption(){
  let txt: string[] = fs.readFileSync('tasks.txt', 'utf-8').split("\n");
  if (txt[0] === ""){
    console.log("No todos for today! :)");
  } else {
    for(let i = 0; i < txt.length; i++){
      console.log((i+1)+" - "+txt[i]);
    }
  }
}

function secondOption(word: string){
  fs.writeFileSync("tasks.txt",'\n'+word+'\n',{flag:'a'});
}

function thirdOption(){

}

function fourthOption(){

}

function exit(){
  rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });
}

function showOptions(){
  rl.question("\n\nChoose an option \nby typing it's number here: ", function(input){
    switch (parseInt(input)){
      case 1:
        firstOption();
        break;

      case 2:
        secondOption("Feed the monkey");
        break;

      case 3:
        thirdOption();
        break;

      case 4:
        fourthOption();
        break;

      default:
        exit();
    }
    rl.close();
  });
}

//Here is the program

greeter();

showOptions();


