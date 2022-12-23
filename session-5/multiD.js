let student1_score = [80, 56, 34, 67];
let student2_score = [70, 72, 45, 93];
let student3_score = [51, 72, 31, 23];

const student1_marks = {
  Maths: 80,
  Science: 56,
  Computer: 34,
  English: 67,
};
const student2_marks = {
  Maths: 70,
  Science: 72,
  Computer: 45,
  English: 93,
};
const student3_marks = {
  Maths: 51,
  Science: 72,
  Computer: 31,
  English: 23,
};
let studentsScore = [student1_marks, student2_marks, student3_marks]; //Array of objects
let score = [student1_score, student2_score, student3_score];
//[[80, 56, 34,67], [70, 72, 54,93], [51,72,31,23]]; Array of Arrays

//Get student2 English Marks
console.log(score[1][3]);
//Get student2 Maths Marks
console.log(score[2][0]);

function printStudentMarks(studentscores) {
  for (let i = 0; i < studentscores.length; i++) {
    for (j = 0; j < studentscores[i].length; j++) {
      console.log(
        `Student ${i + 1} Score for subject-${j + 1}:-${studentscores[i][j]}`
      );
    }
  }
}
printStudentMarks(score);

console.log(student3_marks['Computer']);

//get English mark for Student 2 from studentsScore collection
console.log(studentsScore[1].Computer);

let shinobi = {
  name: 'Naruto Uzumaki',
  family: 'green',
  age: 17,
  village: 'Leaf Village',
  isNinja: true,
};
console.log(typeof shinobi.name); //STRING
console.log(typeof shinobi.family); //  STRING
console.log(typeof shinobi.age); // NUMBER
console.log(typeof shinobi.village); // STRING
console.log(typeof shinobi.isNinja); // BOOL

let person = {};
console.log(person);

person.name = 'James';
person.age = 23;
person.isAdult = true;
console.log(person);
console.log(person.hasOwnProperty('age'));
delete person.age;
console.log(person.age);
