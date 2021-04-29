'use strict'

const fs = require('fs');

const cliArguments: string[] = process.argv;

console.log(cliArguments);

// Print usage
if (cliArguments[2] === undefined) {
  console.log('Command Line Todo application');
  console.log('=============================');
  console.log('');
  console.log('Command line arguments:');
  console.log('    -l   Lists all the tasks');
  console.log('    -a   Adds a new task');
  console.log('    -r   Removes an task');
  console.log('    -c   Completes an task');

  // list
} else if (cliArguments[2] === '-l') {
    let text: string[] = [];
    text = fs.readFileSync('list.txt', 'utf-8').split('\n');
    for(let i: number = 0; i < text.length; i++){
    if ((text[i] [0] === '[' && text[i] [1] === ' ' && text[i] [2] === ']') ||
    (text[i] [0] === '[' && text[i] [1] === 'x' && text[i] [2] === ']')) {

    } else {
        text[i] = '[ ] ' + text[i];
    }
  }
  fs.writeFileSync('list.txt', text.join('\n'));

    for (let i = 0; i < text.length; i++) {
      console.log((i + 1) + ' ' + text[i]);
    }
        if (text.length === 0) {
          console.log('There are no todos for today');   
        }
        
    // add
    }else if (cliArguments[2] === '-a' && cliArguments[3] === undefined) {
          console.log('Unable to add: no task provided');

} else if (cliArguments[2] === '-a') {
  fs.writeFileSync('list.txt', '\n', {flag: 'a'});
    for (let i = 3; i < process.argv.length; i++) {
      fs.writeFileSync('list.txt', process.argv[i], {flag: 'a'});    
  }
  // remove
} else if (cliArguments[2] === '-r') {
    let text: string[] = [];
    text = fs.readFileSync ('list.txt', 'utf-8').split('\n');
  if (!Number.isInteger (parseInt (cliArguments[3]))) {
    console.log('Unable to remove: index is not a number');
    
  } else if (cliArguments[2] === '-r' && cliArguments[3] === undefined) {
      console.log('Unable to remove: no index provided');
  
  } else if (text.length < parseInt(cliArguments[3])) {
      console.log('Unable to remove: Out of bound');

  } else {  
      text.splice (parseInt (cliArguments[3]) - 1, 1);      
      fs.writeFileSync('list.txt', text.join('\n'));
  }
  } else if (cliArguments[2] === '-c') {
      let cvar: string[] = fs.readFileSync('list.txt', 'utf-8').split('\n'), index = parseInt(cliArguments[3]);  
      if (cvar[index - 1] [0] === '[' && cvar[index - 1] [1] === 'x' && cvar[index - 1] [2] === ']') {

      }else if (cvar[index - 1] [0] === '[' && cvar[index - 1] [1] === ' ' && cvar[index - 1] [2] === ']') {
        let helper:string[] = cvar[index - 1].split('');
        helper[1] = 'x';
        cvar[index - 1] = helper.join('');
        fs.writeFileSync('list.txt', cvar.join('\n'));
      } else {
      cvar[index - 1] = '[x]' + cvar[index - 1];
      fs.writeFileSync('list.txt', cvar.join('\n'));
      }
  } else {
    console.log('Unsupported argument');   
}