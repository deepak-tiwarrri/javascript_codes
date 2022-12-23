let toppers = ['Arun', 'Salman', 'James', 'Salman', 'Raj'];
console.log(toppers.includes('James', 13));

let message = 'Hello from CRIO ';

let words = message.split(' '); //SPLIT ONLY WORKS WITH STRING AND RETUENS AN ARRAY BASED ON SEPERATOR

console.log(words[3]);

let time = '12:30:20';
let timeValue = time.split(':'); //['12', '30', '20']
let seconds = timeValue[2]; //'20'

let timeArr = [10, 45, 59];

let clockTime = timeArr.join(':'); //JOIN ONLY WORKS WITH AN ARRAY AND RETURNS THE STRING BASED ON SEPERATOR
console.log(clockTime);
