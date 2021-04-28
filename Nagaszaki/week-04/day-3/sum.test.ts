'use strict'

import { Sum } from './sum'
import * as test from 'tape';

test('Sum of numbers', t => {
  let array = new Sum;
  array.add(1);
  array.add(2);
  array.add(3);
  array.add(4);
  t.equal(array.sum(),10);
  t.end();
})

test('Sum of empty list', t => {
  let array = new Sum;
  t.equal(array.sum(),0);
  t.end();
})

test('Sum with 1 element', t => {
  let array = new Sum;
  array.add(6);
  t.equal(array.sum(),6);
  t.end();
})

test('Sum of multyple numbers', t => {
  let array = new Sum;
  array.add(1);
  array.add(2);
  array.add(3);
  array.add(4);
  array.add(5);
  t.equal(array.sum(),15);
  t.end();
})
