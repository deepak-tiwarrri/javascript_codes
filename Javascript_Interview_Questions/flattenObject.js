
function flattenObj(obj){
   let res = {};
   for(let ele in obj){
      console.log(ele);
      //to check if the ele is object or not and then act accordingly
      if(typeof obj[ele] ==='object' && obj[ele]!==null){
         console.log("res ",res);
         console.log("flattenObject[] ",{...flattenObj[obj[ele]]})
         res = {...res,...flattenObj(obj[ele])}
      }else{
         console.log("res[ele] ",res[ele]);
         res[ele] = obj[ele]
      }
   }
   return res;
}

// input
// const obj1 ={
//    a:1,
//    b:2,
//    c:{
//       d:3,
//       e:4
//    }
// };
// const obj2= {
//    a:1,
//    b:2,
//    c:{
//       d:3,
//       e:4,
//       f:{
//          g:5
//       },
//       h:null,
//       j:"hii"
//    }
// };
// console.log(flattenObj(obj1));
// // console.log(flatten(obj1))
// //ouput: {a:1,b:2,d:3,e:4}
// console.log(flattenObj(obj2));
//  // { a: 1, b: 2, d: 3, e: 4, g: 5, h: null, j: 'Hi' }



////-----------------------------////////---------------------//////

//this questions is also asked as flattenWithPrefix
function flattenObjectTwo(obj){
   const res = {};
   for(let key in obj){
      //check if the typeof key is object or not also null is any object and key shouldn't be an array
      if(typeof obj[key]==='object' && !Array.isArray(obj[key]) && obj[key]!==null ){
         //then you will iterate in the object again
         let temp = flattenObjectTwo(obj[key]);
         for(let innerKey in temp){
            //now u know that temp is an object
            res[key+"."+innerKey] = temp[innerKey];
         }
      }else{
         //store key and it's value in resultant array
         res[key]= obj[key];
      }
   }
   return res;
}
const obj1 ={
   a:1,
   b:2,
   c:{
      d:3,
      e:4
   }
};
const obj2= {
   a:1,
   b:2,
   c:{
      d:3,
      e:4,
      f:{
         g:5
      },
      h:null,
      j:"hii"
   }
};
console.log(flattenObjectTwo(obj1, ''));
//  { a: 1, b: 2, 'c.d': 3, 'c.e': 4 }
 console.log(flattenObjectTwo(obj2, ''));
//  { a: 1, b: 2, 'c.d': 3, 'c.e': 4, 'c.f.g': 5, 'c.h': null, j:
//  'Hi' }