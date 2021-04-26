'use strict'
export class Person{
 private _name: string;
 private _age: number;
 private _gender: string;

 constructor(name?: string, age?: number, gender?: string){
  this._name = name || "Jane Doe";
  this._gender = gender || "female";
  this._age = age || 30;
 }

 public getGoal():string{
  return `My goal is: ${this.specialGoal()}`;
 }

 public specialGoal(): string{
  return 'Live for the moment';
 }

 public introduce(): string{
  return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this.specialIntroduce()}`;
 }

 public specialIntroduce(): string{
  return ``;
 }
}