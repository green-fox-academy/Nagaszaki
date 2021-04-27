'use strict'

import {StringedInstrument} from "./StringedInstrument";

export class ElectricGuitar extends StringedInstrument {

  constructor(number?: number){
    super();
    this.numberOfStrings = number || 6;
    this._name = "ElectricGuitar";
  }

  sound(){
    return `Twang`;
  }


}

export class BassGuitar extends StringedInstrument{

  constructor(number?: number){
    super();
    this.numberOfStrings = number || 4;
    this._name = "BassGuitar";
  }

  sound(){
    return `Duum-duum-duum`;
  }

}

export class Violin extends StringedInstrument{

  constructor(number?: number){
    super();
    this.numberOfStrings = number || 4;
    this._name = "Violin";
  }

  sound(){
    return `Screech`;
  }

}