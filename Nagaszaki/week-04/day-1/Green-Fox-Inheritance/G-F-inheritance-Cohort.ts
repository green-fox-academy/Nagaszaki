'use strict'

import {Student} from "./G-F-inheritance-Student";
import {Mentor} from "./G-F-inheritance-Mentor";
import {Sponsor} from "./G-F-inheritance-Sponsor"
import {Person} from "./G-F-inheritance-Person";

class Cohort extends Student{
 private _cohortName: string;
 private _students: Student[];
 private _mentor: Mentor[];

 constructor(name:string){
  super();
  this._cohortName = name;
  this._students = [];
  this._mentor = [];
 }

 addStudent(student: Student){
  this._students.push(student);
 }
 addMentor(mentor: Mentor){
  this._mentor.push(mentor);
 }

 info(): string{
  return `The ${this._cohortName} cohort has ${this._students.length} students and ${this._mentor.length} mentors`;
 }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  console.log(person.introduce());
  console.log(person.getGoal());
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
console.log(awesome.info());