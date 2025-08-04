const people = [
   {name:"Alice", email:"Alice@gmail.com"},
	{name:"Bob",email:"BOB@gmail.com"},
	{name:"Alice",email:"ALICE@GMAIL.COM"}
];

function removeDuplicates(people){
   let seen = new Set();
   const result = [];
   for(let person of people){
      let personEmail = person.email.toLowerCase();
      if(!seen.has(personEmail)){
         result.push(person);
      }
      seen.add(personEmail);
   }
   return result;
}

// function findDuplicates(arr) {
//    let hashMap = new Map();
//    let result = [];
//    for(let val of arr){
//       hashMap.set(val,(hashMap.get(val) || 0)+1);
//    }
//    for(let [key,value] of hashMap){
//       if(value<2){
//          result.push(key);
//       }
//    }
//    return result;
// }
// input:
const arr = [1,1,2,3,4,5,5,5];
// output:
// [2,3,4];
// const ans = findDuplicates(arr);
// console.log(ans);


//use map 
//use set
function findDuplicate(arr){
    const seen = new Set();
    const duplicateHash = new Set();
    for(let val of arr){
        if(seen.has(val)){
            duplicateHash.add(val);
        }else{
            seen.add(val);
        }
    }
    return [...duplicateHash];
}

const res = findDuplicate(arr);
console.log(res);
const ans = removeDuplicates(people);
console.log(ans);