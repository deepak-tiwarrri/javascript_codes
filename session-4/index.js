let name = 'Mayank Tiwari';

//INITIALIZATION
//CONDITION
//INCREMENT/DECREMENT
/*
for (begin ; condition ; step) {
  		// ... loop body …
}

*/

//Print all even numbers till 20;

//++i--> PRE-incrment-->i=i+1
//i++--> POST-incrment-->0
//--i --> PRE-decrement
//i-- --> POST-decrement

//INIT-->CONDITION--> BODY--> INCREMENT
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}
// 0 ; 0<=20; print 0; i=0+1
// 1 ; 1<=20; -------; i=1+1
// 2 ; 2<=20; print 2; i=2+1
// 3 ; 3<=20; --------; i=3+1
// 4 ; 4<=20; print 4; i=4+1
// 5 ; 5<=20; --------; i=5+1

let n = 0;
let m = 0;
console.log(n++);
console.log(++m);

let a = 1;
let b = ++a; //increment a value by '1' and store updated value in 'a' the assign updated value of 'a' to 'b'
console.log('a:' + a + ';b:' + b);

var c = 1;
var d = c++; //Assign value of 'c' to 'd' the increment value of 'c' by 1 and update to 'c';
console.log('c:' + c + ';d:' + d);
for (let i = 0; i < 5; i++) {}
//we can say i=O : i<5 : i++ means it will run 5 times with the values starting from 0 through to 4

let student1_name = 'john';
let student1_email = 'john@example.com';
let student1_phone = 1122334455;

let student2_name = 'Adam';
let student2_email = 'adam@example.com';
let student2_phone = 87928372137;

let student3_name = 'Tom';
let student3_email = 'Tom@example.com';
let student3_phone = 6545654323;

let student1_details = ['john', 'john@example.com', 1122334455, 789297932];
let student2_details = ['Adam', 'adam@example.com', 87928372137, 897887889];
let student3_details = ['Tom', 'Tom@example.com', 6545654323, 92828829];

let arr = [];

let carModel = ['Audi', 'BMW', 'TATA', 'JAGUAR'];

carModel[5] = 'BENTLEY';
console.log(carModel);

console.log(carModel.length); //Number of elements inside an array

carModel = ['Mahindra', 'Hyundai', 'KIA', 'MG'];

for (let i = 0; i < carModel.length; i++) {
  console.log(carModel[i]);
}

let romanNumbers = ['I', 'II', 'III', 'IV', 'V'];

console.log(romanNumbers.push('VI')); //6
console.log(romanNumbers.push('VII')); //it will insert the element at the tail and return the updated length
console.log(romanNumbers);
console.log(romanNumbers.pop()); //it will remove element from tail and return the popped element

console.log(romanNumbers.unshift('ZERO')); //It will add element to the head and returns the updated length

console.log(romanNumbers);
const poppedHead = romanNumbers.shift();

console.log(poppedHead); //It will pop the value from head and returns the popped element

console.log(romanNumbers);

//SLICE
//SPLICE

let months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

console.log(months.sort());

var num = [22, 55, 14, 19, 52];
console.log(num.sort());
console.log(romanNumbers.reverse());

const oddNoArray = [1, 3, 5];
oddNoArray[100] = 199;
console.log(oddNoArray.length);

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//write a function where all odd number at lefthand side and even at right side in sorted manner
//INPUT--> [1,2,3,4,5,6,7,8,9];
//OUTPUT--> [1,3,5,7,9,2,4,6,8];

//INPUT--> [2,1,9,7,3,4,8,6,5];

//WRITE SORTFUNCTION
//CREATE TWO SUB ARRAY-ONE FOR ODD AND ANOTHER FOR EVEN
//LOOP OVER EVERY ELEMENT OF ANY ARRAY
//CHECK CONDITION IF ELEMENT ODD THEN PUSH TO ODD ARRAY
//ELSE THEN PUSH TO EVEN ARRAY
//RETURN THE CONCATE OF ODD AND EVEN

function sortEvenOdd(arr) {
  let odd = [];
  let even = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return odd.sort().concat(even.sort()); //[1,3,5,7,9].concat([2,4,6,8]);
}

console.log(sortEvenOdd([2, 1, 9, 7, 3, 4, 8, 6, 5]));
