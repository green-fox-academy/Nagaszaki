/*
Create Student and Teacher classes
Student
    learn() -> prints: the student is actually learning
    question(teacher) -> calls the teacher's giveAnswer() method
Teacher
    teach(student) -> calls the student's learn() method
    giveAnswer() -> prints: the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method
*/

class Student{
    learn(){
        console.log(`The student is actually learning`);
    }
    question(Bteacher: Teacher){
        Bteacher.giveAnswer();
    }
}

class Teacher {
    name = "Gizi";
    teach(_student :Student){
        _student.learn();
    }
    giveAnswer(){

        console.log(`The ${this.name} is answering a question`);
    }
}

let tanulo: Student = new Student;
let tanar: Teacher = new Teacher;
tanulo.question(tanar);
tanar.teach(tanulo);