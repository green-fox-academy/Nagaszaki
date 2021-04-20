export{}
'use strict'
// Create a method that decrypts reversed-lines.txt

const fs = require ('fs');

function reverse(txt: string){
    let lineSplitter: string[] = [];
    lineSplitter = fs.readFileSync(txt, 'utf-8').split('\n');
    for(let i: number = 0; i < lineSplitter.length; i++){
        let reversed: string = "";
      for(let j: number = lineSplitter[i].length; j > 0; i--){
        reversed += lineSplitter[i][j];
      }
      lineSplitter[i] = reversed;
    }
    fs.writeFileSync(txt,lineSplitter.join('\n'));

}

