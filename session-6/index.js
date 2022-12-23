let arr = [1, 2, [3, [4, [5, 6, [7, 8, 10]]]]];
//Output--> 1+2+3+4+5+6+7+8;
arr[2]; //[3,[4,[5,6,[7,8,10]]]]
console.log(arr.length);

let sum = 0;
function getSumOfElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      sum = sum + arr[i];
    } else {
      //console.log(`Element at index-${i} is :- ${arr[i]}`);
      getSumOfElement(arr[i]);
    }
  }
  return sum;
}
console.log(getSumOfElement(arr));

const person = {
  name: 'james smith',
  phone: 1122334455,
  isAdult: true,
  skills: ['HTML', 'CSS', 'JS'],
  address: {
    house: 10,
    apartment: 'xyz tower',
    city: 'london',
    zipcode: 334455,
  },
  getAddress: function () {
    console.log(
      `Complete address is: ${this.address.house}, ${this.address.apartment}, ${this.address.city}-${this.address.zipcode}`
    );
  },
};

console.log(person.name);

//Is person knows CSS
console.log(person.skills.includes('React'));
person.getAddress();

const ourStorage = {
  cabinet: {
    'top drawer': {
      folder1: 'a file',
      folder2: 'secrets',
    },
  },
};
//OBJECTNAME.KEYNAME or OBJECTNAME["KEYNAME"] will return value
console.log(ourStorage.cabinet['top drawer'].folder2);

//IF ZIPCODE Available in PERSON

console.log(person.address.hasOwnProperty('Zipcode'));

//const phone=person.phone;
//const name=person.name;
//const isAdult=person.isAdult;

const { name, address, phone } = person;

const { zipcode } = address;

console.log('Hello ' + name + ' with phone number:-' + zipcode);

const score = [23, 30, 45, 32, 49, 45]; //SC,ENG, MATHS, COMP, SCIENCE, HISTORY
//const computer_score=score[2];
//const Science_score=score[3];

const [, , , computer_score, Science_score] = score;

console.log(computer_score);
console.log(Science_score);

var student = [
  {
    name: 'Kevin',
    std_id: 10,
  },
  {
    name: 'Austin',
    std_id: 20,
  },
  {
    name: 'Robin',
    std_id: 30,
  },
];
const [, student2] = student;
const { std_id } = student2;
console.log(std_id);

//GET the id based on name
//==> Austin-->20

//write a function with name parameter
//Iterate over the elements of student
//check if element with property name == name(arg)
//return student id

function getStudentId(students, studentName) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name == studentName) {
      return students[i].std_id;
    }
  }
}

console.log(getStudentId(student, 'Kevin'));
console.log(303.3 * 3);

let scale = 1;
let a = -0 / scale;
console.log(a);
