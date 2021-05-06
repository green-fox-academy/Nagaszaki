"use strict";

import { StringedInstrument } from "./stringed-instrument";

class BassGuitar extends StringedInstrument {
  constructor() {
    super();
    this.numberOfStrings = 4;
    this.name = "Bass Guitar";
  }

  sound() {
    return "Duum-duum-duum";
  }
}
