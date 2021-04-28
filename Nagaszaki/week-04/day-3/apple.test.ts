'use strict'

import { Apple } from './apple';
import * as test from 'tape';

test('Get the apples', t => {
  const apple = new Apple;
  t.equal(apple.getApple(),'apple');
  t.end();
})