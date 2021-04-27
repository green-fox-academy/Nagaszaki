'use strict'

import {Instrument} from "./Instrument";

export abstract class StringedInstrument extends Instrument{
  protected numberOfStrings: number;

  abstract sound();

  play(){
    console.log(`${this._name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}