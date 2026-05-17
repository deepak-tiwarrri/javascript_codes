const getName = (input)=> input.name;
const getUpperCase = (input)=>input.toUpperCase();
const getFirstName = (input)=> input.split(' ')[0];
const getReversedName = (input)=> input.split('').reverse().join('');

const name = getName({name:'Deepak Tiwari'});
// console.log(name);
const upperCase = getUpperCase(name);
// console.log(upperCase);
const firstName = getFirstName(upperCase);
// console.log(firstName);
const reverseName = getReversedName(firstName);
// console.log(reverseName);

const result = getReversedName(getFirstName(getUpperCase(getName({'name':'Rahul Ohol'}))))
// console.log(result);

//pipe(getName,getUpperCase,getFirstName,getReverseName)


function pipe(...fncs) {
   //returning new function to take initial arguments
   return function (initialArgument) {
      let result = initialArgument;
      for(let fn of fncs){
         result = fn(result);
      }
      return result;
   }
}

//using reduce mehtod
function pipeReduce(...fncs){
   return function(initialArgument){
      //return is used here so at last u have to return something right
      return fncs.reduce((accumulator,fn)=>{
         //return here the fucntion ans and the next time accumulator will be changed to that ans
         return fn(accumulator)
      },initialArgument)
   }
}
let ans = pipeReduce(getName,getUpperCase,getFirstName,getReversedName);
console.log(ans({'name':"Rahul Ohol"}));

//write the asynchronous version of this
