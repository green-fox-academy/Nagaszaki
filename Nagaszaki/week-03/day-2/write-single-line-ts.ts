'use strict'
export{}

const fs = require('fs');


// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

function fileMoneyPulaTor(fileContent: string){
    try{
        fs.writeFileSync('myfile.txt', fileContent);
    }
    catch(error){
        console.log("Unable to write file: my-file.txt");
    }
}

fileMoneyPulaTor('Nagy Gábor');