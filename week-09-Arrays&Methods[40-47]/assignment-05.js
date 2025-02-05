let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Solution 1:
console.log(haystack.indexOf(needle) && "found");

// Solution 2:
console.log(haystack.includes(needle) && "found");

// Solution 3:
console.log(haystack.findIndex((item) => item === needle) && "found");

// Solution 4:
for (const item of haystack) {
  if (item === needle) console.log("found");
}

// Solution 5:
console.log(haystack.lastIndexOf(needle) && "found");
