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

const ans = deepCopy(res);
console.log(ans);
ans.social.twitter.private.id = "everywhere@gmail.com";
console.log(ans.social.twitter.private.id);
console.log(res.social.twitter.private.id);
