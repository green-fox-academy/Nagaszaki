'use strict'

import {Person} from "./G-F-inheritance-Person";

export class Mentor extends Person{
 private _level: string;

 constructor(name: string = "Jean Doe", age: number = 30, gender: string = "female", level: string = "intermediate"){
  super(name,age,gender);
  this._level = level || `intermediate`;
 }

 public specialGoal(): string {
  return `Educate brilliant junior software developers`;
 }

 public specialIntroduce(): string{
  return `${this._level} mentor`;
 }
}