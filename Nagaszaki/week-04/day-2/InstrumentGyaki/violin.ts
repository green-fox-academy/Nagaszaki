"use strict";

import { StringedInstrument } from "./stringed-instrument";

class Violin extends StringedInstrument {
  constructor() {
    super();
    this.numberOfStrings = 4;
    this.name = "Violin";
  }

  sound() {
    return "Screech";
  }
}
