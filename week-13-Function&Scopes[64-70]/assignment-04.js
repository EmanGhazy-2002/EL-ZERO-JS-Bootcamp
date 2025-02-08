function specialMix(...data) {
  // Your Code Here
  let counter = 0;
  for (const num of data) {
    if (isNaN(parseFloat(num))) {
      continue;
    }
    counter += parseFloat(num);
  }
  return counter === 0 ? "All Is Strings" : counter;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
