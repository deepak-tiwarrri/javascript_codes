// Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.
 
// Examples
// const counter = makeCounter(1);
// counter(); // 0
// counter(); // 1
// counter(); // 2


function makeCounter(initial=0){
   let count = initial-1;
   return function(){
      count++;
      return count;
   }
}
const counter = makeCounter();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2
