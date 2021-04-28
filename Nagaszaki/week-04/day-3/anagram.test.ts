'use strict'

import { anagram } from './anagram';
import * as test from 'tape';

test('Anagram comparison', t => {
  let string1: string = 'Babgulyás',
    string2: string = 'gulyásBab';
  t.equal(anagram(string1,string2), `${string1} and ${string2} are anagrams!`);
  t.end();
})

test('Anagram comparison with capitals v2', t => {
  let string1: string = 'Árvíztűrőtükörfúrógép',
    string2: string = 'áRvíztűrőtükörfúrógép';
  t.equal(anagram(string1,string2), `${string1} and ${string2} are not anagrams!`);
  t.end();
})