const data = [
  { _id: '1', name: 'Vivek' },
  { _id: '2', name: 'Neha' },
  { _id: '3', name: 'Deepak' },
  { _id: '4', name: 'Aishwarya' },
  { _id: '4', name: 'Sonu' },
];

for (let i = 0; i < data.length; i++) {
  if (data[i]._id === '4') {
    console.log(data[i]);
    break;
  }
}
// this will print both Aishwarya and Sonu
// const filterValue = data.filter(item => item._id === '4');
// console.log(filterValue);

let a = [1, 2, 3, 4, 5];
console.log(a.splice(2, 4));
console.log(a);
console.log(a.slice(2, 4));

console.log('50' + 50 - 50);

let str = 'Kevin';
str[0] = 'R';
console.log(str);

let arr = [4, 30, 2, 10];
const value = arr.sort((a, b) => a - b);
console.log(value);

const array = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 40 },
  { name: 'Eve', age: 20 },
];
function filterByName(array) {
  return array.filter(item => item.name[0] === 'A');
}
const filterValue = filterByName(array);
console.log(filterValue);
