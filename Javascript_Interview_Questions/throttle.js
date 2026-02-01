/**
 * 
 * @param {Function} mainFunction 
 * @param {number} delay 
 * @returns function
 */
function throttle(mainFunction, delay) {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      mainFunction.apply(this, args);
    }
    timer = setTimeout(() => {
      //clear the timer after the speicific delay so that timer can be executed again
      timer = null;
    }, delay);
  };
}
function throttle2(mainFunction, delay) {
  let timerId;
  return function (...args) {
    if (timerId === null) {
      mainFunction.apply(this, args);
    }
    timerId = setTimeout(() => {
      timerId = null;
    }, delay);
  };
}
function sayHello(){
   console.log(`My name is ${this.name} at ${new Date().toLocaleTimeString()}`);

}
const amy = {
   name:"Amy",
   speak: throttle(sayHello,2000),
}
// amy.speak();
setInterval(()=>{
   amy.speak();
},500)

