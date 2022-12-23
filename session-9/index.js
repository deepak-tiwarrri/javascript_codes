var romanNum = ['I', 'II', 'III', 'IV', 'V'];
//1 in roman number--> I
romanNum.forEach(printNumbers); //FORECH will only iterate on every element of an array

function printNumbers(element, index) {
  // console.log(`${index+1} in roman number--> ${element}`);
}

romanNum.forEach(function (element, index) {
  //  console.log(`${index+1} in roman number--> ${element}`);
});

const data = [
  { _id: '1', name: 'Vivek' },
  { _id: '2', name: 'Neha' },
  { _id: '3', name: 'Satya' },
  { _id: '4', name: 'John' },
  { _id: '4', name: 'Amit' },
];

for (var itr = 0; itr < data.length; itr++) {
  if (data[itr]._id === '4') {
    console.log(data[itr]);
    break;
  }
}
//Find utility function returns the first element that statify the condition
//Whichever element statisfy the condition first, that would be te return result of FIND function
/*
let student=data.find(function (ele, idx){
  if(ele["_id"]==4){
    return ele;
  }
})*/
let student = data.find((ele, idx) => ele['_id'] == 4);

const names = ['Bill', 'Kelly', 'John'];
//["My Name is Bill", " My Name is Kelly", "My Name is John"]

//create new var for storing the end result
//Iterate through forEach
//Concatenate with Element
//Push to result

const res = [];
names.forEach(ele => res.push(`My Name is ${ele}`));
console.log(res);

//MAP returns new Array based on iteration and callback functionality
/*
  names.map(function(name){
  return `My Name is ${name}`;
});
*/
console.log(names.map(name => `My Name is ${name}`));

const people = [
  { Name: 'Bill', age: 20 },
  { Name: 'John', age: 60 },
  { Name: 'Mark', age: 10 },
  { Name: 'James', age: 15 },
];
//Filter will gives the result as an Array will all elements which satisfy the condition
console.log(people.filter(person => person.age < 50));

const players = [
  { FName: 'Hardik', LName: 'Pandya', Score: 40 },
  { FName: 'Virat', LName: 'Kohli', Score: 100 },
  { FName: 'Dinesh', LName: 'Karthik', Score: 33 },
  { FName: 'Rohit', LName: 'Sharma', Score: 45 },
  { FName: 'MS', LName: 'Dhoni', Score: 50 },
];

//["HArdik Pandya", "Virat Kohli", ]
//Create new Var to store result
//Iterate through Players
//Add Score to the result for every player
//return the score
/*
  let finalScore=0;
players.forEach((player)=>finalScore+=player.Score);//finalScore=finalScore+player.Score;
*/
const finalScore = players.reduce(function (total, player, index, currentArr) {
  //140,   {"Name": "Dinesh", "Score":33}
  return total + player.Score; //40--> 40 +100--> 140 +33--> 173
}, 0);

const PlayersFullName = players.reduce(function (Name, player, idx) {
  Name.push(player.FName + ' ' + player.LName);
  return Name;
  //return [...Name, player.FName + " " + player.LName];
}, []);

console.log(`Team Final Score ${finalScore}`);
console.log(PlayersFullName);

const colors = ['purple', 'red', 'white', 'blue', 'gold'];

console.log(colors.slice(1, 4)); //SLICE Will provide a new SubArray based on Starindex and EndIndex(Excluded) similar to Substr

const foods = ['burger', 'pizza', 'Dosa', 'donut', 'bread', 'pasta'];
foods.splice(2); //Splice will modifiy the original arra bsed on Start index and how many element need to be removed
console.log(foods);

players.forEach(function (player, idx) {
  console.log(`Play order- ${idx + 1}, ${player.FName}`);
});
