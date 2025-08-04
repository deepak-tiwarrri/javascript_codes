const people = [
   {name:"Alice",age:25},
   {name:"Bob",age:30},
   {name:"Charlie",age:25}
];

function groupPeopleByAge(people){
   return people.reduce((acc, person) => {
      const key = person.age;
      if(!acc[key]){
         acc[key] = [];
      }
      acc[key].push(person);
      return acc;
   },{})
}

function groupPeopleByAgeII(people){
   const result = {};
   for(let person of people){
      if(!result[person.age]){
         result[person.age] = [];
      }
      result[person.age].push(person);
   }
   return result;
}
const res = groupPeopleByAgeII(people);
console.log(res);