//Store player score for all matches
//ARRAY
//store detail of students for 10th standard
//ARRAY OF OBJECT

//How to remove an element from HEAD in an ARRAY

//check if element exist in array-->includes
//check if specific key exist--> hasownproperty

let toppers = [
  {
    name: 'mayank',
    score: [1, 2, 3, 4],
    address: {
      housenumber: 10,
      street: 'sdsadas',
      zipcode: 467890,
    },
  },
  {
    name: 'arun',
    score: [1, 2, 3, 4],
    address: {
      housenumber: 10,
      street: 'sdsadas',
      zipcode: 467890,
    },
  },
  {
    name: 'faizan',
    score: [1, 2, 3, 4],
    address: {
      housenumber: 10,
      street: 'sdsadas',
      zipcode: 467890,
    },
  },
];
//get  the zipcode of arun;
//Iterate over the elements
//check element.name=='arun'
//return element.address.zipcode

//get the rank of "faizan"
//Iterate over the elements
//check element.name=='faizan'
//return element index +1

const num = 303.3 * 3;
console.log('ORIGINAL VALUE:- ' + num);
console.log('After removing decimal values:- ' + Math.trunc(num)); //TRUNCATE FUNCTION ONLY RETURNS INTEGER PART
console.log('<--------------->');
const fare = 10.3 * 7; //72.1

console.log(
  'After rounding to the next higher integer if value if greater than or equal to(.5) else round to next lower number:- ' +
    Math.round(fare)
);
console.log('<--------------->');

console.log(
  'FLOOR will keep the nearest lower value, and remove the decimal part',
  Math.floor(1.99999)
); //

console.log('<--------------->');

console.log('CEIL will keep the nearest higher value', Math.ceil(1.999));
console.log('<--------------->');

console.log('CONSTANT VALUE FOR PI:-' + Math.PI);
console.log('<--------------->');
console.log(
  'Absolute will always return positive  value without disturbing decimals',
  Math.abs(1.0000011111)
);

console.log('<--------------->');
console.log(
  'SQRT will return the squared number with decimal if exist',
  Math.sqrt(16)
);

//2.5555

//TRUNC-->2
//ROUND-->3
//FLOOR-->2
//CEIL--> 3
//ABS-->2.5555
function sayHello() {
  //Function Declaration
  console.log('Hiiiiiii');
}

var sayHii = function () {
  //Function Expression
  return 'Hello from Mayank';
};

console.log(sayHii());

const MESSAGE = () => 'Santa is Coming!';

//function keyword is not mentioned
//Arrow is defined
//No need of return statement for one line execution
//when only one arg, no need of paratheses
var numArr = [10, 34, 8, 9, 4, 32, 12, 56];

//[10, 34, 8, 9, 4, 32, 12, 56]--> [10, 34, 08, 09, 04, 32, 12, 56]
/*
    function addZero(arr){
     const sortedArr=arr.sort();
      for (i=0; i<arr.length;i++){
        if(arr[i]<=9){
          arr[i]="0" + arr[i];
        }
      }
      return arr;
    }
    
    
    */
//TODO--> Maintain Element Sequence
const addZero = arr => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] <= 9) {
      arr[i] = '0' + arr[i];
    }
  }
  return arr;
};
console.log(addZero(numArr));

let studentsScore = [
  {
    Maths: 80,
    Science: 56,
    Computer: 34,
    English: 67,
  },
  {
    Maths: 70,
    Science: 72,
    Computer: 45,
    English: 93,
  },
  {
    Maths: 51,
    Science: 72,
    Computer: 31,
    English: 23,
  },
];

//PASS BY VALUE means create a copy
const a = 10;
const passValue = num => (num = num * 2);

console.log(passValue(a));
console.log('a value is:-' + a);

//PAss by Reference
let player1 = ['Ronaldo', 35, 1122334455]; //1x3423423

let newRonaldo = player1; //newRonaldo--> 1x3423423

newRonaldo.push(819); //GOALS

console.log(newRonaldo.length);
console.log(player1.length);

let profile = {
  //1x1234
  name: 'Mayank Tiwari',
  username: 'MayankTiwari9',
  followers: 30,
};

//let mayankProfile={...profile};
profile['email'] = 'abc@xyz.com';
console.log(profile);
//console.log(mayankProfile);

studentsScore[1]['music'] = 80;
console.log(studentsScore);

function updateFollowers(obj) {
  //REFERENCE ADDRESS OF PROFILE
  obj['followers'] = 100;
  return obj;
}

console.log(updateFollowers(profile).followers); //updateFollowers(1x1234)

//console.log(updateFollowers({...profile}).followers);//updateFollowers({name: "Mayank Tiwari",username:"MayankTiwari9",followers:30})
console.log(profile.followers);
