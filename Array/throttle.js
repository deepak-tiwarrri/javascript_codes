function throttle(mainFunction,delay){
   let timer = null;
   return function(...args){
      if(timer===null){
         mainFunction.apply(this,args);
      }
      timer = setTimeout(()=>{
         //clear the timer each time
         timer = null;
      },delay)
   }
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

