'use strict'

import { Sharpie } from '../../week-03/day-3_4/sharpie'
import * as test  from 'tape';

test('should ', t => {
  let sharpie = new Sharpie('yellow',10);
  sharpie.use();
  t.equal(sharpie.inkAmmount,90);
  t.end();
})
