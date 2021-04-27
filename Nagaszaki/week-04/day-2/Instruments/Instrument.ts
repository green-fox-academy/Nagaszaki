'use strict'

export abstract class Instrument {
  protected _name: string;
  abstract play();
}