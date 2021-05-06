"use strict";

import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings;

  abstract sound();

  play() {
    return `${this.name} a ${
      this.numberOfStrings
    } instrument that goes ${this.sound()}`;
  }
}
