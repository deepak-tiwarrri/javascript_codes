'use strict';

let message = 'hello from mayank';
console.log(message.length); //COUNT OF CHARACTERS

console.log(message[100]);
console.log(message[6]);
console.log(message[message.length - 1]);
console.log(message.charAt(11)); //ACCESS THE CHAR AT INDEX

//message[11]="M";//STRING IS IMMUTABLE
let num = 1234567890;
console.log(num[3]);
message = 'Hello from CRIO.DO'; //RE-ASSIGNEMT
console.log(message);

let day = 'afternoon';
let name = 'crio';
let dayWish = 'Hello good ' + day + ' ' + name;

let anotherDayWish = `Hello good ${day} ${name}`; //Template literal
console.log(dayWish);
console.log(anotherDayWish);

let anotheMsg = 'Hello 2 you';

console.log(anotheMsg.indexOf('o'));
console.log(anotheMsg.lastIndexOf('o'));

let email = 'abc@123.com';
let email1 = 'abc@123.biz';
let email2 = 'abc@123.net';
let email3 = 'abc@123.org';
console.log(email.indexOf('@') != -1);

//substring(startPos, endPos) extracts a part of a string and returns it in a new string.

//Starting position is from startPos (inclusive)

//Stopping position is just 1 before endPos (not inclusive)

console.log(email.substring(8, email.length));
console.log(email1.substring(8, email.length));
console.log(email2.substring(8, email.length));
console.log(email3.substring(8, email.length));

var str1 = 'Hello ';
var name1 = 'Steve';
var res0 = str1 + name1 + '!' + 'How are you?';
var res = str1.concat(name1, '! ', 'How are you?');
console.log(res);

//CONVERSION
//CONCATE

console.log(2 + 5 + '3'); //73
console.log(1 + '2' + '2'); //122
console.log(1 + +'2' + '2'); //32
console.log(1 + -'1' + '2'); //02
console.log(+'1' + '1' + '2'); //112
console.log('A' - 'B' + '2'); //NAN2
console.log('A' - 'B' + 2); //NAN

function sayHi() {
  console.log(name); //
  console.log(age); //
  var name = 'Lydia';
  let age = 21;
}

sayHi();
