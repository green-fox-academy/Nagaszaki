'use strict'

export function countLetters(string: string){
  let dictionary = new Object;
  for(let i=0; i < string.length;i++){
    let isPresentInDictionary: boolean = false;
    for(let j = 0; j < dictionary;j++){
      if (string[i] == dictionary[j])
        isPresentInDictionary = true;
    }
    isPresentInDictionary ? dictionary[string[i]] += 1
    : dictionary[string[i]] = 1;
  }

  return dictionary;
}

console.log(countLetters('szerelem'));
