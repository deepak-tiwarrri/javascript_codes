// Promise.all
// `Promise.all()` is a helper function provided by javascript to
// handle multiple promises at once, in parallel, and get the
// results in a single aggregated array

let promise1 = new Promise((resolve, reject) => {
   setTimeout(()=>{
      resolve("I'm passed in 1s")
   },1000)
})
let promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("I'm passed in 2s")
   }, 2000);
})
let promise3 = new Promise((resolve, reject) => {
   setTimeout(()=>{
      resolve("I'm rejected")
   },3000)
})
Promise.all([promise1,promise2,promise3]).then(data=>{
   console.log(data)
}).catch(error=>{
   console.log('errro: ',error)
})
// [ "I'm passed in 1s", "I'm passed in 2s", "I'm rejected" ]


//take array as arguments
//return array of resolved promise and all the promise is fullfilled else reject
// you have to check the length of the array
Promise.myAll = function(values){
   let promiseAll = new Promise((resolve, reject) => {
      let result = [];
      let total = 0;
      if(values.length===0)
         return resolve([]);
      
      values.forEach((ele,index) => {
         //nnow each value of the promise is the promise itself so it willreturn the promise
          Promise.resolve(ele).then(data=>{
            result[index] = data;
            total++;
            if(values.length===total){
               resolve(result)
            }
         }).catch(error=>reject(error))
      });

   })
   return promiseAll
}