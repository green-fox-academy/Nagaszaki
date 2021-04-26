'use strict'

import {Person} from "./G-F-inheritance-Person";

export class Student extends Person{
 private _prevoiousOrganization: string;
 private _skippedDays: number;

 constructor(name?: string, age?: number, gender?: string, previousOrganization?: string,skippedDays?: number){
  super(name,age,gender);
  this._prevoiousOrganization = previousOrganization || `The School of Life`;
  this._skippedDays = skippedDays || 0;
 }

 public specialGoal(): string{
  return `Be a Junior software developer`;
 }

 public specialIntroduce(): string{
  return `from ${this._prevoiousOrganization} who skipped ${this._skippedDays} days from the course already`
 }
 
 public skipDays(numberOfDays){
  this._skippedDays += numberOfDays;
 }
}