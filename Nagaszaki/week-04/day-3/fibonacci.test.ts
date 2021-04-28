'use strict'
import { fibonacci } from './fibonacci';
import * as test from 'tape';

test('First number of fibonacci sequence', t => {
  t.equal(fibonacci(1),0);
  t.end();
})

test('Tenth number of fibonacci sequence', t => {
  t.equal(fibonacci(10),34);
  t.end();
})

test('Negative number of fibonacci sequence', t => {
  t.equal(fibonacci(-10),0);
  t.end();
})
