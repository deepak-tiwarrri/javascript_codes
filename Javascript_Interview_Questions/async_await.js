// function getUser() {
//   return fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => res.json())
//     .then((user) => {
//       console.log("User:", user.name);
//       return user;
//     })
//     .catch((err) => console.error("Error:", err));
// }

//👆 question answer below using async await
async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("user: ", user.name);
    return user;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
getUser();

// function getUserAndPosts() {
//   return fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => res.json())
//     .then((user) => {
//       return fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
//       );
//     })
//     .then((res) => res.json())
//     .then((posts) => {
//       console.log("Posts:", posts.length);
//     })
//     .catch((err) => console.error(err));
// }

//👆 question answer below using async await

async function getUserAndPosts() {
  try {
    const fetchUserOne = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const user = await fetchUserOne.json();
    const fetchPostsUsingUserId = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    );
    const posts = await fetchPostsUsingUserId.json();
    console.log("posts lengths: ", posts.length);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
getUserAndPosts();

// function getData() {
//   return Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1"),
//     fetch("https://jsonplaceholder.typicode.com/posts/1"),
//   ])
//     .then((responses) => Promise.all(responses.map((r) => r.json())))
//     .then(([user, post]) => {
//       console.log("User:", user.name);
//       console.log("Post:", post.title);
//     })
//     .catch((err) => console.error(err));
// }

async function getData() {
  try {
    const fetchUserAndPostForUserIdOneResponse = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);
    const responses = await Promise.all(
      fetchUserAndPostForUserIdOneResponse.map((res) => res.json()),
    );
    const [user, post] = responses;
    console.log(`Users: ${user.name}`);
    console.log(`Post: ${post.title}`);
    return [user, post];
  } catch (err) {
    console.error(err);
  }
}

getData();
