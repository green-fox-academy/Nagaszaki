'use strict'

export function anagram(string1: string, string2: string){
  let splitString1 = string1.split("").sort().join(""),
    splitString2 = string2.split("").sort().join("");
    return (splitString1 === splitString2 ? `${string1} and ${string2} are anagrams!`
      : `${string1} and ${string2} are not anagrams!`);
}