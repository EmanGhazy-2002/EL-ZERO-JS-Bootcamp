let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num, true);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
myFriends.length--;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
