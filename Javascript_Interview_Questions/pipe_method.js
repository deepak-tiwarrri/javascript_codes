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


function pipe(...funcs) {
   //returning new function to take initial arguments
  return function(initialArgument){
   let result = initialArgument;
   for(let fn of funcs){
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

//what if the function is 
function pipeAsync(...funcs) {
    //pipe async will have asynchronous fucntion in the argument
    //so we have to resolve that promise
    return async function (initialArgument) {
        let result = initialArgument;
        //it will now return promise
        for (let fn of funcs) {
            //return the promise
            result = await fn(result);
        }
        return result;
    }
}

const addOne = (x) => x + 1;
const doubleAsync = (x) => new Promise(res => setTimeout(() => res(x * 2), 1000));
const square = (x) => x * x;

const pipeline = pipeAsync(addOne, doubleAsync, square);

pipeline(2).then(console.log);
// Step 1: 2 + 1 = 3
// Step 2: 3 * 2 = 6 (after 100ms)
// Step 3: 6 * 6 = 36
// Outputs: 36



let ans = pipeReduce(getName,getUpperCase,getFirstName,getReversedName);
console.log(ans({'name':"Rahul Ohol"}));

//write the asynchronous version of this
