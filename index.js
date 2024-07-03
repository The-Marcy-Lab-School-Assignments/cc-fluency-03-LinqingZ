const users = [
  {
    name: "Reuben",
    username: "@blood_pressure_killa",
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege.",
  },
  {
    name: "Laisha",
    username: "@passaic_papi",
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours.",
  },
  {
    name: "Anne",
    username: "@i_love_bambas",
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend",
  },
  {
    name: "Steph",
    username: "@queen_of_the_kew",
    followers: 1200,
    verified: false,
    bio: "✌🏼",
  },
  {
    name: "Carmen",
    username: "@omar_apollo_fanclub",
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21.",
  },
];

// Q1
const logAllNames = (users) => {
  users.forEach((user) => {
    console.log(user.name);
  });
};
console.log("Question 1--------------------");
logAllNames(users);

// Q2
const getAllTags = (users) => {
  users.forEach((user) => {
    console.log(`Hi My name is ${user.name}, and my tag is ${user.username}`);
  });
};

console.log("Question 2--------------------\n");
getAllTags(users);

// Q3
const sumAllFollowers = (users) => {
  // let total = 0;
  // users.forEach((user) => {
  //     total += user.followers
  //   });
  //   return total

  //   return users.reduce(
  //     (total, currUser) => total + currUser.followers,
  //     0
  //   );

  // destructing the object
  return users.reduce((total, { followers }) => total + followers, 0);
};
console.log("Question 3--------------------\n", sumAllFollowers(users));

// Q4
const searchUsername = (users, username) => {
  //   return users.filter((user) => user.username === username);
  return users.find((user) => user.username === username);
};

console.log(
  "Question 4--------------------\n",
  searchUsername(users, "@passaic_papi")
);

// Q5

// const longWinded = (users) => {
//     let longest = 0
//     let longestBio = []
//     users.forEach((user) =>{
//         if (user.bio.length > longest){
//             if (longestBio.length >0){
//                 longestBio.pop()
//             }
//             longestBio.push(user)
//         }
//     })
//     return longestBio

// }
const longWinded = (users) => {
//   const getLongest = (a, b) => a.bio.length > b.bio.length ? a : b;
//   const longest = users.reduce(getLongest);
//   return longest;

  return users.reduce((a, b) => a.bio.length > b.bio.length ? a : b)
};

console.log("Question 5--------------------\n", longWinded(users));

const follower = (users) => {
  return users.sort((a, b) => a.followers - b.followers);
};

console.log("Question 6--------------------\n", follower(users));
