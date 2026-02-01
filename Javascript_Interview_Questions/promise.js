const userApi = fetch("https://jsonplaceholder.typicode.com/users");
const postApi = fetch("https://jsonplaceholder.typicode.com/posts");
const commentsApi = fetch("https://jsonplaceholder.typicode.com/comments");

const promiseAll = Promise.all([userApi, postApi, commentsApi])
  .then((response) =>
    Promise.all(response.map((res) => res.json())).then((data) => {
      const [users, posts, comments] = data;
      console.log("users,", users.length);
      console.log("posts,", posts.length);
      console.log("comments,", comments.length);
    }),
  )
  .catch((err) => console.log("One request failed!!", err))
  .finally(console.log("code is executed/finished "));

console.log(promiseAll);

const fastAPI = fetch("https://jsonplaceholder.typicode.com/posts/1");
const slowAPI = fetch("https://jsonplaceholder.typicode.com/users/1");
const brokenAPI = fetch("https://invalid-url.com");

const promiseAny = Promise.any([fastAPI, slowAPI, brokenAPI])
  .then((res) => res.json())
  .then((data) => console.log(data))
  .finally("finished executing apis");

Promise.allSettled([
  Promise.resolve("1"),
  Promise.reject("Opps not found something"),
  Promise.resolve("c"),
]).then((res) => console.log("res:", res));

const promise1 = new Promise((_, reject) =>
  setTimeout(() => reject("failed"), 500),
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("winner"), 100),
);
const promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("I always failed"), 500),
);
//who ever race to fulfilled or reject state fast
//when u want two api to see which one is fast
Promise.race([promise1, promise2, promise3])
  .then((res) => console.log("I passed: ", res))
  .catch((err) => console.log("I failed 😔", err));
