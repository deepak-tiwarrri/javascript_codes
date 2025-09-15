//TODO: write the polyfills for promise.all method
const prom1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("gdffd");
   },1000);
});
const prom2 = new Promise((resolve, reject) => {
   setTimeout(()=>{
      resolve("after 2s");
   },2000);
});
const prom3 = new Promise((resolve, reject) => {
   setTimeout(()=>{
      resolve("after 3s");
   },3000);
})
const prom = Promise.all([prom1,prom2,prom3]).then((data)=>console.log(data)).catch(error=>console.log(error));