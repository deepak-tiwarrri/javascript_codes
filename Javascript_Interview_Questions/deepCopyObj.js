function deepCopy(obj) {
   if(typeof obj!=='object' || obj===null) return obj;

   //it can be array or object
   let copiedVal = Array.isArray(obj)?[]:{};

   let keysOfObj = Object.keys(obj);
   //[name,age,social]
   for(let key of keysOfObj){
      copiedVal[key] = deepCopy(obj[key]);
   }
   return copiedVal;
}

const person = {name:"harsh",age:22,social:{
   insta:"somewhere@gmail.com",
   facebook:"somewhere23@gmail.com"
}};
const res = deepCopy(person);
res.social.insta = 'changed';
console.log(`res object: ${res.social.insta}`);
console.log(`person object: ${person.social.insta}`);
//output
// res object: changed
// person object: somewhere@gmail.com
