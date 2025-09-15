function sayHello(){
   console.log(`My name is ${this.name}`);
}
function debounce(func,wait=200){
   let timer=null;
   return function(...args){
      clearTimeout(timer);
      timer = setTimeout(()=>{
         timer=null;
         return func.apply(this,args);
      },wait)
   }
}
let startTime = Date.now();
const fetchData = ()=>{
   console.log(`fetchData called after ${Date.now()-startTime}`);
}
const debounceFn = debounce(fetchData);
debounceFn();
// const amy = {
//    name:"Amy",
//    speak: debounce(sayHello),
// }
// amy.speak();