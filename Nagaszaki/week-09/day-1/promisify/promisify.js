'use strict'

const fs = require('fs');
const pfs = fs.promises;

pfs.readFile('')
  .then((textBuffer) =>{
    return textBuffer.toString();
  }).then((secondFile) =>{
    return pfs.readFile(secondFile);
  })