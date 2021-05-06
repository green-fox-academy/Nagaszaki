"use strict";

import { StringedInstrument } from "./stringed-instrument";

class ElectricGuitar extends StringedInstrument {
  constructor() {
    super();
    this.numberOfStrings = 6;
    this.name = "Electric Guitar";
  }

  sound() {
    return "Twang";
  }
}
