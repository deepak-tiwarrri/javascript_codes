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
const prom4 = new Promise((res,rej)=>{
   res(4);
});
// const prom3 = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//       reject("got error");
//    },3000);
// })
const prom = Promise.all([prom1,prom2,prom4]).then((data)=>console.log(data)).catch(error=>console.log(error));
//if any thing got reject promise.all reject all the promise and return the reject error
//if all the promise get resolved it returns array of resolved promised

//promise.all takes array of promise url 
Promise.myAll = function(values){
   const promise  = new Promise((resolve, reject) => {
      let result = [];
      let total = 0;
      values.forEach((ele,indx) => {
         Promise.resolve(ele).then((data)=>{
            result[indx] = data;
            total++;
            if(total===values.length){
               resolve(result);
            }
         }).catch(error=>reject(error));
      });
   });
   return promise;
}
// use the polyfill correctly
Promise.myAll([prom1, prom2, prom4]).then(data => console.log('myAll ->', data)).catch(error => console.log(error));