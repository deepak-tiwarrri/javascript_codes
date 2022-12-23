//filter example
const numbers = [1, 2, 3, 4, 5, 78, 9, 8];
const value = numbers.filter(item => item % 2 != 0);
console.log(value);

/* filter with example*/
const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 },
];
const studentGrades = students.filter(studentMarks);
function studentMarks(element) {
  return element.grade >= 90;
}
console.log(studentGrades);

// map return the true or false value if condition is passed
// map is prefer for doing the math problem
let array = [96,84,100,65,90];
const mapValue = array.map(item => item >=90);
for(let i = 0;i<array.length;i++){
      if(mapValue[i] === true){
            console.log(array[i]);
      }
}
