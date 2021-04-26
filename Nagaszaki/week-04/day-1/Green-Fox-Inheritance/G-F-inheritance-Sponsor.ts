'use strict'

import {Person} from "./G-F-inheritance-Person";

export class Sponsor extends Person{
 private _company: string;
 private _hiredStudents: number;

 constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google"){
  super(name,age,gender);
  this._hiredStudents = 0;
 }

 public specialIntroduce(): string{
  return ` who represents ${this._company} and hired ${this._hiredStudents} so far`;
 }

 public specialGoal(): string{
  return ` Hire brilliant junior software developers`;
 }

 public hire(): void{
     this._hiredStudents++;
 }
}