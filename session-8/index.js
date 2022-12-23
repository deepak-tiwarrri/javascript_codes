var scope = 'GLOBAL';
var globalVar = 100;
//VAR IS GLOBAL until there is no function, otherwise by default var is functional scope
function getScope() {
  var scope = 'LOCAL';
  var localVar = 30;
  console.log(globalVar);
  console.log(localVar);
}
getScope();
//console.log(localVar);

var a = 10;
function A() {
  var a = 100;
}
function B() {
  var b = 200;
}
A();
B();
//console.log(a);
//console.log(b);

//LET and CONST ARE BLOCK SCOPE(IF, ELSE, LOOP, SWITCH, OBJECT)
function printNumbers() {
  for (var i = 0; i < 5; i++) {
    i = 5;
    false;
    console.log(i);
  }
  console.log('i value outside Loop:- ' + i);
}
printNumbers();

function sayHii() {
  if (globalVar == 20) {
    let num = 'III';
  }
  console.log('Number is:- ' + num);
}
//sayHii();

//LEXICAL SCOPE--> All nested function have accessibility of its Parent and GLobal var
var parentFunc = function () {
  var parentVar = 200;
  var childFunc = function () {
    var childVar = 300;
    console.log('GLOBAL VAR:-' + globalVar);
    console.log('PARENT VAR:-' + parentVar);
    console.log('CHILD VAR:-' + childVar);
  };

  childFunc();
};

parentFunc();

//VAR and FUNCTION DECLARATION only get Hoisted to its scope, LET, CONST, FUNCTION EXPRESSION not getting Hoist
greetEveryone();
function greetEveryone() {
  var time = undefined;
  console.log('Hello everyone, good ' + time);
  time = 'evening';
}

function doAssignment(assignmentNumber, callback) {
  //3,1x1234
  console.log(`Assignment-${assignmentNumber} Started`);
  callback(assignmentNumber);
}

function assignmentFinshed(number) {
  //1x1234
  console.log(`Assignment-${number} finished`);
}

doAssignment(3, assignmentFinshed); //3, 1x1234

function parentFunction() {
  //Lexical Scope of childFunction() START
  const message = "Hi! I'm a message from parent";

  function childFunction() {
    console.log(message);
  }

  return childFunction;
  //Lexical Scope of childFunction() END
}

const ans = parentFunction();
ans();

console.log('Student details from Find function:-' + JSON.stringify(student));

var NumberArr = [20, 4, 34, 8, 1, 25];

/*

The comparator functions takes in two arguments to compare (say a and b) 
If the function returns -ve number then that means to sort a before b
If the function returns a +ve number that means to sort b before a
If it returns 0 then it means to keep the original ordering of a and b
*/

const sortedArr = NumberArr.sort(function (num1, num2) {
  return num2 - num1;
});

console.log(sortedArr);
