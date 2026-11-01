function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  //if someone pass the array then
  const copiedVal = Array.isArray(obj) ? [] : {};

  //now find the whether key of all the object
  const keyOfObj = Object.keys(obj);
  //['name','age','social','insta']
  for (let key of keyOfObj) {
    copiedVal[key] = deepCopy(obj[key]);
  }
  return copiedVal;
}


function deepCopyII(obj){
  if(typeof obj!=='object' ||  obj===null) return obj;
  const copiedValue  =  Array.isArray(obj)? []: {};
  let keysOfObj = Object.keys(obj);
  for(let key of keysOfObj){
    console.log(`key: ${key}`);
    copiedValue[key] = deepCopy(obj[key]);
  }
  return copiedValue;

}



const res = {
  name: "Deepak",
  age: 18,
  social: {
    insta: "somewhere@gmail.com",
    twitter: {
      private: {
        id: "somewhere483@gmail.com",
      },
      public: {
        id: "johnny483@gmail.com",
      },
    },
  },
};


function deepCopyUsingJs(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const ans = deepCopyII(res);
console.log(ans);
console.log(typeof null);
if(ans===res) console.log('true');
else console.log('false');
