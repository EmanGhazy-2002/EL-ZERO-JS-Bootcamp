const objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

const objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

const objMethodThree = Object.create(null);
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

const objMethodFour = Object.assign({ property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
